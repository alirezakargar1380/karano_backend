import { Module } from '@nestjs/common';
import { ProductProfileTypeService } from './product_profile_type.service';
import { ProductProfileTypeController } from './product_profile_type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductProfileType } from './entities/product_profile_type.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductProfileType
    ])
  ],
  controllers: [ProductProfileTypeController],
  providers: [ProductProfileTypeService],
})
export class ProductProfileTypeModule {}
