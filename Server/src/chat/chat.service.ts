import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChatService {
  constructor(private readonly prisma: PrismaService) {}
  async sendMessage(roomId: number, senderId: number, message: string) {
    return this.prisma.chat.create({
      data: {
        roomId,
        senderId,
        message,
      },
    });
  }

  async getMessagesByRoom(roomId: number) {
    return this.prisma.chat.findMany({
      where: { roomId },
      orderBy: { createdAt: 'asc' },
    });
  }
}
