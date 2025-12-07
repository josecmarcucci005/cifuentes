import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { Chat, GenerateContentResponse } from "@google/genai";
import { createChatSession } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: '¡Hola! Soy el asistente virtual de Cifuentes. ¿En qué puedo ayudarte hoy? Pregúntame sobre nuestros servicios de plomería, electricidad, pintura, etc.',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatSessionRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize Chat Session only once when component mounts (or when opened first time)
  useEffect(() => {
    if (isOpen && !chatSessionRef.current) {
      chatSessionRef.current = createChatSession();
    }
  }, [isOpen]);

  // Scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || !chatSessionRef.current) return;

    const userText = inputValue.trim();
    setInputValue('');
    
    // Add user message
    const newUserMsg: ChatMessage = { role: 'user', text: userText, timestamp: new Date() };
    setMessages(prev => [...prev, newUserMsg]);
    setIsLoading(true);

    try {
      const result = await chatSessionRef.current.sendMessageStream({ message: userText });
      
      let fullResponse = "";
      // Create a placeholder for the bot response
      setMessages(prev => [...prev, { role: 'model', text: '', timestamp: new Date() }]);
      
      for await (const chunk of result) {
         const c = chunk as GenerateContentResponse;
         const chunkText = c.text || "";
         fullResponse += chunkText;
         
         // Update the last message with the accumulated response
         setMessages(prev => {
             const newArr = [...prev];
             newArr[newArr.length - 1] = { 
                 role: 'model', 
                 text: fullResponse, 
                 timestamp: new Date() 
             };
             return newArr;
         });
      }
      
    } catch (error) {
      console.error("Error communicating with Gemini:", error);
      setMessages(prev => [...prev, { role: 'model', text: 'Lo siento, tuve un problema al procesar tu solicitud. Por favor intenta de nuevo más tarde.', timestamp: new Date() }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
          isOpen ? 'bg-red-500 rotate-90' : 'bg-orange-500'
        } text-white`}
        aria-label="Abrir chat de asistencia"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col border border-gray-200 overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-slate-900 p-4 flex items-center gap-3">
            <div className="bg-white/10 p-2 rounded-full">
              <Bot className="h-6 w-6 text-orange-400" />
            </div>
            <div>
              <h3 className="text-white font-bold">Asistente Cifuentes</h3>
              <p className="text-slate-400 text-xs flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
                En línea (IA)
              </p>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 scrollbar-hide">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user'
                      ? 'bg-orange-500 text-white rounded-br-none'
                      : 'bg-white text-gray-700 border border-gray-200 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start w-full">
                 <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-gray-200 shadow-sm">
                    <Loader2 className="h-5 w-5 animate-spin text-orange-500" />
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Escribe tu pregunta..."
              className="flex-1 bg-gray-100 text-gray-900 placeholder-gray-500 border-0 rounded-full px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all text-sm"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="bg-slate-900 text-white p-2 rounded-full hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBot;
