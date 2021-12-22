import { TestBed } from '@angular/core/testing';

import { VariablesService } from './variables.service';

describe('VariablesService', () => {
  let service: VariablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VariablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should init variables', () => {
    const nextSpy = spyOn(service.ballsList, 'next');
    service.siteSetting();
    expect(nextSpy).toHaveBeenCalled();
    expect(service.numbers).toBeDefined();
    expect(service.colors).toBeDefined();
  });

  it('should reset variables', () => {
    const nextSpy = spyOn(service.selecttecballsList, 'next');
    service.reset();
    expect(nextSpy).toHaveBeenCalled();
    expect(service.index).toEqual(0);
    expect(service.ballsSelected).toEqual([null,null,null,null,null,null,null,null]);
  });

  


});
