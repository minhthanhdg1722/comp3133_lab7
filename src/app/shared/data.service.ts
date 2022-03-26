import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserObject } from '../model/UserObject';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getAllUserData(){
    return this.httpClient.get("https://reqres.in/api/users?page=1")
  }

  getUserById(userID: Number){
    return this.httpClient.get(`https://reqres.in/api/users/${userID}`)
  }

  getUserById_MODEL(userID: Number){
    return this.httpClient.get<UserObject>(`https://reqres.in/api/users/${userID}`)
  }
}

