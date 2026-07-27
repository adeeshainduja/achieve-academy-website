interface Props {
  onSelect: (text: string) => void;
}

const suggestions = [
  "What grades do you offer?",
  "What subjects are available?",
  "How can I apply?",
  "What are the class fees?",
];

export default function QuickSuggestions({
  onSelect,
}: Props) {

  return (
    <div className="flex flex-wrap gap-2 border-b bg-white p-3">

      {suggestions.map((item) => (
        <button
          key={item}
          onClick={() => onSelect(item)}
          className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-700 transition hover:bg-blue-200"
        >
          {item}
        </button>
      ))}

    </div>
  );
}