import { ConflictException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '@prisma/prisma.service';
import { UpdateUserInput } from '@user/input/update-user.input';
import { DeleteUserInput } from '@user/input/delete-user.input';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async comparePassword(password: string, hashedPassword: string) {
    return await bcrypt.compare(password, hashedPassword);
  }

  async hashPassword(password: string) {
    return await bcrypt.hash(password, 10);
  }

  async updateUser(updateUserInput: UpdateUserInput) {
    const { id, ...data } = updateUserInput;

    // 1. Переконатися, що користувач із таким ID існує
    const existingUser = await this.prisma.user.findUnique({ where: { id } });
    if (!existingUser) {
      throw new ConflictException('User not found');
    }

    // 2. Якщо оновлюється email, переконатися, що він не зайнятий іншим
    if (data.email) {
      const userWithSameEmail = await this.prisma.user.findUnique({
        where: { email: data.email },
      });
      if (userWithSameEmail && userWithSameEmail.id !== id) {
        throw new ConflictException('Email already in use');
      }
    }

    // 3. Збираємо прості поля для оновлення user
    const updateDataForUser: any = {};
    if (data.username) updateDataForUser.username = data.username;
    if (data.email) updateDataForUser.email = data.email;
    if (data.full_name) updateDataForUser.full_name = data.full_name;
    if (data.gender) updateDataForUser.gender = data.gender;
    // Якщо у вас є інші поля (наприклад, goals), додайте їх сюди

    // 4. Оновлюємо user простими полями
    await this.prisma.user.update({
      where: { id },
      data: updateDataForUser,
    });

    // 5. Якщо прийшли дані по height, робимо окремий upsert у таблиці "height"
    //    Припускаємо, що у таблиці height є поле userId, яке з’єднане з user(id)
    if (data.height) {
      // Чи є взагалі запис у таблиці height для цього user’а?
      const existingHeight = await this.prisma.height.findUnique({
        where: { user_id: id },
      });
      if (existingHeight) {
        // update
        await this.prisma.height.update({
          where: { user_id: id },
          data: {
            value: data.height.value,
            unit: data.height.unit,
          },
        });
      } else {
        // create
        await this.prisma.height.create({
          data: {
            user_id: id,
            value: data.height.value,
            unit: data.height.unit,
          },
        });
      }
    }

    // 6. Аналогічно для weight
    if (data.weight) {
      const existingWeight = await this.prisma.weight.findUnique({
        where: { user_id: id },
      });
      if (existingWeight) {
        await this.prisma.weight.update({
          where: { user_id: id },
          data: {
            value: data.weight.value,
            unit: data.weight.unit,
          },
        });
      } else {
        await this.prisma.weight.create({
          data: {
            user_id: id,
            value: data.weight.value,
            unit: data.weight.unit,
          },
        });
      }
    }

    // 7. Аналогічно для goal_weight
    if (data.goal_weight) {
      const existingGoalWeight = await this.prisma.goalWeight.findUnique({
        where: { user_id: id },
      });
      if (existingGoalWeight) {
        await this.prisma.goalWeight.update({
          where: { user_id: id },
          data: {
            value: data.goal_weight.value,
            unit: data.goal_weight.unit,
          },
        });
      } else {
        await this.prisma.goalWeight.create({
          data: {
            user_id: id,
            value: data.goal_weight.value,
            unit: data.goal_weight.unit,
          },
        });
      }
    }

    // 8. Якщо є performance-дані
    if (data.performance) {
      const { max_pull_ups, max_push_ups, max_squats, max_dips } =
        data.performance;

      // Якщо треба, щоб усі поля були обов’язково
      if (
        max_pull_ups == null ||
        max_push_ups == null ||
        max_squats == null ||
        max_dips == null
      ) {
        throw new ConflictException('Performance data is incomplete');
      }

      // Чи є запис performance для user’а?
      const existingPerformance = await this.prisma.performance.findUnique({
        where: { user_id: id },
      });
      if (existingPerformance) {
        await this.prisma.performance.update({
          where: { user_id: id },
          data: {
            max_pull_ups,
            max_push_ups,
            max_squats,
            max_dips,
          },
        });
      } else {
        await this.prisma.performance.create({
          data: {
            user_id: id,
            max_pull_ups,
            max_push_ups,
            max_squats,
            max_dips,
          },
        });
      }
    }

    // 9. Тепер, щоб повернути оновлені стосунки (height, weight, goal_weight, performance),
    //    ми можемо зробити ще один запит з include
    const finalUser = await this.prisma.user.findUnique({
      where: { id },
      include: {
        height: true,
        weight: true,
        goal_weight: true,
        performance: true,
      },
    });

    // 10. Повертаємо акуратну відповідь
    return {
      message: 'User profile updated successfully',
      statusCode: HttpStatus.OK,
      user: finalUser,
    };
  }

  async deleteUser(deleteUserInput: DeleteUserInput) {
    const { id } = deleteUserInput;

    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new ConflictException('User not found');
    }

    await this.prisma.user.delete({
      where: { id },
    });

    return {
      message: 'User profile deleted successfully',
      statusCode: HttpStatus.OK,
    };
  }
}
