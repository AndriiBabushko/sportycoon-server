import { Directive, Field, ObjectType } from '@nestjs/graphql';
import { ShopItem } from './shop-item.entity';

@ObjectType()
@Directive('@key(fields: "id")')
export class ShopCategory {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;

  @Field(() => [ShopItem])
  items: ShopItem[];

  @Field(() => [ShopCategory], { nullable: true })
  subcategories?: ShopCategory[];

  @Field(() => ShopCategory, { nullable: true })
  parent?: ShopCategory;

  @Field({ nullable: true })
  parent_id?: string;
}
