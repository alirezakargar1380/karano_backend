import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductDimensionsService } from './product_dimensions.service';
import { CreateProductDimensionDto } from './dto/create-product_dimension.dto';
import { UpdateProductDimensionDto } from './dto/update-product_dimension.dto';

@Controller('product-dimensions')
export class ProductDimensionsController {
  constructor(private readonly productDimensionsService: ProductDimensionsService) {}

  @Post()
  create(@Body() createProductDimensionDto: CreateProductDimensionDto) {
    return this.productDimensionsService.create(createProductDimensionDto);
  }

  @Get()
  findAll() {
    return this.productDimensionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productDimensionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDimensionDto: UpdateProductDimensionDto) {
    return this.productDimensionsService.update(+id, updateProductDimensionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productDimensionsService.remove(+id);
  }
}
