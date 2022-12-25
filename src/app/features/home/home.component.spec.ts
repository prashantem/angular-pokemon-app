import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HomeComponent } from './home.component';
import { HttpConfigService } from '../../shared/services/http-config.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [HttpClientTestingModule, 
        FormsModule, 
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([]),], 
        providers: [HttpConfigService],
        
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test number of elements', ()=> {
    
    const restService = TestBed.inject(HttpConfigService);
    const data = {
      "count":1154,
      "next":"https://pokeapi.co/api/v2/pokemon?offset=151&limit=151",
      "previous":null,
      "results":[{"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"}]
    } 
    spyOn(restService, 'getConfig').and.returnValue(of(data));
    component.ngOnInit();
    expect(component.pokeListResults.length).toBe(1);
});

});
