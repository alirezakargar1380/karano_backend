import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductFrameTypeService } from './product_frame_type.service';
import { CreateProductFrameTypeDto } from './dto/create-product_frame_type.dto';
import { UpdateProductFrameTypeDto } from './dto/update-product_frame_type.dto';

@Controller('product-frame-type')
export class ProductFrameTypeController {
  constructor(private readonly productFrameTypeService: ProductFrameTypeService) {}

  @Post()
  create(@Body() createProductFrameTypeDto: CreateProductFrameTypeDto) {
    return this.productFrameTypeService.create(createProductFrameTypeDto);
  }

  @Get()
  findAll() {
    return this.productFrameTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productFrameTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductFrameTypeDto: UpdateProductFrameTypeDto) {
    return this.productFrameTypeService.update(+id, updateProductFrameTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productFrameTypeService.remove(+id);
  }
}
