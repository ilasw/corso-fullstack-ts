import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

    dato = 0;
    dato$ = new BehaviorSubject<number>(0)

    obj: Record<string, string> = {prop: 'value'};
}


// possiamo modificare il dato$ con blogService.dato$.next(NUOVO_VALORE);
