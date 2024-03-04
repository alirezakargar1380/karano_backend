import { Injectable } from '@nestjs/common';
import { CreateProductDimensionDetailDto } from './dto/create-product_dimension_detail.dto';
import { UpdateProductDimensionDetailDto } from './dto/update-product_dimension_detail.dto';

@Injectable()
export class ProductDimensionDetailsService {
  create(createProductDimensionDetailDto: CreateProductDimensionDetailDto) {
    return 'This action adds a new productDimensionDetail';
  }

  findAll() {
    return `This action returns all productDimensionDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productDimensionDetail`;
  }

  update(id: number, updateProductDimensionDetailDto: UpdateProductDimensionDetailDto) {
    return `This action updates a #${id} productDimensionDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} productDimensionDetail`;
  }
}
