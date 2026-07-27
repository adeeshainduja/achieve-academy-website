export default function ChatWindow() {
  return (
    <div className="h-[550px] w-[380px] rounded-2xl border bg-white shadow-2xl">
      <div className="rounded-t-2xl bg-blue-600 p-4 text-lg font-semibold text-white">
        🤖 Achieve Academy Assistant
      </div>

      <div className="flex h-[420px] items-center justify-center text-gray-500">
        Messages will appear here...
      </div>

      <div className="border-t p-4">
        Input box will come here...
      </div>
    </div>
  );
}