import { Test, TestingModule } from '@nestjs/testing';
import { ProductDimensionsController } from './product_dimensions.controller';
import { ProductDimensionsService } from './product_dimensions.service';

describe('ProductDimensionsController', () => {
  let controller: ProductDimensionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductDimensionsController],
      providers: [ProductDimensionsService],
    }).compile();

    controller = module.get<ProductDimensionsController>(ProductDimensionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
