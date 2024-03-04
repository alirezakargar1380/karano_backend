import { PartialType } from '@nestjs/mapped-types';
import { CreateProductsCoverTypeDto } from './create-products_cover_type.dto';

export class UpdateProductsCoverTypeDto extends PartialType(CreateProductsCoverTypeDto) {}
