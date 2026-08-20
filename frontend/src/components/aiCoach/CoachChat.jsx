import { Send, Bot } from "lucide-react";

function CoachChat() {
const quickQuestions = [
"Build Muscle",
"Fat Loss",
"Recovery",
"Endurance",
];

const messages = [
{
type: "user",
text: "How can I improve endurance?",
},
{
type: "ai",
text:
"Add two Zone 2 cardio sessions weekly and gradually increase duration.",
},
];

return ( <div className="h-full rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm flex flex-col">
{/* Header */} <div className="mb-4 flex items-center justify-between"> <h3 className="font-semibold text-slate-900">
Ask AI Coach </h3>


    <div className="flex items-center gap-1 text-xs text-slate-500">
      <Bot size={14} />
      AI Active
    </div>
  </div>

  {/* Quick Actions */}
  <div className="mb-4 flex flex-wrap gap-2">
    {quickQuestions.map((item) => (
      <button
        key={item}
        className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100 transition"
      >
        {item}
      </button>
    ))}
  </div>

  {/* Chat Area */}
  <div className="flex-1 space-y-3 overflow-y-auto rounded-2xl bg-slate-50/50 p-3">
    {messages.map((msg, idx) => (
      <div
        key={idx}
        className={`flex ${
          msg.type === "user"
            ? "justify-end"
            : "justify-start"
        }`}
      >
        <div
          className={`max-w-[90%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
            msg.type === "user"
              ? "bg-blue-600 text-white"
              : "bg-white border border-slate-200 text-slate-700"
          }`}
        >
          {msg.text}
        </div>
      </div>
    ))}
  </div>

  {/* Input */}
  <div className="mt-4 flex gap-2">
    <input
      type="text"
      placeholder="Ask your coach..."
      className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm outline-none focus:border-blue-300"
    />

    <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition">
      <Send size={16} />
    </button>
  </div>
</div>


);
}

export default CoachChat;
