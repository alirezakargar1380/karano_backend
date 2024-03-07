import { Module } from '@nestjs/common';
import { ProductsCoverTypesService } from './products_cover_types.service';
import { ProductsCoverTypesController } from './products_cover_types.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsCoverTypes } from './entities/products_cover_type.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductsCoverTypes
    ])
  ],
  controllers: [ProductsCoverTypesController],
  providers: [ProductsCoverTypesService],
})
export class ProductsCoverTypesModule {}
