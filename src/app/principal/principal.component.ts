import { Component, Input, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IUser } from '../Food/food.interface';
import { FoodState } from '../models/food.redux';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

    @Select(FoodState.getAllfood) food$: Observable<IUser[]>;


    constructor(private store: Store) { }


  ngOnInit(): void {
    const food = this.store.selectSnapshot(FoodState.getAllfood);
    this.store.select(FoodState.getAllfood).subscribe((next) => {
      console.log('Cambio (Observable) ', next)
    })
  }

}
