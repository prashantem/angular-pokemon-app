import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { HttpConfigService } from './http-config.service';

describe('HttpConfigService', () => {
  let service: HttpConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
        providers: [HttpConfigService]
    });
    service = TestBed.inject(HttpConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
