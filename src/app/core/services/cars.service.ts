import { Injectable } from '@angular/core';
import { CarsInterface } from '../interfaces/cars-interface';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor() { }
  cars:CarsInterface[] = [
    {
      id:1,
      carName:'Mercedes V Class 2022',
      carType:"Manual",
      carAccesss: true,
      city:"Giza", 
  
      price:24,
      image: '3.png'
  },
  {
    id:2,
    carName:'Maybach Mercedes',
    carType:"Automatic",
    carAccesss: true,
    city:"Alexandria", 

    price:25,
    image: '4.png'
},
{
  id:3,
  carName:'Mercedes V Class 2022',
  carType:"Manual",
  carAccesss: true,
  city:"Giza", 
  price:38,
  image: '1.png'
},
{
  id:4,
  carName:'Mercedes E Class 2022',
  carType:"Manual",
  carAccesss: true,
  city:"Cairo", 
  price:59,
  image: '2.png'
},
{
  id:5,
  carName:'BMW x7 2022',
  carType:"Automatic",
  carAccesss: true,
  city:"Alexandria", 
  price:24,
  image: '5.png'
}

  ]

getCars(){
  return this.cars;
}
createMovie (movie: any) {
  return this.cars.push(movie)
}

}
