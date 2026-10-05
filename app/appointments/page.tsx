"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">ClinicFlow</p>
        <h1>Appointments</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <section className="panel"><h2>Module board</h2>
<FilterTable rows={[{"time":"08:30","patient":"A. Brooks","provider":"Dr. Patel","room":"3","status":"Arrived"},{"time":"09:00","patient":"M. Ortiz","provider":"NP Reyes","room":"5","status":"In room"},{"time":"09:30","patient":"J. Hale","provider":"Dr. Cole","room":"2","status":"No-show"},{"time":"10:00","patient":"R. Diaz","provider":"Dr. Shah","room":"4","status":"Waiting"},{"time":"10:30","patient":"T. Ng","provider":"Dr. Cole","room":"1","status":"Confirmed"},{"time":"11:15","patient":"N. Bloom","provider":"Dr. Patel","room":"3","status":"Waiting"}]} columns={[{"key":"time","label":"Time"},{"key":"patient","label":"Patient"},{"key":"provider","label":"Provider"},{"key":"room","label":"Room"},{"key":"status","label":"Status"}]} searchKeys={["time","patient","provider","room","status"]} />
</section>
    </div>
  );
}
