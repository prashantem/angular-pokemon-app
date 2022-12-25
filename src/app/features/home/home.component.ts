import { Component, OnInit } from '@angular/core';
import { HttpConfigService } from '../../shared/services/http-config.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 pokeList: any;
 searchForm: FormGroup;
 pokeListResults:any;
  constructor(
    private httpConfigService:HttpConfigService, 
    private fb: FormBuilder,
    private router: Router) {
    this.searchForm = this.fb.group({
      search: new FormControl(null, Validators.required)
    });
   }

  ngOnInit(): void {
    this.httpConfigService.getConfig('https://pokeapi.co/api/v2/pokemon?limit=151').subscribe((data:any) =>{
      this.pokeListResults = data['results'];
      this.pokeList = this.pokeListResults;
    })
  }

  searchPoke(){
    this.pokeList = this.pokeListResults.filter( (i:any) => {
        return i.name.indexOf(this.searchForm.controls['search'].value) >= 0;
    });
  }

}