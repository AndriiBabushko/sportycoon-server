export type GoalNameType =
  | 'Build strength'
  | 'Lose weight'
  | 'Build muscle'
  | 'Improve health'
  | 'Learn techniques';

export interface GoalType {
  name: GoalNameType;
  description: string;
}
