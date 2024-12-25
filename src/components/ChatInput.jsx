import PropTypes from 'prop-types';
import InputText from './InputText';
import InputButton from './InputButton';

export default function ChatInput({
  promptInputValue,
  setPromptInputValue,
  chatResponses,
  setChatResponses,
  action,
  isLoading,
}) {
  return (
    <div className="p-5 flex gap-5 items-center">
      <InputText
        promptInputValue={promptInputValue}
        setPromptInputValue={setPromptInputValue}
        chatResponses={chatResponses}
        setChatResponses={setChatResponses}
        action={action}
      />
      <InputButton
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

ChatInput.propTypes = {
  promptInputValue: PropTypes.string,
  setPromptInputValue: PropTypes.func,
  chatResponses: PropTypes.array,
  setChatResponses: PropTypes.func,
  action: PropTypes.func,
  isLoading: PropTypes.bool,
};
