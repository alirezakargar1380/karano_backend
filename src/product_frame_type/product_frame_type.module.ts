import { Module } from '@nestjs/common';
import { ProductFrameTypeService } from './product_frame_type.service';
import { ProductFrameTypeController } from './product_frame_type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductProfileType } from 'src/product_profile_type/entities/product_profile_type.entity';
import { ProductFrameType } from './entities/product_frame_type.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductFrameType
    ])
  ],
  controllers: [ProductFrameTypeController],
  providers: [ProductFrameTypeService],
})
export class ProductFrameTypeModule {}
