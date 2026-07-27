interface Props {
  onSelect: (text: string) => void;
}

const suggestions = [
  {
    label: "📚 Courses",
    value: "What subjects are available?",
  },
  {
    label: "📝 Admissions",
    value: "How can I apply?",
  },
  {
    label: "💰 Fees",
    value: "What are the class fees?",
  },
  {
    label: "📞 Contact",
    value: "How can I contact the academy?",
  },
];

export default function QuickSuggestions({
  onSelect,
}: Props) {
  return (
    <div className="border-b border-green-100 bg-white px-3 py-3">
      <div className="flex flex-wrap gap-2">

        {suggestions.map((item) => (
          <button
            key={item.label}
            onClick={() => onSelect(item.value)}
            className="rounded-full border border-green-200 bg-green-50 px-3 py-2 text-xs font-medium text-green-700 transition-all duration-200 hover:scale-105 hover:border-green-400 hover:bg-green-100 active:scale-95"
          >
            {item.label}
          </button>
        ))}

      </div>
    </div>
  );
}