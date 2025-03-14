import { Test, TestingModule } from '@nestjs/testing';
import { PharmacyController } from './pharmacy.controller';
import { PharmacyService } from './pharmacy.service';

describe('PharmacyController', () => {
  let pharmacyController: PharmacyController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PharmacyController],
      providers: [PharmacyService],
    }).compile();

    pharmacyController = app.get<PharmacyController>(PharmacyController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(pharmacyController.getHello()).toBe('Hello World!');
    });
  });
});
