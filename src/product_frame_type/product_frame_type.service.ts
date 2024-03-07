import { Injectable } from '@nestjs/common';
import { CreateProductFrameTypeDto } from './dto/create-product_frame_type.dto';
import { UpdateProductFrameTypeDto } from './dto/update-product_frame_type.dto';

@Injectable()
export class ProductFrameTypeService {
  create(createProductFrameTypeDto: CreateProductFrameTypeDto) {
    return 'This action adds a new productFrameType';
  }

  findAll() {
    return `This action returns all productFrameType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productFrameType`;
  }

  update(id: number, updateProductFrameTypeDto: UpdateProductFrameTypeDto) {
    return `This action updates a #${id} productFrameType`;
  }

  remove(id: number) {
    return `This action removes a #${id} productFrameType`;
  }
}
