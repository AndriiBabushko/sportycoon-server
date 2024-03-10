export interface User {
  id: number;
  username: string;
  fullName: string;
  password?: string;
  email: string;
  avatar?: string | null;
  city?: string | null;
  country?: string | null;
  bio?: string | null;
  createdAt: string;
  updatedAt: string;
}

export {
  FitnessLevelType,
  GenderType,
  GoalNameType,
  GoalWeightType,
  HeightType,
  PerformanceType,
  WeightType,
  RoleType,
} from './other';
