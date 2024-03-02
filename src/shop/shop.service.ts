import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ShopService {
    constructor (private prisma: PrismaService) {}

    async getShops() {
        const shops = await this.prisma.shop.findMany({});


        return shops;
    }
}
