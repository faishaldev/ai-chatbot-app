export default function InputText({
  promptInputValue,
  setPromptInputValue,
  chatResponses,
  setChatResponses,
}) {
  return (
    <input
      value={promptInputValue}
      onChange={(event) => setPromptInputValue(event.target.value)}
      onKeyUp={(event) => {
        if (event?.keyCode === 13) {
          setChatResponses([...chatResponses, promptInputValue]);
        }
      }}
      className="border p-3 w-full focus:outline-none rounded-lg"
    />
  );
}
