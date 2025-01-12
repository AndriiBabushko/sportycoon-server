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

    const userWithID = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!userWithID) {
      throw new ConflictException('User not found');
    }

    const userWithEmail = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (userWithEmail && userWithEmail.id !== id) {
      throw new ConflictException('Email already in use');
    }

    const relatedUpdates: any = {};

    if (data.height) {
      relatedUpdates.height = {
        upsert: {
          create: {
            value: data.height.value,
            unit: data.height.unit,
          },
          update: { value: data.height.value, unit: data.height.unit },
        },
      };
    }

    if (data.performance) {
      if (
        !data.performance.max_pull_ups ||
        !data.performance.max_push_ups ||
        !data.performance.max_squats ||
        !data.performance.max_dips
      ) {
        throw new ConflictException('Performance data is incomplete');
      }

      relatedUpdates.performance = {
        upsert: {
          create: {
            max_pull_ups: data.performance.max_pull_ups,
            max_push_ups: data.performance.max_push_ups,
            max_squats: data.performance.max_squats,
            max_dips: data.performance.max_dips,
          },
          update: {
            max_pull_ups: data.performance.max_pull_ups,
            max_push_ups: data.performance.max_push_ups,
            max_squats: data.performance.max_squats,
            max_dips: data.performance.max_dips,
          },
        },
      };
    }

    if (data.weight) {
      relatedUpdates.weight = {
        upsert: {
          create: {
            value: data.weight.value,
            unit: data.weight.unit,
          },
          update: { value: data.weight.value, unit: data.weight.unit },
        },
      };
    }

    if (data.goal_weight) {
      relatedUpdates.goal_weight = {
        upsert: {
          create: {
            value: data.goal_weight.value,
            unit: data.goal_weight.unit,
          },
          update: {
            value: data.goal_weight.value,
            unit: data.goal_weight.unit,
          },
        },
      };
    }

    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: {
        ...data,
        ...relatedUpdates,
      },
    });

    return {
      message: 'User profile updated successfully',
      statusCode: HttpStatus.OK,
      user: updatedUser,
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
