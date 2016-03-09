import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {provide} from 'angular2/core'
import {APP_BASE_HREF, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router'
import {HTTP_PROVIDERS} from 'angular2/http'
import {NavigationService} from './navigation/navigation.service'
import {ContactService} from './contact/contact.service'

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    provide(APP_BASE_HREF, {useValue: '/'}),
    HTTP_PROVIDERS,
    NavigationService,
    ContactService
]);