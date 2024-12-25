import PropTypes from 'prop-types';
import ChatContent from './ChatContent';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';

export default function ChatbotInterface({
  promptInputValue,
  setPromptInputValue,
  chatResponses,
  setChatResponses,
  action,
  isLoading,
}) {
  return (
    <div className="bg-white w-full max-w-[560px] flex flex-col">
      <ChatHeader />
      <ChatContent chatResponses={chatResponses} />
      <ChatInput
        promptInputValue={promptInputValue}
        setPromptInputValue={setPromptInputValue}
        chatResponses={chatResponses}
        setChatResponses={setChatResponses}
        action={action}
        isLoading={isLoading}
      />
    </div>
  );
}

ChatbotInterface.propTypes = {
  promptInputValue: PropTypes.string,
  setPromptInputValue: PropTypes.func,
  chatResponses: PropTypes.array,
  setChatResponses: PropTypes.func,
  action: PropTypes.func,
  isLoading: PropTypes.bool,
};
