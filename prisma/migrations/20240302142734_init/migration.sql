-- AlterTable
CREATE SEQUENCE customer_id_seq;
ALTER TABLE "customer" ALTER COLUMN "id" SET DEFAULT nextval('customer_id_seq');
ALTER SEQUENCE customer_id_seq OWNED BY "customer"."id";

-- AlterTable
CREATE SEQUENCE order_id_seq;
ALTER TABLE "order" ALTER COLUMN "id" SET DEFAULT nextval('order_id_seq');
ALTER SEQUENCE order_id_seq OWNED BY "order"."id";

-- AlterTable
CREATE SEQUENCE product_id_seq;
ALTER TABLE "product" ALTER COLUMN "id" SET DEFAULT nextval('product_id_seq');
ALTER SEQUENCE product_id_seq OWNED BY "product"."id";

-- AlterTable
CREATE SEQUENCE shop_id_seq;
ALTER TABLE "shop" ALTER COLUMN "id" SET DEFAULT nextval('shop_id_seq');
ALTER SEQUENCE shop_id_seq OWNED BY "shop"."id";
