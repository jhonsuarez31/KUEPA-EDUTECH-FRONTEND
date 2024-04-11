import React, { useState, useEffect } from "react";
import ChatView from "./class.chat.view";
import { connectToServer } from '../../../utils/socketClient/socket-client';
import { ConversationController } from "../../../controllers/conversation/conversation.controller";

const ChatContainer = () => {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState<{ message: string; createdBy: string, rol:string }[]>([]); 
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userid');
  const rol = localStorage.getItem('rol');

  const connectionSocket = connectToServer(token);
  const conversationControler = new ConversationController()
  const test= conversationControler.getMessages('194c35bd-3cd6-4c63-beaf-e63a1c7b0521')

  useEffect(() => {
    if (connectionSocket) {
      connectionSocket.on("message-from-server", (payload: { fullName: string; message: string, rol:string }) => {
        setConversation(prevConversation => [...prevConversation, { message: payload.message, createdBy: payload.fullName, rol:payload.rol }]);
      });
    }
    return () => {
      if (connectionSocket) {
        connectionSocket.disconnect();
      }
    };
  }, [connectionSocket]); 

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setMessage(e.target.value);

  const sendMessage = () => {
    if (connectionSocket) {
      connectionSocket.emit("message-from-client", {
        id: userId,
        rol,
        message: message
      });
    }
  };

  return (
    <>
      <ChatView
        message={message}
        onChangeMessage={handleMessageChange}
        onSendMessage={sendMessage}
        conversation={conversation} 
      />
    </>
  );
}

export default ChatContainer;
