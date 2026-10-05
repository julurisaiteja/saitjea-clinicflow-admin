"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">ClinicFlow</p>
        <h1>Referrals</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <section className="panel"><h2>Module board</h2>
<FilterTable rows={[{"id":"RF-220","specialty":"Cardiology","age":"4d","priority":"High","status":"Backlog"},{"id":"RF-221","specialty":"Ortho","age":"1d","priority":"Med","status":"Scheduled"},{"id":"RF-222","specialty":"Derm","age":"2d","priority":"Low","status":"Open"},{"id":"RF-223","specialty":"Cardiology","age":"5d","priority":"High","status":"Backlog"}]} columns={[{"key":"id","label":"Referral"},{"key":"specialty","label":"Specialty"},{"key":"age","label":"Age"},{"key":"priority","label":"Priority"},{"key":"status","label":"Status"}]} searchKeys={["id","specialty","age","priority","status"]} />
</section>
    </div>
  );
}
