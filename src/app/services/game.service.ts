import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { MessagesService } from '/'

@Injectable()
export class GameService {


	Me: User;

  constructor(private http: Http, private _Messages: MessagesService) { 


  }

  login(name: string, password: string){
  	if(password == '123'){
  		// Log the user  

  	}

  }


}


