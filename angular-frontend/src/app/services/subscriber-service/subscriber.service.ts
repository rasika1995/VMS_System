import { Injectable } from '@angular/core';
import { Subscriber } from '../../subscriber.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const baseUrl = 'http://localhost:3000'; 

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {

  subscriber!:Subscriber[];
  constructor(private http : HttpClient) { }

  createSubscriber(subscriber: Subscriber) {
    console.log('Subscriber ' + JSON.stringify(subscriber));
    const reqHeader = new HttpHeaders().set('Content-Type','application/json').set('Accept','application/json');
    return this.http.post(`${baseUrl}/subscriber/add`,subscriber,{headers :reqHeader});
  }

  getSubscriber(){
    return this.http.get(`${baseUrl}/subscriber`);
  }
}
