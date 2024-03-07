import { PartialType } from '@nestjs/mapped-types';
import { CreateProductFrameTypeDto } from './create-product_frame_type.dto';

export class UpdateProductFrameTypeDto extends PartialType(CreateProductFrameTypeDto) {}
