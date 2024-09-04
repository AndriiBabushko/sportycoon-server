import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';
import { GenderType } from '@auth/auth.types';

@Scalar('GenderScalar')
export class GenderScalar implements CustomScalar<string, GenderType> {
  description =
    'Gender custom scalar type, allowed values are MALE, FEMALE, OTHER';

  parseValue(value: string): GenderType {
    if (this.isValidGender(value)) {
      return value as GenderType;
    }
    throw new Error(
      `Invalid gender value: ${value}. Allowed values are MALE, FEMALE, OTHER.`,
    );
  }

  serialize(value: GenderType): string {
    return value;
  }

  parseLiteral(ast: ValueNode): GenderType {
    if (
      (ast.kind === Kind.STRING || ast.kind === Kind.ENUM) &&
      this.isValidGender(ast.value)
    ) {
      return ast.value as GenderType;
    }
    throw new Error(
      `${
        ast.kind === Kind.STRING || ast.kind === Kind.ENUM
          ? 'Invalid gender unit value: ' + ast.value
          : 'Invalid gender unit type: ' + ast.kind
      }. Allowed values are MALE, FEMALE, or OTHER.`,
    );
  }

  private isValidGender(value: string): boolean {
    return ['MALE', 'FEMALE', 'OTHER'].includes(value);
  }
}
