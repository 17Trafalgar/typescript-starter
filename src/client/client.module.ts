import { Module } from '@nestjs/common';
import { SocketClient } from './client.service';

@Module({
  providers: [SocketClient],
})
export class SocketModule {}
