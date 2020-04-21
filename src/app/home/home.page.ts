import { Component, OnInit } from '@angular/core';
import { SocketDataService } from '../socket-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  data: Observable<number[]>;

  constructor(private dataService: SocketDataService) {}

  ngOnInit() {
    this.data = this.dataService.getData();
  }
}
