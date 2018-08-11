import { PatologiasModule } from './patologias.module';

describe('PatologiasModule', () => {
  let patologiasModule: PatologiasModule;

  beforeEach(() => {
    patologiasModule = new PatologiasModule();
  });

  it('should create an instance', () => {
    expect(patologiasModule).toBeTruthy();
  });
});
