import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { lightstate, darkstate } from './states/theme-state/theme.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  themeState$: Observable<boolean>
  themeStateValue: boolean;
  constructor(private store: Store<{ themeState: boolean }>) {
    this.themeState$ = store.pipe(select('themeState'));
   }

  ngOnInit(): void {
    this.themeState$.subscribe((currentState) => {
      this.themeStateValue = currentState;
      if (this.themeStateValue == true) {
        let themeColorLight = document.getElementsByClassName('wrapper') as HTMLCollectionOf<HTMLElement>;
        if (themeColorLight.length != 0) {
          themeColorLight[0].style.backgroundColor = "#FFFFFF";
        }
      } else if (this.themeStateValue == false) {
        let themeColorDark = document.getElementsByClassName('wrapper') as HTMLCollectionOf<HTMLElement>;
        if (themeColorDark.length != 0) {
          themeColorDark[0].style.backgroundColor = "#000000";
        }
      }
    })
  }
}
