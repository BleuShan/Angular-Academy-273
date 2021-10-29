import {Component, OnInit} from '@angular/core'
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout'
import {Observable} from 'rxjs'
import {map, shareReplay} from 'rxjs/operators'
import {ROUTES} from './app-routing.module'

type LinkItem = {
  path: string
  title: string
}

const LINK_ITEMS = ROUTES.reduce((items: LinkItem[], {redirectTo, path, data}) => {
  const {title} = data || {}
  if (typeof title !== 'string' || redirectTo || !path) return items
  items.push({title, path})
  return items
}, [])

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  #breakpointObserver: BreakpointObserver
  isHandset$?: Observable<boolean>
  linkItems = LINK_ITEMS
  constructor(breakpointObserver: BreakpointObserver) {
    this.#breakpointObserver = breakpointObserver
  }

  ngOnInit(): void {
    this.isHandset$ = this.#breakpointObserver.observe(Breakpoints.Handset).pipe(
      map((result) => result.matches),
      shareReplay()
    )
  }
}
