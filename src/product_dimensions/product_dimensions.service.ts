import { Injectable } from '@nestjs/common';
import { CreateProductDimensionDto } from './dto/create-product_dimension.dto';
import { UpdateProductDimensionDto } from './dto/update-product_dimension.dto';

@Injectable()
export class ProductDimensionsService {
  create(createProductDimensionDto: CreateProductDimensionDto) {
    return 'This action adds a new productDimension';
  }

  findAll() {
    return `This action returns all productDimensions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productDimension`;
  }

  update(id: number, updateProductDimensionDto: UpdateProductDimensionDto) {
    return `This action updates a #${id} productDimension`;
  }

  remove(id: number) {
    return `This action removes a #${id} productDimension`;
  }
}
