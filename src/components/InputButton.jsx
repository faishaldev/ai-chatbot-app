import { Send } from 'lucide-react';

export default function InputButton() {
  return (
    <div className="bg-blue-700 p-3 rounded-lg hover:cursor-pointer active:scale-95 duration-300">
      <Send color="white" />
    </div>
  );
}
