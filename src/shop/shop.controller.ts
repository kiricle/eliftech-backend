import { Controller, Get } from '@nestjs/common';
import { ShopService } from './shop.service';

@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Get()
  async getShops() {
    return [
      {
        name: 'Drug 24',
        url: 'drug-24',
      },
    ];
  }
}
