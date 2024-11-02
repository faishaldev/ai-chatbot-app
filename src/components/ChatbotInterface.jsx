import ChatContent from './ChatContent';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';

export default function ChatbotInterface({
  promptInputValue,
  setPromptInputValue,
  chatResponses,
  setChatResponses,
}) {
  return (
    <div className="bg-white w-full max-w-[560px]">
      <ChatHeader />
      <ChatContent chatResponses={chatResponses} />
      <ChatInput
        promptInputValue={promptInputValue}
        setPromptInputValue={setPromptInputValue}
        chatResponses={chatResponses}
        setChatResponses={setChatResponses}
      />
    </div>
  );
}
