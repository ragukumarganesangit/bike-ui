import { Component, OnInit } from '@angular/core';
import {BikeService} from '../../services/bike.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {

  public bikeReg;
  constructor(private bikeService: BikeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getBikeReg(this.route.snapshot.params.id);
    /*this is the id in app-routing.module.ts which will be routed here via ActivateRoute**/
  }
  getBikeReg(id: number){
    this.bikeService.getBike(id).subscribe(
      data => this.bikeReg = data,
      error => console.error(error),
      () => console.log('Bikes loaded')
    );
  }
}
