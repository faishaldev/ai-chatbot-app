import { GoogleGenerativeAI } from '@google/generative-ai';
import { useState } from 'react';
import ChatbotInterface from './components/ChatbotInterface';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [promptInputValue, setPromptInputValue] = useState('');
  const [chatResponses, setChatResponses] = useState([]);

  const genAI = new GoogleGenerativeAI(
    import.meta.env.VITE_GOOGLE_GEMINI_API_KEY,
  );

  const getGeminiAIResponse = async () => {
    try {
      setIsLoading(true);

      const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

      const result = await model.generateContent(promptInputValue);
      const response = result.response;
      const responseText = response.text();

      setChatResponses([
        ...chatResponses,
        { type: 'user', message: promptInputValue },
        { type: 'bot', message: responseText },
      ]);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen bg-gray-200 flex justify-center">
      <ChatbotInterface
        promptInputValue={promptInputValue}
        setPromptInputValue={setPromptInputValue}
        chatResponses={chatResponses}
        setChatResponses={setChatResponses}
        action={getGeminiAIResponse}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
