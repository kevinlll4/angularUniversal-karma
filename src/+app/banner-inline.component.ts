import { Component } from '@angular/core';
import { UserService }       from './model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls:  ['./banner.component.css']
})
export class BannerComponent {
  title = 'Test Tour of Heroes';
}