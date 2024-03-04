import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDimensionDetailDto } from './create-product_dimension_detail.dto';

export class UpdateProductDimensionDetailDto extends PartialType(CreateProductDimensionDetailDto) {}
