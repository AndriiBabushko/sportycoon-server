import { Directive, Field, ObjectType } from '@nestjs/graphql';
import { ShopItem } from './shop-item.entity';
import { ModifierOption } from './modifier-option.entity';

@ObjectType()
@Directive('@key(fields: "id")')
export class ShopItemModifier {
  @Field()
  id: string;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;

  @Field(() => ShopItem)
  shop_item: ShopItem;

  @Field()
  shop_item_id: string;

  @Field(() => ModifierOption)
  modifier_option: ModifierOption;

  @Field()
  modifier_option_id: string;
}
