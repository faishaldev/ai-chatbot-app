import PropTypes from 'prop-types';

export default function InputText({
  promptInputValue,
  setPromptInputValue,
  chatResponses,
  setChatResponses,
  action,
}) {
  return (
    <input
      value={promptInputValue}
      onChange={(event) => setPromptInputValue(event.target.value)}
      onKeyUp={(event) => {
        if (event?.keyCode === 13) {
          setChatResponses([
            ...chatResponses,
            { type: 'user', message: promptInputValue },
          ]);
          setPromptInputValue('');
          action();
        }
      }}
      className="border p-3 w-full focus:outline-none rounded-lg"
    />
  );
}

InputText.propTypes = {
  promptInputValue: PropTypes.string,
  setPromptInputValue: PropTypes.func,
  chatResponses: PropTypes.array,
  setChatResponses: PropTypes.func,
  action: PropTypes.func,
};
