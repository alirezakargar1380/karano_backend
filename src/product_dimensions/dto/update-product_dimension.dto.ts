import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDimensionDto } from './create-product_dimension.dto';

export class UpdateProductDimensionDto extends PartialType(CreateProductDimensionDto) {}
