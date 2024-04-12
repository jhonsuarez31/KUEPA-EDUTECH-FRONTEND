import { Dispatch } from "@reduxjs/toolkit";
import { addMessage, setMessages } from "./chatSlice";
import { ConversationController } from "../../controllers/conversation/conversation.controller";

export const startChat = (message:string) => {
    return async (dispatch: Dispatch, getSate) => {
        const {id, rol, fullName} = getSate().auth
        dispatch((addMessage({id,message, rol,fullName})));
    
    };
};



export const startLodingChat = () => {
    return async (dispatch: Dispatch, getSate) => 
        {
         const conversationControler = new ConversationController()
         const coversation= await conversationControler.getMessages('17f07a30-97da-4629-a174-408ee0893ed8')
          
         const messages = coversation?.data.messages.map(message => {
            console.log('mesage', message)
            return {
                    message: message.text,
                    rol: message.creator.rol.rol,
                    createdBy: message.creator.firstName + message.creator.lastName
            }
         })
          dispatch(setMessages(messages));
    
    };
};


