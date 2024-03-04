import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductDimensionDetailsService } from './product_dimension_details.service';
import { CreateProductDimensionDetailDto } from './dto/create-product_dimension_detail.dto';
import { UpdateProductDimensionDetailDto } from './dto/update-product_dimension_detail.dto';

@Controller('product-dimension-details')
export class ProductDimensionDetailsController {
  constructor(private readonly productDimensionDetailsService: ProductDimensionDetailsService) {}

  @Post()
  create(@Body() createProductDimensionDetailDto: CreateProductDimensionDetailDto) {
    return this.productDimensionDetailsService.create(createProductDimensionDetailDto);
  }

  @Get()
  findAll() {
    return this.productDimensionDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productDimensionDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDimensionDetailDto: UpdateProductDimensionDetailDto) {
    return this.productDimensionDetailsService.update(+id, updateProductDimensionDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productDimensionDetailsService.remove(+id);
  }
}
