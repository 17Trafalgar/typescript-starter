import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChatEntity } from './chat.entity';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(ChatEntity)
    private chatRepository: Repository<ChatEntity>,
  ) {}
  async createMessage(chat: ChatEntity): Promise<ChatEntity> {
    return this.chatRepository.save(chat);
  }

  async getMessages(): Promise<ChatEntity[]> {
    return this.chatRepository.find();
  }

  async getMessage(id: number): Promise<ChatEntity> {
    return this.chatRepository.findOne({ where: { id } });
  }
}
