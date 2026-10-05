"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">ClinicFlow</p>
        <h1>Alerts</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <section className="panel"><div className="alert-list"><div className="alert"><span className="badge">CRIT</span> Ultrasound util 96% — shift routine scans</div><div className="alert"><span className="badge">WARN</span> Morning no-shows 14%</div><div className="alert"><span className="badge">WARN</span> 19 cardiology referrals &gt;3 days</div><div className="alert"><span className="badge">INFO</span> Waitlist filled +2</div></div></section><section className="panel"><h2>Signal density</h2><Heatmap seed={9}/></section>
    </div>
  );
}
