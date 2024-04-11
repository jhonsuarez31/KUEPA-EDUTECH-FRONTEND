import React, { FC, KeyboardEvent } from 'react';

interface Props {
  message: string;
  onChangeMessage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSendMessage: () => void;
  conversation: { message: string; createdBy: string; rol: string }[];
}

const ChatView: FC<Props> = ({
  message,
  onChangeMessage,
  onSendMessage,
  conversation,
}) => {
  console.log('conversation', conversation);

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSendMessage();
    }
  };

  return (
    <section>
      <div className="container container-lg pt-16 w-full flex flex-col items-center min-h-screen">
        <div className="w-full flex-1 bg-gray-200 p-4 overflow-y-auto"> {/* Mensajes */}
          {conversation.map(({ message, createdBy, rol }, index) => (
            <div className={`mb-4 ${index !== 0 ? 'border-t-2 border-gray-300 pt-4' : ''}`} key={index}>
              {rol === 'MODERADOR' && ( 
                <span className="font-bold text-blue-600">{createdBy} (MODERADOR)</span>
              )}
              {rol !== 'MODERADOR' && ( 
                <span className="font-bold">{createdBy}</span>
              )}
              <div className={`rounded-lg p-3 ${rol === 'MODERADOR' ? 'bg-blue-200 self-end' : 'bg-green-200'}`}>
                <span className="text-sm">{message}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex items-center bg-gray-300 p-4"> {/* Input de mensaje */}
          <input
            className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
            placeholder="Type your message"
            value={message}
            onChange={onChangeMessage}
            onKeyPress={handleKeyPress}
            required
          />
          <button
            className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2"
            onClick={onSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChatView;
