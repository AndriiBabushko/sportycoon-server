import { registerEnumType } from '@nestjs/graphql';

export type RoleType = 'ADMIN' | 'MANAGER' | 'COACH' | 'USER';

export type GenderType = 'MALE' | 'FEMALE' | 'OTHER';

export type HeightUnitType = 'CM' | 'IN';

export type WeightUnitType = 'KG' | 'LBS';

export type FitnessLevelType =
  | 'NEWBIE'
  | 'BEGINNER'
  | 'INTERMEDIATE'
  | 'ADVANCED';

export type GoalType =
  | 'BUILD_STRENGTH'
  | 'LOSE_WEIGHT'
  | 'BUILD_MUSCLE'
  | 'IMPROVE_HEALTH'
  | 'LEARN_TECHNIQUES';

export enum ROLE {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  COACH = 'COACH',
  USER = 'USER',
}

export enum GENDER {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
}

export enum HEIGHT_UNIT {
  CM = 'CM',
  IN = 'IN',
}

export enum WEIGHT_UNIT {
  KG = 'KG',
  LBS = 'LBS',
}

export enum FITNESS_LEVEL {
  NEWBIE = 'NEWBIE',
  BEGINNER = 'BEGINNER',
  INTERMEDIATE = 'INTERMEDIATE',
  ADVANCED = 'ADVANCED',
}

export enum GOAL {
  BUILD_STRENGTH = 'BUILD_STRENGTH',
  LOSE_WEIGHT = 'LOSE_WEIGHT',
  BUILD_MUSCLE = 'BUILD_MUSCLE',
  IMPROVE_HEALTH = 'IMPROVE_HEALTH',
  LEARN_TECHNIQUES = 'LEARN_TECHNIQUES',
}

registerEnumType(ROLE, {
  name: 'ROLE',
  description: 'Possible roles for users',
});

registerEnumType(GENDER, {
  name: 'GENDER',
  description: 'User gender',
});

registerEnumType(HEIGHT_UNIT, {
  name: 'HEIGHT_UNIT',
  description: 'Height unit custom scalar type, allowed values are CM and IN',
});

registerEnumType(WEIGHT_UNIT, {
  name: 'WEIGHT_UNIT',
  description: 'Weight unit custom scalar type, allowed values are KG and LBS',
});

registerEnumType(FITNESS_LEVEL, {
  name: 'FITNESS_LEVEL',
  description: 'User fitness level',
});

registerEnumType(GOAL, {
  name: 'GOAL',
  description: 'Possible goals for training',
});

export interface JwtPayload {
  email: string | null;
  username: string | null;
  google_id?: string | null;
  spotify_id?: string | null;
}
