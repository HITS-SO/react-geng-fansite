import { historyTabs, type HistoryType } from "@/data/history";

interface Props {
    current: HistoryType;
    onChange: (type: HistoryType) => void;
}

const HistoryTabs = ({ current, onChange }: Props) => {
    return (
        <div className="flex justify-center gap-4 py-10">
            {historyTabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => onChange(tab.id)}
                    className={`rounded-lg px-6 py-3 font-semibold transition ${
                        current === tab.id
                            ? "bg-orange-500 text-white"
                            : "bg-gray-200 hover:bg-gray-300"
                    }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};

export default HistoryTabs;
