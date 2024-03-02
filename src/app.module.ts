import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShopModule } from './shop/shop.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ShopModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
