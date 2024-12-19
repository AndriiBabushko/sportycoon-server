-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'MANAGER', 'COACH', 'USER');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- CreateEnum
CREATE TYPE "FitnessLevel" AS ENUM ('NEWBIE', 'BEGINNER', 'INTERMEDIATE', 'ADVANCED');

-- CreateEnum
CREATE TYPE "Goal" AS ENUM ('BUILD_STRENGTH', 'LOSE_WEIGHT', 'BUILD_MUSCLE', 'IMPROVE_HEALTH', 'LEARN_TECHNIQUES');

-- CreateEnum
CREATE TYPE "HeightUnit" AS ENUM ('CM', 'IN');

-- CreateEnum
CREATE TYPE "WeightUnit" AS ENUM ('KG', 'LBS');

-- CreateTable
CREATE TABLE "Avatar" (
    "id" UUID NOT NULL,
    "public_id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Avatar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Performance" (
    "id" UUID NOT NULL,
    "max_pull_ups" INTEGER NOT NULL,
    "max_push_ups" INTEGER NOT NULL,
    "max_squats" INTEGER NOT NULL,
    "max_dips" INTEGER NOT NULL,
    "user_id" UUID NOT NULL,

    CONSTRAINT "Performance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Height" (
    "id" UUID NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "unit" "HeightUnit" NOT NULL,
    "user_id" UUID NOT NULL,

    CONSTRAINT "Height_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Weight" (
    "id" UUID NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "unit" "WeightUnit" NOT NULL,
    "user_id" UUID NOT NULL,

    CONSTRAINT "Weight_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GoalWeight" (
    "id" UUID NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "unit" "WeightUnit" NOT NULL,
    "user_id" UUID NOT NULL,

    CONSTRAINT "GoalWeight_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "email" TEXT,
    "username" TEXT,
    "full_name" TEXT,
    "gender" "Gender",
    "fitness_level" "FitnessLevel",
    "goals" "Goal"[],
    "password" TEXT,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "google_id" TEXT,
    "spotify_id" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShopCart" (
    "id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" UUID NOT NULL,

    CONSTRAINT "ShopCart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShopCategory" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "parent_id" UUID,

    CONSTRAINT "ShopCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShopItem" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "preview" TEXT NOT NULL,
    "images" TEXT[],
    "bundle_discount" DOUBLE PRECISION,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" UUID,
    "category_id" UUID NOT NULL,

    CONSTRAINT "ShopItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShopCartItem" (
    "id" UUID NOT NULL,
    "quantity" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "shop_cart_id" UUID NOT NULL,
    "shop_item_id" UUID NOT NULL,

    CONSTRAINT "ShopCartItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Modifier" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Modifier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModifierOption" (
    "id" UUID NOT NULL,
    "value" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "modifier_id" UUID NOT NULL,

    CONSTRAINT "ModifierOption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShopItemModifier" (
    "id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "shop_item_id" UUID NOT NULL,
    "modifier_option_id" UUID NOT NULL,

    CONSTRAINT "ShopItemModifier_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Avatar_user_id_key" ON "Avatar"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Performance_user_id_key" ON "Performance"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Height_user_id_key" ON "Height"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Weight_user_id_key" ON "Weight"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "GoalWeight_user_id_key" ON "GoalWeight"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_google_id_key" ON "User"("google_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_spotify_id_key" ON "User"("spotify_id");

-- CreateIndex
CREATE UNIQUE INDEX "ShopCart_user_id_key" ON "ShopCart"("user_id");

-- AddForeignKey
ALTER TABLE "Avatar" ADD CONSTRAINT "Avatar_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Performance" ADD CONSTRAINT "Performance_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Height" ADD CONSTRAINT "Height_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Weight" ADD CONSTRAINT "Weight_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GoalWeight" ADD CONSTRAINT "GoalWeight_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopCart" ADD CONSTRAINT "ShopCart_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopCategory" ADD CONSTRAINT "ShopCategory_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "ShopCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopItem" ADD CONSTRAINT "ShopItem_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopItem" ADD CONSTRAINT "ShopItem_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "ShopCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopCartItem" ADD CONSTRAINT "ShopCartItem_shop_cart_id_fkey" FOREIGN KEY ("shop_cart_id") REFERENCES "ShopCart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopCartItem" ADD CONSTRAINT "ShopCartItem_shop_item_id_fkey" FOREIGN KEY ("shop_item_id") REFERENCES "ShopItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModifierOption" ADD CONSTRAINT "ModifierOption_modifier_id_fkey" FOREIGN KEY ("modifier_id") REFERENCES "Modifier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopItemModifier" ADD CONSTRAINT "ShopItemModifier_shop_item_id_fkey" FOREIGN KEY ("shop_item_id") REFERENCES "ShopItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopItemModifier" ADD CONSTRAINT "ShopItemModifier_modifier_option_id_fkey" FOREIGN KEY ("modifier_option_id") REFERENCES "ModifierOption"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
