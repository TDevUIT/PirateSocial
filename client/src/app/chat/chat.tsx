'use client';

import { useEffect, useState, KeyboardEvent } from 'react';
import io, { Socket } from 'socket.io-client';
import Cookies from 'js-cookie'; 
import styles from './Chat.module.css';

interface Message {
  sender: string;
  content: string;
}

interface UserProfile {
  picture: string;
  email: string;
}

const Chat: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [roomId, setRoomId] = useState<string>('1');
  const [socket, setSocket] = useState<Socket | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('http://localhost:3001/auth/profile', {
          method: 'GET',
          credentials: 'include', 
        });
        if (response.ok) {
          const data = await response.json();
          console.log('Fetched profile:', data);
          setProfile(data);

          connectToSocket(data);
        } else {
          console.error('Failed to fetch profile:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);
  const connectToSocket = (userProfile: UserProfile) => {
    if (userProfile) {
      const newSocket = io('http://localhost:3001', {
        auth: {
          profile: userProfile,
        },
      });

      newSocket.on('connect', () => {
        console.log('Connected to WebSocket server');
      });

      setSocket(newSocket);
    } else {
      console.error('No user profile found');
    }
  };

  useEffect(() => {
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, [socket]);

  useEffect(() => {
    if (socket) {
      socket.on('receiveMessage', (message: Message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });

      socket.on('joinedRoom', (roomId: string) => {
        console.log(`Joined room ${roomId}`);
      });

      socket.on('leftRoom', (roomId: string) => {
        console.log(`Left room ${roomId}`);
      });

      return () => {
        socket.off('receiveMessage');
        socket.off('joinedRoom');
        socket.off('leftRoom');
      };
    }
  }, [socket]);

  const sendMessage = () => {
    if (message.trim() && socket) {
      socket.emit('sendMessage', { content: message, roomId });
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'You', content: message },
      ]);
      setMessage('');
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendMessage();
    }
  };

  const joinRoom = (roomId: string) => {
    if (socket) {
      setRoomId(roomId);
      socket.emit('joinRoom', roomId);
    }
  };

  const leaveRoom = (roomId: string) => {
    if (socket) {
      socket.emit('leaveRoom', roomId);
    }
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatHeader}>
        <h2>Chat Room</h2>
        {profile && (
          <div>
            Welcome, {profile.email}
            {/* {profile.picture && <img src={profile.picture} alt="avatar" />} */}
          </div>
        )}
        <ul>
          <li><button onClick={() => joinRoom('1')}>Join Room 1</button></li>
          <li><button onClick={() => leaveRoom('1')}>Leave Room 1</button></li>
        </ul>
      </div>
      <div className={styles.messagesContainer}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.sender === 'You' ? styles.yourMessage : styles.otherMessage}
          >
            <strong>{msg.sender}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <div className={styles.inputContainer}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          className={styles.messageInput}
        />
        <button onClick={sendMessage} className={styles.sendButton}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
