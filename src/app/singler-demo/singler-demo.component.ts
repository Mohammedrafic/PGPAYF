import { Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

@Component({
  selector: 'app-singler-demo',
  templateUrl: './singler-demo.component.html',
  styleUrls: ['./singler-demo.component.scss']
})
export class SinglerDemoComponent implements OnInit {

  constructor() { }

  title = 'SignalRClient';
  private hubConnectionBuilder!: HubConnection;
  offers: any[] = [];
  ngOnInit(): void {
      this.hubConnectionBuilder = new HubConnectionBuilder()
      .withUrl('https://localhost:7202/offers')
      .configureLogging(LogLevel.Information)
      .build();

      this.hubConnectionBuilder
      .start()
      .then(() => console.log('Connection started.......!'))
      .catch(err => console.log('Error while connect with server'));
      
      this.hubConnectionBuilder.on('SendOffersToUser', (result: any) => {
        console.log('Offer result',result);
          this.offers.push(result);
      });
  }
}
