import { Test, TestingModule } from '@nestjs/testing';
import { ProductFrameTypeController } from './product_frame_type.controller';
import { ProductFrameTypeService } from './product_frame_type.service';

describe('ProductFrameTypeController', () => {
  let controller: ProductFrameTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductFrameTypeController],
      providers: [ProductFrameTypeService],
    }).compile();

    controller = module.get<ProductFrameTypeController>(ProductFrameTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
