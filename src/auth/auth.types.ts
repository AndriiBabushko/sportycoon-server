export type RoleType = 'admin' | 'manager' | 'coach' | 'user';

export type GenderType = 'male' | 'female' | 'other';

export type HeightUnitType = 'cm' | 'in';

export type WeightUnitType = 'kg' | 'lbs';

export type FitnessLevelType =
  | 'newbie'
  | 'beginner'
  | 'intermediate'
  | 'advanced';

export type GoalType =
  | 'build_strength'
  | 'lose_weight'
  | 'build_muscle'
  | 'improve_health'
  | 'learn_techniques';

export interface JwtPayload {
  email: string | null;
  username: string | null;
  google_id?: string | null;
  spotify_id?: string | null;
}
