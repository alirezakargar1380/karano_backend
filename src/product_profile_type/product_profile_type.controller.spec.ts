import { Test, TestingModule } from '@nestjs/testing';
import { ProductProfileTypeController } from './product_profile_type.controller';
import { ProductProfileTypeService } from './product_profile_type.service';

describe('ProductProfileTypeController', () => {
  let controller: ProductProfileTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductProfileTypeController],
      providers: [ProductProfileTypeService],
    }).compile();

    controller = module.get<ProductProfileTypeController>(ProductProfileTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
