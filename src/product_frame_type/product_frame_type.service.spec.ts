import { Test, TestingModule } from '@nestjs/testing';
import { ProductFrameTypeService } from './product_frame_type.service';

describe('ProductFrameTypeService', () => {
  let service: ProductFrameTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductFrameTypeService],
    }).compile();

    service = module.get<ProductFrameTypeService>(ProductFrameTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
