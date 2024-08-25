import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatService } from 'src/chat/chat.service';
import { RoomService } from 'src/room/room.service';


@WebSocketGateway({
  cors: {
    origin: '*', 
  },
})
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  constructor(
    private readonly chatService: ChatService,
    private readonly roomService: RoomService,
  ) {}

  @SubscribeMessage('sendMessage')
  async handleMessage(@MessageBody() message: { content: string, roomId: string }, @ConnectedSocket() client: Socket) {
    console.log(`Received message from client ${client.id}:`, message);
    await this.chatService.sendMessage(
      parseInt(message.roomId, 10),
      parseInt(client.id, 10),
      message.content
    );
    this.server.to(message.roomId).emit('receiveMessage', {
      content: message.content,
      userId: client.id, 
    });

    console.log(`Message sent to room ${message.roomId}:`, {
      content: message.content,
      userId: client.id,
    });
  }

  @SubscribeMessage('joinRoom')
  async handleJoinRoom(@MessageBody() roomId: string, @ConnectedSocket() client: Socket) {
    console.log(`Client ${client.id} joining room ${roomId}`);
    await this.roomService.addUserToRoom(parseInt(roomId, 10), parseInt(client.id, 10));
    client.join(roomId);
    client.emit('joinedRoom', roomId);
    
    console.log(`Client ${client.id} joined room ${roomId}`);
  }

  @SubscribeMessage('leaveRoom')
  async handleLeaveRoom(@MessageBody() roomId: string, @ConnectedSocket() client: Socket) {
    console.log(`Client ${client.id} leaving room ${roomId}`);
    await this.roomService.removeUserFromRoom(parseInt(roomId, 10), parseInt(client.id, 10));
    client.leave(roomId);
    client.emit('leftRoom', roomId);
    
    console.log(`Client ${client.id} left room ${roomId}`);
  }
}
