import { Injectable } from '@nestjs/common';
import { CreateProductsCoverTypeDto } from './dto/create-products_cover_type.dto';
import { UpdateProductsCoverTypeDto } from './dto/update-products_cover_type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsCoverTypes } from './entities/products_cover_type.entity';

@Injectable()
export class ProductsCoverTypesService {
  constructor(
    @InjectRepository(ProductsCoverTypes) private repository: Repository<ProductsCoverTypes>
  ) { }

  create(createProductsCoverTypeDto: CreateProductsCoverTypeDto) {
    return this.repository.save(createProductsCoverTypeDto);
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
