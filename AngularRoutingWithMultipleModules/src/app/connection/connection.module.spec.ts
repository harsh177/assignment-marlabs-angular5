import { ConnectionModule } from './connection.module';

describe('ConnectionModule', () => {
  let connectionModule: ConnectionModule;

  beforeEach(() => {
    connectionModule = new ConnectionModule();
  });

  it('should create an instance', () => {
    expect(connectionModule).toBeTruthy();
  });
});
