import { HistoriaModule } from './historia.module';

describe('HistoriaModule', () => {
  let historiaModule: HistoriaModule;

  beforeEach(() => {
    historiaModule = new HistoriaModule();
  });

  it('should create an instance', () => {
    expect(historiaModule).toBeTruthy();
  });
});
