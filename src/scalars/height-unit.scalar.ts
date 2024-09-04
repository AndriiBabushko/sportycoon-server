import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';
import { HeightUnitType } from '@auth/auth.types';

@Scalar('HeightUnitScalar')
export class HeightUnitScalar implements CustomScalar<string, HeightUnitType> {
  description = 'Height unit custom scalar type, allowed values are CM and IN';

  parseValue(value: string): HeightUnitType {
    if (this.isValidHeightUnit(value)) {
      return value as HeightUnitType;
    }
    throw new Error(
      `Invalid height unit value: ${value}. Allowed values are 'CM' or 'IN'.`,
    );
  }

  serialize(value: HeightUnitType): string {
    return value;
  }

  parseLiteral(ast: ValueNode): HeightUnitType {
    if (
      (ast.kind === Kind.STRING || ast.kind === Kind.ENUM) &&
      this.isValidHeightUnit(ast.value)
    ) {
      return ast.value as HeightUnitType;
    }
    throw new Error(
      `${
        ast.kind === Kind.STRING || ast.kind === Kind.ENUM
          ? 'Invalid height unit value: ' + ast.value
          : 'Invalid height unit type: ' + ast.kind
      }. Allowed values are 'CM' or 'IN'.`,
    );
  }

  private isValidHeightUnit(value: string): boolean {
    return ['CM', 'IN'].includes(value);
  }
}
