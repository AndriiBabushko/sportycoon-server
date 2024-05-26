import { Directive, Field, ObjectType } from '@nestjs/graphql';
import { ModifierOption } from './modifier-option.entity';

@ObjectType()
@Directive('@key(fields: "id")')
export class Modifier {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;

  @Field(() => [ModifierOption])
  options: ModifierOption[];
}
