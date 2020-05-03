import { Component, OnInit } from '@angular/core';
import {BikeService} from '../../services/bike.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  models: string[] = [
    'Raleigh',
    'BridgeStone Picnia',
    'Miyata 310',
    'Lotus 108',
    'Other'
  ];
  bikeForm: FormGroup;
  validMessage: string;
  constructor(private bikeService: BikeService) { }

  ngOnInit(): void {
    this.bikeForm = new FormGroup({
      name:  new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      purchasePrice: new FormControl('', Validators.required),
      purchaseDate: new FormControl('', Validators.required),
      contact: new FormControl()
    });
  }

  submitRegistration(){
    if (this.bikeForm.valid){
      this.validMessage = 'Your Bike Registration has been submitted.Thank you!';
      this.bikeService.createBikeRegistration(this.bikeForm.value).subscribe(
        data => {
          this.bikeForm.reset();
          return true;
        },
        error => {
          this.validMessage = 'Your Bike Registration has Failed.Enter correct data.Thank you!';
          return Observable.throw(error);
        });
    }
    else{
      this.validMessage = 'please fill out the form before submitting!';
    }
  }

}
