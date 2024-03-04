import { Test, TestingModule } from '@nestjs/testing';
import { ProductsCoverTypesController } from './products_cover_types.controller';
import { ProductsCoverTypesService } from './products_cover_types.service';

describe('ProductsCoverTypesController', () => {
  let controller: ProductsCoverTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsCoverTypesController],
      providers: [ProductsCoverTypesService],
    }).compile();

    controller = module.get<ProductsCoverTypesController>(ProductsCoverTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
