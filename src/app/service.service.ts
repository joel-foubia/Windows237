import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';

const API_SERVICE = environment.SERVICE;
const API_SERVICE_DETAILS = environment.DETAILS;

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
              public httpClient : HttpClient
  ) { }

  getData(){
   return this.httpClient.get(API_SERVICE + 1);
  }
}
