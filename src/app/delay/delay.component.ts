import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delay',
  templateUrl: './delay.component.html',
  styleUrls: ['./delay.component.css'],
})
export class DelayComponent {
  data: string = '';
  delay: number = 1;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getDelay();
  }

  next(): void {
    this.delay += 1;
    this.getDelay();
  }

  getDelay(): void {
    this.httpClient
      .get(`https://hub.dummyapis.com/delay?seconds=${this.delay}`, {
        responseType: 'text',
      })
      .subscribe((data) => (this.data = data));
  }
}
