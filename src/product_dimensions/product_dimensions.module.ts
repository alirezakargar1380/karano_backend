import { Module } from '@nestjs/common';
import { ProductDimensionsService } from './product_dimensions.service';
import { ProductDimensionsController } from './product_dimensions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductDimension } from './entities/product_dimension.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductDimension
    ])
  ],
  controllers: [ProductDimensionsController],
  providers: [ProductDimensionsService],
})
export class ProductDimensionsModule {}
