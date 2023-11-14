import { Injectable, OnModuleInit } from '@nestjs/common';
import { Socket, io } from 'socket.io-client';

@Injectable()
export class SocketClient implements OnModuleInit {
  public socketClient: Socket;

  constructor() {
    this.socketClient = io('http://localhost:1234');
  }

  onModuleInit() {
    this.registerEvents();
  }

  private registerEvents() {
    this.socketClient.emit('chat', { msg: 'Hello Artem' });
    this.socketClient.on('connect', () => {
      console.log('Client connected');
    });
    this.socketClient.on('chat', (payload: any) => {
      console.log(`Вы получили новое сообщение`);
      console.log(payload);
    });
  }
}
