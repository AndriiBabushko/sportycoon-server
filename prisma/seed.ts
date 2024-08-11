import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  // Create Categories
  const categories = ['T-Shirts', 'Hoodies'];
  const createdCategories = await Promise.all(
    categories.map((name) =>
      prisma.shopCategory.create({
        data: {
          name,
          description: faker.lorem.sentences(3),
        },
      }),
    ),
  );

  const colorModifier = await prisma.modifier.create({
    data: {
      name: 'Color',
    },
  });

  const sizeModifier = await prisma.modifier.create({
    data: {
      name: 'Size',
    },
  });

  const colors = ['Red', 'Blue', 'Black'];
  const sizes = ['S', 'M', 'L'];
  const colorOptions = await Promise.all(
    colors.map((value) =>
      prisma.modifierOption.create({
        data: { value, modifier: { connect: { id: colorModifier.id } } },
      }),
    ),
  );
  const sizeOptions = await Promise.all(
    sizes.map((value) =>
      prisma.modifierOption.create({
        data: { value, modifier: { connect: { id: sizeModifier.id } } },
      }),
    ),
  );
  await prisma.modifier.create({
    data: {
      name: 'Color',
      options: { connect: colorOptions.map((option) => ({ id: option.id })) },
    },
  });
  await prisma.modifier.create({
    data: {
      name: 'Size',
      options: { connect: sizeOptions.map((option) => ({ id: option.id })) },
    },
  });
  // Create Items
  const items = [];
  for (let i = 0; i < 10; i++) {
    const category = faker.helpers.arrayElement(createdCategories);
    const name = faker.commerce.productName();
    const description = faker.lorem.paragraph();
    const price = faker.number.float({ min: 10, max: 100, multipleOf: 0.01 });
    const preview = faker.image.url();
    const images = [faker.image.url(), faker.image.url()];
    const item = await prisma.shopItem.create({
      data: {
        name,
        description,
        price,
        preview,
        images,
        category: { connect: { id: category.id } },
        modifiers: {
          create: [
            {
              modifier_option: {
                connect: { id: faker.helpers.arrayElement(colorOptions).id },
              },
            },
            {
              modifier_option: {
                connect: { id: faker.helpers.arrayElement(sizeOptions).id },
              },
            },
          ],
        },
      },
      include: { modifiers: true },
    });
    items.push(item);
  }

  // Create Users and Shop Carts
  await prisma.user.create({
    data: {
      email: 'user@example.com',
      username: 'user1',
      password: 'password123',
      role: 'user',
      shop_cart: {
        create: {
          items: {
            create: items.map((item) => ({
              quantity: faker.number.int({ min: 1, max: 5 }),
              shop_item: { connect: { id: item.id } },
            })),
          },
        },
      },
    },
    include: { shop_cart: { include: { items: true } } },
  });

  console.log('Seed data created successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
