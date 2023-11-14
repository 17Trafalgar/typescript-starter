import { Module } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatEntity } from './chat.entity';
/* import { ChatController } from './chat.controller'; */
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([ChatEntity]), UserModule],
  controllers: [
    /* ChatController */
  ],
  providers: [ChatGateway],
})
export class ChatModule {}
