'use client';

import { useState } from 'react';
import { Bot } from 'lucide-react';  // Importing AI icon from lucide-react

type Message = {
  text: string;
  sender: 'user' | 'bot';
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // When the chat opens, send a default message
      setMessages([{ text: 'Hi! How can I help you today?', sender: 'bot' }]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Ensuring the sender is correctly typed
    const newMessages: Message[] = [...messages, { text: input, sender: 'user' }];
    setMessages(newMessages);
    setInput('');

    // Call OpenAI API to get the bot response
    const botResponse = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: input }),
    });

    const data = await botResponse.json();
    
    // Ensure the bot's response is typed correctly
    setMessages([...newMessages, { text: data.reply, sender: 'bot' }]);
  };

  return (
    <div className={`fixed bottom-4 right-4 z-50 transition-all ${isOpen ? 'w-96' : 'w-16'}`}>
      {/* Chat button that toggles the chat window */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="w-16 h-16 bg-indigo-600 text-white rounded-full flex justify-center items-center shadow-lg transition-all duration-300"
        >
          <Bot className="h-6 w-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-indigo-100 w-96 h-96 rounded-lg shadow-lg flex flex-col overflow-hidden">
          <div className="flex justify-between items-center p-4 bg-indigo-600 text-white">
            <h2 className="text-sm font-medium">Chat with Us</h2>
            <button 
              onClick={toggleChat} 
              className="text-white text-xl font-semibold transition-transform duration-300 hover:rotate-45"
            >
              X
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`p-3 rounded-lg max-w-xs ${message.sender === 'user' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-800'}`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t bg-gray-50">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 text-sm"
              placeholder="Type your message..."
            />
            <button
              onClick={handleSendMessage}
              className="mt-2 w-full bg-indigo-600 text-white p-2 rounded-lg text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
