import { Test, TestingModule } from '@nestjs/testing';
import { ProductProfileTypeService } from './product_profile_type.service';

describe('ProductProfileTypeService', () => {
  let service: ProductProfileTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductProfileTypeService],
    }).compile();

    service = module.get<ProductProfileTypeService>(ProductProfileTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
