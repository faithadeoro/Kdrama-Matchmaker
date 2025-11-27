import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChatBubble } from './ChatBubble';
import { MoodButton } from './MoodButton';
import { DramaCard } from './DramaCard';
import { getRecommendations, KDrama } from '@/data/kdramas';
import { RefreshCw, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface Question {
  id: string;
  text: string;
  options: Array<{
    emoji: string;
    label: string;
    description: string;
    value: string;
  }>;
}

const questions: Question[] = [
  {
    id: '1',
    text: "Hey there, K-drama lover! 😊 What's your mood tonight?",
    options: [
      { emoji: '😭', label: 'Cry', description: 'Ready for tears', value: 'cry' },
      { emoji: '😂', label: 'Laugh', description: 'Need some giggles', value: 'laugh' },
      { emoji: '💕', label: 'Romance', description: 'Feeling the love', value: 'romance' }
    ]
  },
  {
    id: '2',
    text: "Nice choice! ✨ What kind of vibe are you going for?",
    options: [
      { emoji: '😱', label: 'Thrill Me', description: 'Edge of my seat', value: 'thrill' },
      { emoji: '🌌', label: 'Escape Reality', description: 'Fantasy worlds', value: 'escape' },
      { emoji: '💪', label: 'Inspire Me', description: 'Motivational stories', value: 'inspire' }
    ]
  }
];

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [recommendations, setRecommendations] = useState<KDrama[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    // Start with welcome message
    const welcomeMessage: Message = {
      id: '0',
      text: questions[0].text,
      isUser: false,
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
  }, []);

  const addMessage = (text: string, isUser: boolean) => {
    const message: Message = {
      id: Date.now().toString(),
      text,
      isUser,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, message]);
  };

  const simulateTyping = (callback: () => void, delay = 1500) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      callback();
    }, delay);
  };

  const handleAnswer = (answer: string, label: string) => {
    // Add user's answer
    addMessage(label, true);
    
    const newAnswers = [...userAnswers, answer];
    setUserAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      // Move to next question
      simulateTyping(() => {
        addMessage(questions[currentQuestion + 1].text, false);
        setCurrentQuestion(prev => prev + 1);
      });
    } else {
      // Generate recommendations
      simulateTyping(() => {
        const recs = getRecommendations(newAnswers);
        setRecommendations(recs);
        
        const recText = `Perfect! Based on your vibes, here are your top 3 K-drama matches! 🎆📺`;
        addMessage(recText, false);
        
        setTimeout(() => {
          setShowRecommendations(true);
          setTimeout(() => {
            addMessage("Which one are you picking? 👀✨", false);
          }, 1000);
        }, 500);
      }, 2000);
    }
  };

  const resetChat = () => {
    setMessages([]);
    setCurrentQuestion(0);
    setUserAnswers([]);
    setRecommendations([]);
    setShowRecommendations(false);
    setIsTyping(false);
    
    // Restart with welcome message
    setTimeout(() => {
      const welcomeMessage: Message = {
        id: '0',
        text: questions[0].text,
        isUser: false,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }, 300);
  };

  const currentQuestionData = questions[currentQuestion];
  const showOptions = currentQuestion < questions.length && !showRecommendations;

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <div className="flex-shrink-0 bg-primary text-primary-foreground p-4 shadow-lg">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-baloo font-bold text-lg">K-Drama Matchmaker</h1>
              <p className="text-sm opacity-90 font-nunito">Your personal drama curator</p>
            </div>
          </div>
          
          {showRecommendations && (
            <Button
              onClick={resetChat}
              variant="secondary"
              size="sm"
              className="bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground border-0"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              New Match
            </Button>
          )}
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-2xl mx-auto space-y-4">
          {messages.map((message) => (
            <ChatBubble
              key={message.id}
              message={message.text}
              isUser={message.isUser}
            />
          ))}
          
          {isTyping && (
            <ChatBubble
              message=""
              isUser={false}
              isTyping={true}
            />
          )}
          
          {/* Recommendations */}
          {showRecommendations && recommendations.length > 0 && (
            <div className="space-y-4 mt-6">
              {recommendations.map((drama, index) => (
                <div
                  key={drama.id}
                  className="animate-bounce-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <DramaCard
                    drama={drama}
                  />
                </div>
              ))}
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Options */}
      {showOptions && !isTyping && (
        <div className="flex-shrink-0 p-4 bg-muted/30">
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {currentQuestionData.options.map((option) => (
                <MoodButton
                  key={option.value}
                  emoji={option.emoji}
                  label={option.label}
                  description={option.description}
                  onClick={() => handleAnswer(option.value, option.label)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
