import { Test, TestingModule } from '@nestjs/testing';
import { ProductDimensionDetailsService } from './product_dimension_details.service';

describe('ProductDimensionDetailsService', () => {
  let service: ProductDimensionDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductDimensionDetailsService],
    }).compile();

    service = module.get<ProductDimensionDetailsService>(ProductDimensionDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
