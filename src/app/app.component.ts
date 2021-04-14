import { Component, ChangeDetectorRef, OnInit, NgZone } from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'SportsBetTrackerApp';
  user: CognitoUserInterface | undefined;
  authState: AuthState;

  constructor(private ref: ChangeDetectorRef, private zone:NgZone) {
  }

  ngOnInit(){
   onAuthUIStateChange((authState, authData) => {

      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      this.zone.run(() => this.ref.detectChanges());
    })

  }

  ngOnDestroy(){
    return onAuthUIStateChange;
  }


}
