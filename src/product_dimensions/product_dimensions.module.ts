import { Module } from '@nestjs/common';
import { ProductDimensionsService } from './product_dimensions.service';
import { ProductDimensionsController } from './product_dimensions.controller';

@Module({
  controllers: [ProductDimensionsController],
  providers: [ProductDimensionsService],
})
export class ProductDimensionsModule {}
