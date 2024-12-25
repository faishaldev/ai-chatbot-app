import PropTypes from 'prop-types';
import { Send } from 'lucide-react';
import { LoaderCircle } from 'lucide-react';

export default function InputButton({
  promptInputValue,
  setPromptInputValue,
  chatResponses,
  setChatResponses,
  action,
  isLoading,
}) {
  return (
    <div
      className="bg-blue-700 p-3 rounded-lg hover:cursor-pointer active:scale-95 duration-300"
      onClick={() => {
        setChatResponses([
          ...chatResponses,
          { type: 'user', message: promptInputValue },
        ]);
        setPromptInputValue('');
        action();
      }}
    >
      {isLoading ? (
        <LoaderCircle color="white" className="animate-spin" />
      ) : (
        <Send color="white" />
      )}
    </div>
  );
}

InputButton.propTypes = {
  promptInputValue: PropTypes.string,
  setPromptInputValue: PropTypes.func,
  chatResponses: PropTypes.array,
  setChatResponses: PropTypes.func,
  action: PropTypes.func,
  isLoading: PropTypes.bool,
};
