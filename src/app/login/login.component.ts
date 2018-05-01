import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';

declare var googleyolo: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _Game: GameService) {
  	googleyolo.hint({
  	  supportedAuthMethods: [
        "https://accounts.google.com",
  ],
  supportedIdTokenProviders: [
    {
      uri: "https://accounts.google.com",
      clientId: "1003877060649-bsdeat05c495fpv6mhf5g32rpgghvtrd.apps.googleusercontent.com"
    }
  ]
}).then((credentials: any) =>{
	console.log(credentials);
})
}

  ngOnInit() {
  }

}
