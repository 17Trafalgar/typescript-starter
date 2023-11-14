import { Controller, Render, Get, Res, Post, Body } from '@nestjs/common';
import { ChatEntity } from './chat.entity';

/* @Controller()
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get('/chat')
  @Render('index')
  Home() {
    return;
  }

  @Get('/chat/get')
  async Chat(@Res() res) {
    const messages = await this.chatService.getMessages();
    res.json(messages);
  }

  @Post('/chat/post')
  async ChatPost(@Body() body: ChatEntity, @Res() res) {
    const messages = await this.chatService.createMessage(body);
    res.json(messages);
  }
} */
