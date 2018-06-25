import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'myFilter'
})
export class FilterPipe implements PipeTransform {
//   transform(items: any[], searchText: string): any[] {
//     if(!items) return [];
//     if(!searchText) return items;
// searchText = searchText.toLowerCase();
// return items.filter( it => {
// //console.log(it);
// console.log(it);
//       return it.user_name.toLowerCase().includes(searchText);
//     });
//    }
   transform(items: any[], term: string): any {
         // I am unsure what id is here. did you mean title?
         if(!items) return [];
         if(!term) return items;
         term=term.toLowerCase();
         return items.filter( it => {
               return it.user_name.toLowerCase().includes(term);
             });
     }
}
