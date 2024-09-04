import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';
import { FitnessLevelType } from '@auth/auth.types';

@Scalar('FitnessLevelScalar')
export class FitnessLevelScalar
  implements CustomScalar<string, FitnessLevelType>
{
  description =
    'FitnessLevel custom scalar type, allowed values are NEWBIE, BEGINNER, INTERMEDIATE, ADVANCED';

  parseValue(value: string): FitnessLevelType {
    if (this.isValidFitnessLevel(value)) {
      return value as FitnessLevelType;
    }
    throw new Error(
      `Invalid fitness level value: ${value}. Allowed values are NEWBIE, BEGINNER, INTERMEDIATE, ADVANCED.`,
    );
  }

  serialize(value: FitnessLevelType): string {
    return value;
  }

  parseLiteral(ast: ValueNode): FitnessLevelType {
    if (
      (ast.kind === Kind.STRING || ast.kind === Kind.ENUM) &&
      this.isValidFitnessLevel(ast.value)
    ) {
      return ast.value as FitnessLevelType;
    }
    throw new Error(
      `${
        ast.kind === Kind.STRING || ast.kind === Kind.ENUM
          ? 'Invalid fitness level unit value: ' + ast.value
          : 'Invalid fitness level unit type: ' + ast.kind
      }. Allowed values are NEWBIE, BEGINNER, INTERMEDIATE, ADVANCED.`,
    );
  }

  private isValidFitnessLevel(value: string): boolean {
    return ['NEWBIE', 'BEGINNER', 'INTERMEDIATE', 'ADVANCED'].includes(value);
  }
}
