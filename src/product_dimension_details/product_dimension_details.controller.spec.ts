import { Test, TestingModule } from '@nestjs/testing';
import { ProductDimensionDetailsController } from './product_dimension_details.controller';
import { ProductDimensionDetailsService } from './product_dimension_details.service';

describe('ProductDimensionDetailsController', () => {
  let controller: ProductDimensionDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductDimensionDetailsController],
      providers: [ProductDimensionDetailsService],
    }).compile();

    controller = module.get<ProductDimensionDetailsController>(ProductDimensionDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
