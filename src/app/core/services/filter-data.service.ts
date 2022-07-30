import { Injectable } from '@angular/core';
import { CarsInterface } from '../interfaces/cars-interface';

@Injectable({
  providedIn: 'root'
})
export class FilterDataService {

  newArr:CarsInterface[]
  constructor() { }

  rangeFilter(dataArr:CarsInterface[] , value:any):CarsInterface[]{
    this.newArr =  dataArr
    this.newArr =  dataArr.filter((car)=>{
      return car.price >= value
    })
    
    return this.newArr
  }

  airFilter(dataArr:CarsInterface[] , value:any):CarsInterface[]{
    this.newArr =  dataArr
    this.newArr =  dataArr.filter((car)=>{
      if(value == 'Yes'){        
        return car.carAccesss = true
      }
      else if(value == 'No'){        
        return car.carAccesss = false
      }
      
      return car
    })
    
    return this.newArr
  }
  cityCheck(dataArr:CarsInterface[] , value:any):CarsInterface[]{
    this.newArr =  dataArr
    this.newArr =  dataArr.filter((car)=>{return car.city == value})
    return this.newArr
  }
  typeCheck(dataArr:CarsInterface[] , value:any):CarsInterface[]{
    this.newArr =  dataArr
    this.newArr =  dataArr.filter((car)=>{return car.carType == value})
    return this.newArr
  }

}
