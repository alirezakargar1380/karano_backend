import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductProfileTypeService } from './product_profile_type.service';
import { CreateProductProfileTypeDto } from './dto/create-product_profile_type.dto';
import { UpdateProductProfileTypeDto } from './dto/update-product_profile_type.dto';

@Controller('product-profile-type')
export class ProductProfileTypeController {
  constructor(private readonly productProfileTypeService: ProductProfileTypeService) {}

  @Post()
  async create(@Body() createProductProfileTypeDto: CreateProductProfileTypeDto) {
    return await this.productProfileTypeService.create(createProductProfileTypeDto);
  }

  @Get()
  findAll() {
    return this.productProfileTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productProfileTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductProfileTypeDto: UpdateProductProfileTypeDto) {
    return this.productProfileTypeService.update(+id, updateProductProfileTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productProfileTypeService.remove(+id);
  }
}
