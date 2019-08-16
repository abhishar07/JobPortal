import { Injectable } from '@angular/core';
import { JobClass }   from './job';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class JobService {

  constructor(private http : HttpClient) { }

  getJobs(value : string): Observable<JobClass[]> {                
    
    return this.http.get<JobClass[]>('https://jobsqared.herokuapp.com/jobs?query='+value); //calling backend server
  }
  
}
