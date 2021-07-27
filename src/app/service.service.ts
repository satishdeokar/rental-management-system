import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private selectedValues = new BehaviorSubject<string>('');
  currentSelected = this.selectedValues.asObservable();

  constructor(private http: HttpClient) {
    this.getJSON();
  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/catalog.json");
  }
  

  changeSelected(Values: string) {
    localStorage.setItem('currtValue',Values)
    this.selectedValues.next(localStorage.getItem('currtValue'));
  }
}
