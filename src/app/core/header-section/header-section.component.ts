import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss']
})
export class HeaderSectionComponent {
  @Input() public text;
  @Input() public btnback = false;

  constructor(private location: Location) {}

  back() {
    this.location.back();
    return true;
  }
}
