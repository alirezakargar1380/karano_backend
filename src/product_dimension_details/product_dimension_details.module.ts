import { Module } from '@nestjs/common';
import { ProductDimensionDetailsService } from './product_dimension_details.service';
import { ProductDimensionDetailsController } from './product_dimension_details.controller';

@Module({
  controllers: [ProductDimensionDetailsController],
  providers: [ProductDimensionDetailsService],
})
export class ProductDimensionDetailsModule {}
