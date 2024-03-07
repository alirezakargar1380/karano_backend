import { Module } from '@nestjs/common';
import { ProductDetailsService } from './product_details.service';
import { ProductDetailsController } from './product_details.controller';
import { ProductDetails } from './entities/product_detail.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductDetails
    ])
  ],
  controllers: [ProductDetailsController],
  providers: [ProductDetailsService],
})
export class ProductDetailsModule {}
