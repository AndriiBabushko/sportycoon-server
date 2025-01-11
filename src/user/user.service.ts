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

    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new ConflictException('User not found');
    }

    if (data.password) {
      data.password = await this.hashPassword(data.password);
    }

    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: {
        ...data,
        height: data.height
          ? { update: { value: data.height.value, unit: data.height.unit } }
          : undefined,
        performance: data.performance
          ? {
              update: {
                max_pull_ups: data.performance.max_pull_ups,
                max_push_ups: data.performance.max_push_ups,
                max_squats: data.performance.max_squats,
                max_dips: data.performance.max_dips,
              },
            }
          : undefined,
        weight: data.weight
          ? { update: { value: data.weight.value, unit: data.weight.unit } }
          : undefined,
        goal_weight: data.goal_weight
          ? {
              update: {
                value: data.goal_weight.value,
                unit: data.goal_weight.unit,
              },
            }
          : undefined,
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
