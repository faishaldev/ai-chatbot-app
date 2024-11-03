import PropTypes from 'prop-types';
import { Send } from 'lucide-react';

export default function InputButton({
  promptInputValue,
  chatResponses,
  setChatResponses,
  action,
}) {
  return (
    <div
      className="bg-blue-700 p-3 rounded-lg hover:cursor-pointer active:scale-95 duration-300"
      onClick={() => {
        setChatResponses([
          ...chatResponses,
          { type: 'user', message: promptInputValue },
        ]);
        action();
      }}
    >
      <Send color="white" />
    </div>
  );
}

InputButton.propTypes = {
  promptInputValue: PropTypes.string,
  chatResponses: PropTypes.array,
  setChatResponses: PropTypes.func,
};
