export type GenderType = 'Male' | 'Female';

export type HeightType = {
  value: number;
  unit: 'cm' | 'in';
};

export type WeightType = {
  value: number;
  unit: 'kg' | 'lbs';
};

export type GoalWeightType = {
  value: number;
  unit: 'kg' | 'lbs';
};

export type FitnessLevelType =
  | 'Newbie'
  | 'Beginner'
  | 'Intermediate'
  | 'Advanced';

export type GoalType =
  | 'Build strength'
  | 'Lose weight'
  | 'Build muscle'
  | 'Improve health'
  | 'Learn techniques';

export type PerformanceType = {
  maxPullUps: number;
  maxPushUps: number;
  maxSquats: number;
  maxDips: number;
};
