import { Pipe, PipeTransform } from '@angular/core';
import { CarsInterface } from '../interfaces/cars-interface';

@Pipe({
  name: 'sortpipe'
})
export class SortpipePipe implements PipeTransform {

  transform(carArray: CarsInterface[] , sortType:string): CarsInterface[] {
    if(!Array.isArray(carArray)){
      return null
    }
    else if(sortType == 'low'){
      carArray = carArray.sort((x,y)=> x.price - y.price);
      return carArray
    }
    else if(sortType == 'high'){
      carArray = carArray.sort((x,y)=> y.price - x.price);
      return carArray
    }
    else if(sortType == 'alphabetically'){
      carArray = carArray.sort((x,y)=>{        
          return (x.carName.toLocaleLowerCase() < y.carName.toLocaleLowerCase()) ? -1 : (x.carName.toLocaleLowerCase() > y.carName.toLocaleLowerCase()) ? 1 : 0
      });
      return carArray
    }
    
    return carArray;
  }

}
