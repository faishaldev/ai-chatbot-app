import { useState } from 'react';
import ChatbotInterface from './components/ChatbotInterface';

function App() {
  const [promptInputValue, setPromptInputValue] = useState('');
  const [chatResponses, setChatResponses] = useState([]);

  return (
    <div className="w-screen h-screen bg-gray-200 flex justify-center">
      <ChatbotInterface
        promptInputValue={promptInputValue}
        setPromptInputValue={setPromptInputValue}
        chatResponses={chatResponses}
        setChatResponses={setChatResponses}
      />
    </div>
  );
}

export default App;
