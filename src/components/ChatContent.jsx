import ChatItem from './ChatItem';

export default function ChatContent({ chatResponses }) {
  return (
    <div className="flex flex-col overflow-y-scroll gap-5 w-full h-[640px] bg-white border p-5">
      {chatResponses?.map((chatResponse, index) => (
        <ChatItem message={chatResponse} key={index} />
      ))}
    </div>
  );
}
