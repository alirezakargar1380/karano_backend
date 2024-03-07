import { PartialType } from '@nestjs/mapped-types';
import { CreateProductProfileTypeDto } from './create-product_profile_type.dto';

export class UpdateProductProfileTypeDto extends PartialType(CreateProductProfileTypeDto) {}
