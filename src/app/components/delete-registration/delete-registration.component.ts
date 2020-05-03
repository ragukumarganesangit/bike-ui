import { Component, OnInit } from '@angular/core';
import {BikeService} from '../../services/bike.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-delete-registration',
  templateUrl: './delete-registration.component.html',
  styleUrls: ['./delete-registration.component.css']
})
export class DeleteRegistrationComponent implements OnInit {

  constructor(private bikeService: BikeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.deleteBikeReg(this.route.snapshot.params.id);
  }

  deleteBikeReg(id: number){
    this.bikeService.deleteBike(id).subscribe(
      error => console.error(error),
      () => console.log('Bikes loaded')
    );
  }

}
