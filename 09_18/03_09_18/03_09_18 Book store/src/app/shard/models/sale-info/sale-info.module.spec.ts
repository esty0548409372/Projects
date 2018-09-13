import { SaleInfoModule } from './sale-info.module';

describe('SaleInfoModule', () => {
  let saleInfoModule: SaleInfoModule;

  beforeEach(() => {
    saleInfoModule = new SaleInfoModule();
  });

  it('should create an instance', () => {
    expect(saleInfoModule).toBeTruthy();
  });
});
