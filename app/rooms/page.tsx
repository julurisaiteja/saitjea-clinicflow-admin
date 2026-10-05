"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">ClinicFlow</p>
        <h1>Rooms</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <div className="rail-progress" style={{marginBottom:12}}>
          {[["Room 1",88],["Room 2",42],["Room 3",96],["Room 4",70],["Room 5",81],["Ultrasound",96]].map(([n,v])=><div className="rail-row" key={String(n)}><span>{n}</span><Meter value={Number(v)}/><span>{v}%</span></div>)}
        </div>
    </div>
  );
}
