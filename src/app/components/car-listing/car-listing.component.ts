import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarsInterface } from 'src/app/core/interfaces/cars-interface';
import { SortpipePipe } from 'src/app/core/pipes/sortpipe.pipe';
import { CarsService } from 'src/app/core/services/cars.service';
import { FilterDataService } from 'src/app/core/services/filter-data.service';
@Component({
  selector: 'app-car-listing',
  templateUrl: './car-listing.component.html',
  styleUrls: ['./car-listing.component.css']
})
export class CarListingComponent implements OnInit {
  imageFile: File;
  displayPopup: boolean = false;
  carsForm: FormGroup
  imagePath:string = '../../../assets/shared/images/'
  constructor(private fb: FormBuilder, private carsData: CarsService , private sortMethods:SortpipePipe , private filering:FilterDataService) { }

  car: CarsInterface = {} as CarsInterface
  carsArr: CarsInterface[] = [] || null;
  submitted: boolean = false;
  
  ngOnInit(): void {
    this.carsArr = this.carsData.getCars();
    this.buildForm();
  }
  

  showPopup() {
    this.displayPopup = true;
  }
  closePopup() {
    this.displayPopup = false;
  }

  onSubmit() {
    this.submitted = true;
    this.create()
    this.displayPopup = false
  }
  get f() {
    return this.carsForm.controls;
  }
  onSelectedFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.carsForm.patchValue({
      image: file
    });
    this.carsForm.get('image').updateValueAndValidity();
  }

  create() {
    this.car.id = this.carsArr.length + 1;
    const formData: FormData = new FormData();

    if (
      !this.carsForm.get('name').value ||
      !this.carsForm.get('transmission').value ||
      !this.carsForm.get('airCond').value ||
      !this.carsForm.get('city').value ||
      !this.carsForm.get('price').value ||
      !this.carsForm.get('image').value 
    ) {

      throw new Error("The parameter 'file' cannot be null.");
    }
    else {
      this.car.carName = this.carsForm.get('name').value;
      this.car.carType = this.carsForm.get('transmission').value;
      if(this.carsForm.get('airCond').value == 'yes'){
        this.car.carAccesss = true;
      }
      else{
        this.car.carAccesss = false;
      }
      this.car.city = this.carsForm.get('city').value;
      this.car.price = this.carsForm.get('price').value;
      this.car.image = this.carsForm.get('image').value.name;
      
      
    }


    this.carsArr.push(this.car)
    

  }
 
  buildForm() {
    this.carsForm = this.fb.group({
      'name': [this.car?.carName || null, [Validators.required, Validators.minLength(4)]],
      'transmission': [this.car?.carType || null, [Validators.required, Validators.min(0)]],
      'airCond': [this.car?.carAccesss || null, [Validators.required, Validators.min(0)]],
      'city': [this.car?.city || null, [Validators.required, Validators.min(0)]],
      'price': [this.car?.price || null, [Validators.required]],
      'image': [null || null, [Validators.required]],
    })
  }

  sortData(event:any):CarsInterface[]{    
     return this.carsArr = this.sortMethods.transform(this.carsArr , event.target.value) 
  }


  rangeValue(event:any){
    this.carsArr = this.carsData.getCars();
    this.carsArr = this.filering.rangeFilter(this.carsArr , event.target.value)
    return this.carsArr
  }

  airValue(event:any){
    this.carsArr = this.carsData.getCars();
    this.carsArr = this.filering.airFilter(this.carsArr , event.target.value)
    return this.carsArr
  }
  cityFilter(event:any){
    this.carsArr = this.carsData.getCars();
    this.carsArr = this.filering.cityCheck(this.carsArr , event.target.value)
    return this.carsArr
  }
  
  carType(event:any){
    console.log(event.target.value);
    
    this.carsArr = this.carsData.getCars();
    this.carsArr = this.filering.typeCheck(this.carsArr , event.target.value)
    return this.carsArr
  }

  resetAll(event:any){
    event.target.value = null;
    this.carType(event);
    this.airValue(event);
    this.cityFilter(event);
    this.rangeValue(event);
    return this.carsArr
  }


}
