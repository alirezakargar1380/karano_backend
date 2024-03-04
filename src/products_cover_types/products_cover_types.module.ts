import { Module } from '@nestjs/common';
import { ProductsCoverTypesService } from './products_cover_types.service';
import { ProductsCoverTypesController } from './products_cover_types.controller';

@Module({
  controllers: [ProductsCoverTypesController],
  providers: [ProductsCoverTypesService],
})
export class ProductsCoverTypesModule {}
