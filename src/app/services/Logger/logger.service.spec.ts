import { LoggerService } from "./logger.service"

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(()=>{
    service = new LoggerService();
  })
  it('Should not have nay message at starting', () => {
    // arrange
    // const service = new LoggerService();
    // act
    let count = service.messages.length;
    // assert
    expect(count).toBe(0);

  });
  it('Should add the messaged when log is called', () => {
    // arrange
    // const service = new LoggerService();
    // act
    service.log('message')
    // assert
    expect(service.messages.length).toBe(1)
  });

  it('should clear all the message when clear is calledd ', () => {

    // arrange
    // const service = new LoggerService();
    service.log('message');
    // act
    service.clear();
    // assert
    expect(service.messages.length).toBe(0);
  });
});

