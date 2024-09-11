
export interface UserProfile {
    picture: string;
    email: string;
  }
  
  export interface Message {
    id: number;
    message: string;
    createdAt: string;
    sender?: string
    roomId?: number
    picture?: string;
    file?: { name: string; type: string; size: number } | null;
  }
  