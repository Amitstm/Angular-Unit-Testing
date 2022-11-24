import { Injectable } from '@angular/core';
import { LoggerService } from 'src/app/services/Logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private loggerService: LoggerService){}

  add(n1:number, n2:number){
  let result = n1+n2;
  this.loggerService.log('Add Opertaion is called');
  return result;
 }
  subtract(n1:number, n2:number){
  let result = n1-n2;
  this.loggerService.log('Subtract Opertaion is called');
  return result;
 }
}
