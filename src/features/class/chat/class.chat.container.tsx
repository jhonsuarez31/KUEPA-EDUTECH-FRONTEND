import React, { useState, useEffect } from 'react';
import ChatView from './class.chat.view';
import { connectToServer } from '../../../utils/socketClient/socket-client';
import { useAppDispatch } from '../../../hooks/app/hooks';
import { startChat} from '../../../store/chat/thunks';
import { useSelector } from 'react-redux';
import { RootState } from '@reduxjs/toolkit/query';
import { showAlert } from '../../../utils/alerts/alert.util';
//import { ConversationController } from "../../../controllers/conversation/conversation.controller";

const ChatContainer = () => {
  const dispatch = useAppDispatch();
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState<
    { message: string; createdBy: string; rol: string }[]
  >([]);
  const token = localStorage.getItem('token');
  const auth = useSelector((state: RootState) => state.auth);

  //const userId = localStorage.getItem('userid');

  const connectionSocket = connectToServer(token);
 
  useEffect(() => {
    if (connectionSocket) {
      connectionSocket.on(
        'message-from-server',
        (payload: { fullName: string; message: string; rol: string }) => {
          setConversation((prevConversation) => [
            ...prevConversation,
            {
              message: payload.message,
              createdBy: payload.fullName,
              rol: payload.rol,
            },
          ]);
        },
      );
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
      if(auth.status ==='not_authenticated'){
        showAlert('error', 'No has iniciado sesión', 'error');
        return 
      }
        
      const id = auth.id
      const rol = auth.rol

      connectionSocket.emit('message-from-client', {
        id: id,
        rol:  rol,
        message: message,
      });
      dispatch(startChat(message))
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
};

export default ChatContainer;
