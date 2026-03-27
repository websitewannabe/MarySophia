"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content:
    "Blessings and welcome. I'm here to help you learn about Mary Sophia's sacred offerings — private readings, spiritual counseling, the School of Sophia, and the Order of the Blue Rose. How can I support you today?",
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage: Message = { role: "user", content: trimmed };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const firstUserIdx = updatedMessages.findIndex(
        (m) => m.role === "user"
      );
      const messagesForApi = updatedMessages
        .slice(firstUserIdx)
        .map((m) => ({ role: m.role, content: m.content }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: messagesForApi }),
      });

      if (!res.ok) {
        throw new Error("Failed to get response");
      }

      const data = await res.json();
      const assistantText: string = data.message;

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: assistantText },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm sorry, I'm having trouble connecting right now. Please email maryrosesophia444@gmail.com or try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    e.stopPropagation();
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-[90] w-[calc(100vw-2rem)] sm:w-96 animate-slideUp">
          <div className="bg-[#002147] border border-[#D4AF37]/30 rounded-xl shadow-2xl shadow-black/50 flex flex-col h-[480px] sm:h-[520px] overflow-hidden">
            {/* Header */}
            <div className="p-4 border-b border-[#D4AF37]/20 flex items-center justify-between shrink-0">
              <div>
                <p className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] mb-0.5">
                  Sacred Guide
                </p>
                <h3 className="font-playfair text-lg text-white leading-tight">
                  Chat with Us
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/60 hover:text-white hover:bg-white/20 transition-all cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-white">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 rounded-xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-[#002147]/10 border border-[#002147]/20 text-[#002147] rounded-br-sm"
                        : "bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-gray-700 rounded-bl-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-xl rounded-bl-sm px-4 py-3">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce [animation-delay:0ms]" />
                      <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce [animation-delay:150ms]" />
                      <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce [animation-delay:300ms]" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-[#D4AF37]/20 shrink-0">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about our sacred offerings..."
                  aria-label="Type your message"
                  maxLength={500}
                  disabled={isLoading}
                  className="flex-1 px-3.5 py-2.5 bg-white/10 border border-[#D4AF37]/30 rounded-lg text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37]/60 focus:ring-1 focus:ring-[#D4AF37]/20 transition-all disabled:opacity-50"
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  aria-label="Send message"
                  className="px-3.5 py-2.5 bg-[#D4AF37] hover:bg-[#C4A030] text-white rounded-lg transition-all duration-300 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <p className="text-white/40 text-[10px] text-center mt-1.5">
                AI assistant &middot; Email{" "}
                <a
                  href="mailto:maryrosesophia444@gmail.com"
                  className="text-white/60 hover:text-[#D4AF37] transition-colors"
                >
                  maryrosesophia444@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[89]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-14 h-14 rounded-full shadow-lg shadow-black/30 flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer ${
            isOpen
              ? "bg-[#002147] border border-[#D4AF37]/30 text-white/60 hover:text-white"
              : "bg-[#D4AF37] hover:bg-[#C4A030] text-white"
          }`}
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          {isOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <MessageCircle className="h-5 w-5" />
          )}
        </button>
      </div>
    </>
  );
}
