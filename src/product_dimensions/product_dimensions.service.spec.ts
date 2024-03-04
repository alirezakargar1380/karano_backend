import { Test, TestingModule } from '@nestjs/testing';
import { ProductDimensionsService } from './product_dimensions.service';

describe('ProductDimensionsService', () => {
  let service: ProductDimensionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductDimensionsService],
    }).compile();

    service = module.get<ProductDimensionsService>(ProductDimensionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
