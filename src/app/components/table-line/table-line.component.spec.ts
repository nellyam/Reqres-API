import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLineComponent } from './table-line.component';

describe('TableLineComponent', () => {
  let component: TableLineComponent;
  let fixture: ComponentFixture<TableLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
