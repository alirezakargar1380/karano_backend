import { Test, TestingModule } from '@nestjs/testing';
import { ProductsCoverTypesService } from './products_cover_types.service';

describe('ProductsCoverTypesService', () => {
  let service: ProductsCoverTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsCoverTypesService],
    }).compile();

    service = module.get<ProductsCoverTypesService>(ProductsCoverTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
