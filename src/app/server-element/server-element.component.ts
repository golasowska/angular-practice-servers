import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated   // <--default None, Native
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input('srvElement') element: {type: string, name: string, content: string };

  constructor() {
    console.log('Constructor called!')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('OnChanges called!');
    console.log(changes)
  }

  ngOnInit() {
    console.log('OnInit called!')
  }

}
