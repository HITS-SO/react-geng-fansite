import { useState } from "react";

import HistoryTabs from "@/components/history/HistoryTabs";
import HistoryTimeline from "@/components/history/HistoryTimeline";

import { historyData, type HistoryType } from "@/data/history";
import { Header } from "@/components/common/Header";
import ScrollToTop from "@/components/common/ScrollToTop";

const History = () => {
    const [selected, setSelected] = useState<HistoryType>("geng");

    return (
        <main>
            <ScrollToTop />
            <Header />
            <HistoryTabs current={selected} onChange={setSelected} />

            <HistoryTimeline data={historyData[selected]} />
        </main>
    );
};

export default History;
