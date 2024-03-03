import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';

@Injectable()
export class ShopService {
  constructor(private prisma: PrismaService) {}

  async getShops() {
    const shops = await this.prisma.shop.findMany({});

    return shops;
  }

  async getShopProducts(shop: string) {
    const shopFound = await this.prisma.shop.findFirst({
      where: {
        href: shop,
      },
    });

    if (!shopFound) {
      throw new HttpException('Shop not found', HttpStatus.NOT_FOUND);
    }

    const products = await this.prisma.product.findMany({
      where: {
        shop: {
          id: shopFound.id,
        },
      },
    });

    return products;
  }
}
