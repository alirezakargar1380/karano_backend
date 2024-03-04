import { Injectable } from '@nestjs/common';
import { CreateProductsCoverTypeDto } from './dto/create-products_cover_type.dto';
import { UpdateProductsCoverTypeDto } from './dto/update-products_cover_type.dto';

@Injectable()
export class ProductsCoverTypesService {
  create(createProductsCoverTypeDto: CreateProductsCoverTypeDto) {
    return 'This action adds a new productsCoverType';
  }

  findAll() {
    return `This action returns all productsCoverTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productsCoverType`;
  }

  update(id: number, updateProductsCoverTypeDto: UpdateProductsCoverTypeDto) {
    return `This action updates a #${id} productsCoverType`;
  }

  remove(id: number) {
    return `This action removes a #${id} productsCoverType`;
  }
}
