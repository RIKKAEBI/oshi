import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconConfigComponent } from './icon-config.component';

describe('IconConfigComponent', () => {
  let component: IconConfigComponent;
  let fixture: ComponentFixture<IconConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconConfigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IconConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
