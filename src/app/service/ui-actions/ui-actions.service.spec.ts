import { TestBed } from '@angular/core/testing';

import { UiActionsService } from './ui-actions.service';

describe('UiActionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UiActionsService = TestBed.get(UiActionsService);
    expect(service).toBeTruthy();
  });
});
