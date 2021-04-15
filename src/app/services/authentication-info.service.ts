import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationInfoService {
user: Object;
  constructor() { }

  getAuthenticatedUser(){
    Auth.currentAuthenticatedUser({
      bypassCache: true
    }).then(userCognito => {
      console.log(userCognito);
      this.user = userCognito;

    })
    .catch(error => console.log(error));
  }


    // getAuthenticatedUser(){
    //   const observable = from(
    //     Auth.currentAuthenticatedUser({
    //       bypassCache: true
    //     }).then(userCognitio => {
    //       console.log(userCognitio)
    //     }).catch(error => console.log(error))
    //   )
    //   return observable;
    // }

  // async getAuthenticatedUser(){
  // const { attributes } = await Auth.currentAuthenticatedUser();
  // return attributes;
  // }
  getUserInfo(){
    return this.user;
  }
}
