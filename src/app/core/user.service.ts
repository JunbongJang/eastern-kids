import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {ServerService} from './server.service';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userInitialized = new Subject<boolean>();
 // user_initialized_bool = false;

}
