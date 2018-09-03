import { VolumeInfoModule } from './volume-info.module';

describe('VolumeInfoModule', () => {
  let volumeInfoModule: VolumeInfoModule;

  beforeEach(() => {
    volumeInfoModule = new VolumeInfoModule();
  });

  it('should create an instance', () => {
    expect(volumeInfoModule).toBeTruthy();
  });
});
