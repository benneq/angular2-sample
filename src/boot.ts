import {bootstrap}    from '@angular/platform-browser-dynamic';
import {STORE_PROVIDERS} from './store/store.module';
import {AppComponent} from './app.component';
import {provide} from '@angular/core';
import {APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from '@angular/common';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http';
import {NAVIGATION_PROVIDERS} from './navigation/navigation.module';
import {CONTACT_PROVIDERS} from './contact/contact.module';
import {NOTIFICATION_PROVIDERS} from './notification/notification.module';



bootstrap(AppComponent, [
    STORE_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    provide(APP_BASE_HREF, {useValue: '/'}),
    HTTP_PROVIDERS,
    NAVIGATION_PROVIDERS,
    CONTACT_PROVIDERS,
    NOTIFICATION_PROVIDERS
]);