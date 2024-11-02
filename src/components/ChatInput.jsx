import InputText from './InputText';
import InputButton from './InputButton';

export default function ChatInput({
  promptInputValue,
  setPromptInputValue,
  chatResponses,
  setChatResponses,
}) {
  return (
    <div className="p-5 flex gap-5 items-center">
      <InputText
        promptInputValue={promptInputValue}
        setPromptInputValue={setPromptInputValue}
        chatResponses={chatResponses}
        setChatResponses={setChatResponses}
      />
      <InputButton />
    </div>
  );
}
