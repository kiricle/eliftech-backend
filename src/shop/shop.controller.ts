import { Controller, Get, Param } from '@nestjs/common';
import { ShopService } from './shop.service';

@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Get()
  async getShops() {
    return await this.shopService.getShops();
  }

  @Get('/:shop')
  async getShopProducts(@Param('shop') shop: string) {
    return await this.shopService.getShopProducts(shop);
  }
}
