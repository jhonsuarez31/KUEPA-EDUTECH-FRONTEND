import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ChatState {
  messages: {
    message: string;
    author: {
      id: number;
      rol: string;
      fullName: string;
    };
  }[];
}

const initialState: ChatState = {
  messages: [],
};

const ChatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage(state, action: PayloadAction<{ id: number; message: string; rol: string; fullName: string }>) {
      const { id, message, rol, fullName } = action.payload;
      state.messages = [
        ...state.messages,
        {
          message,
          author: { id, rol, fullName },
        },
      ];
    },
    setMessages(state, action){
      console.log(action)
      state.messages = action.payload
    }
  },
});

export const { addMessage,setMessages } = ChatSlice.actions;
export default ChatSlice.reducer;
