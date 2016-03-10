import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {provide} from 'angular2/core'
import {APP_BASE_HREF, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router'
import {HTTP_PROVIDERS} from 'angular2/http'
import {NAVIGATION_PROVIDERS} from './navigation/navigation.module'
import {CONTACT_PROVIDERS} from './contact/contact.module'

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    provide(APP_BASE_HREF, {useValue: '/'}),
    HTTP_PROVIDERS,
    NAVIGATION_PROVIDERS,
    CONTACT_PROVIDERS
]);