import {provide} from 'angular2/core'
import {ContactService} from './contact.service'
import {HAS_PAGE_TOKEN} from '../common/interface/haspage.interface'

export const CONTACT_PROVIDERS: any[] = [
    ContactService,
    provide(HAS_PAGE_TOKEN, { useClass: ContactService, multi: true })
]