import {Component} from '@angular/core'
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout'
import {Observable} from 'rxjs'
import {map, shareReplay} from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  #breakpointObserver: BreakpointObserver
  isHandset$: Observable<boolean>

  constructor(breakpointObserver: BreakpointObserver) {
    this.#breakpointObserver = breakpointObserver
    this.isHandset$ = this.#breakpointObserver.observe(Breakpoints.Handset).pipe(
      map((result) => result.matches),
      shareReplay()
    )
  }
}
