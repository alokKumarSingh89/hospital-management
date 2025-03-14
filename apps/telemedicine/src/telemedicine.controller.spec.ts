import { Test, TestingModule } from '@nestjs/testing';
import { TelemedicineController } from './telemedicine.controller';
import { TelemedicineService } from './telemedicine.service';

describe('TelemedicineController', () => {
  let telemedicineController: TelemedicineController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TelemedicineController],
      providers: [TelemedicineService],
    }).compile();

    telemedicineController = app.get<TelemedicineController>(TelemedicineController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(telemedicineController.getHello()).toBe('Hello World!');
    });
  });
});
