import { Pipe,PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchFilter'
})
export class SearchFilter implements PipeTransform {
    transform(items: any[], criteria: any): any {

        return items.filter(item =>{
        //    for (let key in item ) {
        //      if((""+item[key]).includes(criteria)){
        //         return true;
        //      }
        //    }
           // 일단 이름검색만
           if (item["name"].includes(criteria)) return true; 
           return false;
        });
    }
}