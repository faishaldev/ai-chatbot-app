import PropTypes from 'prop-types';
import ChatItem from './ChatItem';

export default function ChatContent({ chatResponses }) {
  return (
    <div className="flex flex-col overflow-y-scroll gap-5 w-full h-[640px] bg-white border p-5">
      {chatResponses?.map((chatResponse, index) =>
        chatResponse.type === 'user' ? (
          <div className="w-full flex justify-end">
            <ChatItem message={chatResponse.message} key={index} />
          </div>
        ) : (
          <div className="w-full flex justify-end">
            <ChatItem message={chatResponse.message} key={index} />
          </div>
        ),
      )}
    </div>
  );
}

ChatContent.propTypes = {
  chatResponses: PropTypes.array,
};
