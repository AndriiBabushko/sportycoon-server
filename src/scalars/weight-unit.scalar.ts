import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';
import { WeightUnitType } from '@auth/auth.types';

@Scalar('WeightUnitScalar')
export class WeightUnitScalar implements CustomScalar<string, WeightUnitType> {
  description = 'Weight unit custom scalar type, allowed values are KG and LBS';

  parseValue(value: string): WeightUnitType {
    if (this.isValidWeightUnit(value)) {
      return value as WeightUnitType;
    }
    throw new Error(
      `Invalid weight unit value: ${value}. Allowed values are 'KG' or 'LBS'.`,
    );
  }

  serialize(value: WeightUnitType): string {
    return value;
  }

  parseLiteral(ast: ValueNode): WeightUnitType {
    if (
      (ast.kind === Kind.STRING || ast.kind === Kind.ENUM) &&
      this.isValidWeightUnit(ast.value)
    ) {
      return ast.value as WeightUnitType;
    }
    throw new Error(
      `${
        ast.kind === Kind.STRING || ast.kind === Kind.ENUM
          ? 'Invalid weight unit value: ' + ast.value
          : 'Invalid weight unit type: ' + ast.kind
      }. Allowed values are 'KS' or 'LBS'.`,
    );
  }

  private isValidWeightUnit(value: string): boolean {
    return ['KG', 'LBS'].includes(value);
  }
}
