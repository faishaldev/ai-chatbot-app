export default function ChatItem({ message }) {
  return (
    <div className="p-5 bg-gray-200 rounded-xl w-fit">
      <p>{message}</p>
    </div>
  );
}
