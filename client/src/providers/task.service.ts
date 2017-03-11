import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class TaskService {

  constructor(public http: Http) {
 console.log("Task service started!");

  }
 
  getTasks(){
 
    return this.http.get('http://localhost:8000/api/task/58b752e5f36d281facb7ca0f')
        .map(res => res.json())
      
        
    }
 
  }
 
  
