import { UpperCasePipe } from '@angular/common';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,filterString:string){
    if(value.length ===0||filterString ===''){
      return value;
    }

    const prods =[];
    for(const prod of value){
      if(prod['prodcate']=== filterString){
        prods.push(prod);
      }
    }
    return prods;
  }

}
