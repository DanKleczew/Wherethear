import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FormatDatePipe',
  standalone: true
})
export class FormatDatePipe implements PipeTransform {

  transform(value: string | Date): string {
    // Convertir en objet Date si ce n'est pas déjà une date
    const date = value instanceof Date ? value : new Date(value);

    if (isNaN(date.getTime())) {
      return 'Date invalide';
    }

    // Formatter la date en dd-MM-yyyy
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    console.log(`${day}-${month}-${year}`);
    return `${day}-${month}-${year}`;
  }

}
