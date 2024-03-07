import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products) private repository: Repository<Products>
  ) { }

  async create(createProductDto: CreateProductDto) {
    const result = await this.repository.save(createProductDto);

    // const result = await this.repository.createQueryBuilder()
    //   .insert()
    //   .values(createProductDto)
    //   .execute();

    // return this.findOne(result.raw.insertId)
    return this.findOne(result.id)
  }

  findAll() {
    return this.repository.find({
      relations: {}
    });
  }

  findOne(id: number) {
    return this.repository.findOne({
      where: { id },
      relations: {
        default_product_detail: {
          profile_type: true,
          cover_type: true
        },
        product_dimension: true
      }
    })
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
