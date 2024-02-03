import { TestBed } from '@angular/core/testing';

import { OidcCustomStorageService } from './oidc-custom-storage.service';

describe('OidcCustomStorageService', () => {
  let service: OidcCustomStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OidcCustomStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
