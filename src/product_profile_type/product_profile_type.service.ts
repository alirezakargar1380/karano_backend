import { Injectable } from '@nestjs/common';
import { CreateProductProfileTypeDto } from './dto/create-product_profile_type.dto';
import { UpdateProductProfileTypeDto } from './dto/update-product_profile_type.dto';
import { ProductProfileType } from './entities/product_profile_type.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductProfileTypeService {
  constructor(
    @InjectRepository(ProductProfileType) private repository: Repository<ProductProfileType>
  ) { }

  create(createProductProfileTypeDto: CreateProductProfileTypeDto) {
    return this.repository.save(createProductProfileTypeDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} productProfileType`;
  }

  update(id: number, updateProductProfileTypeDto: UpdateProductProfileTypeDto) {
    return `This action updates a #${id} productProfileType`;
  }

  remove(id: number) {
    return `This action removes a #${id} productProfileType`;
  }
}
