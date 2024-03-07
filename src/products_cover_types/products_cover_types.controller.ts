import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsCoverTypesService } from './products_cover_types.service';
import { CreateProductsCoverTypeDto } from './dto/create-products_cover_type.dto';
import { UpdateProductsCoverTypeDto } from './dto/update-products_cover_type.dto';

@Controller('products-cover-types')
export class ProductsCoverTypesController {
  constructor(private readonly productsCoverTypesService: ProductsCoverTypesService) {}

  @Post()
  async create(@Body() createProductsCoverTypeDto: CreateProductsCoverTypeDto) {
    return await this.productsCoverTypesService.create(createProductsCoverTypeDto);
  }

  @Get()
  findAll() {
    return this.productsCoverTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsCoverTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductsCoverTypeDto: UpdateProductsCoverTypeDto) {
    return this.productsCoverTypesService.update(+id, updateProductsCoverTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsCoverTypesService.remove(+id);
  }
}
