import { Directive, Field, ObjectType } from '@nestjs/graphql';
import { ShopItemModifier } from './shop-item-modifier.entity';
import { Modifier } from './modifier.entity';

@ObjectType()
@Directive('@key(fields: "id")')
export class ModifierOption {
  @Field()
  id: string;

  @Field()
  value: string;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;

  @Field(() => [ShopItemModifier])
  shop_item_modifiers: ShopItemModifier[];

  @Field(() => Modifier)
  modifier: Modifier;

  @Field()
  modifier_id: string;
}
