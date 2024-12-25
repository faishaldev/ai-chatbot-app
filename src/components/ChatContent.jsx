import PropTypes from 'prop-types';
import ChatItem from './ChatItem';
import { useEffect, useRef } from 'react';

export default function ChatContent({ chatResponses }) {
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current !== null)
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
  }, [chatResponses]);

  return (
    <div
      ref={chatContainerRef}
      className="flex flex-col overflow-y-scroll gap-5 w-full h-[640px] bg-white border p-5"
    >
      {chatResponses?.map((chatResponse, index) =>
        chatResponse.type === 'user' ? (
          <div className="w-full flex justify-end">
            <ChatItem message={chatResponse.message} key={index} />
          </div>
        ) : (
          <div className="w-full flex justify-start">
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
