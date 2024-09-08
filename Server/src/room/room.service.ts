import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RoomService {
  constructor(private readonly prisma: PrismaService) {}

  async createRoom(name: string) {
    return this.prisma.room.create({
      data: { name },
    });
  }

  async addUserToRoom(roomId: number, userId: number) {
    let room = await this.prisma.room.findUnique({
      where: { id: roomId },
    });
    if (!room) {
      room = await this.prisma.room.create({
        data: { id: roomId, name: `Room ${roomId}` },
      });
    }
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException(`User with id ${userId} does not exist`);
    }
    return this.prisma.roomUser.create({
      data: {
        roomId,
        userId,
      },
    });
  }

  async removeUserFromRoom(roomId: number, userId: number) {
    return this.prisma.roomUser.deleteMany({
      where: {
        roomId,
        userId,
      },
    });
  }
}
