import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { Subject } from 'rxjs';
import { env } from 'src/app/enum/enum';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {

  private hubConnectionBuilder!: HubConnection;
  private Environment: any = env.signalR;

  private responseSubject = new Subject<any>();
  response$ = this.responseSubject.asObservable();

  SignalRConnection(MapName: string, MethodName: string) {
    this.hubConnectionBuilder = new HubConnectionBuilder()
      .withUrl(`${this.Environment}/${MapName}`)
      .configureLogging(LogLevel.Information)
      .build();

    this.hubConnectionBuilder
      .start()
      .then(() => console.log('Connection started.......!'))
      .catch(err => console.log('Error while connect with server', err));

    this.hubConnectionBuilder.on(MethodName, (result: any) => {
      console.log('Offer result', result);
      this.responseSubject.next(result);
    });
  }
}
