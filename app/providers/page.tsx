"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">ClinicFlow</p>
        <h1>Providers</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <section className="panel"><h2>Module board</h2>
<FilterTable rows={[{"name":"Dr. Patel","specialty":"Primary","load":"92%","rooms":"3","status":"Busy"},{"name":"Dr. Cole","specialty":"Primary","load":"78%","rooms":"1-2","status":"Active"},{"name":"NP Reyes","specialty":"Nursing","load":"81%","rooms":"5","status":"Active"},{"name":"Dr. Shah","specialty":"Specialty","load":"70%","rooms":"4","status":"Active"}]} columns={[{"key":"name","label":"Provider"},{"key":"specialty","label":"Specialty"},{"key":"load","label":"Load"},{"key":"rooms","label":"Rooms"},{"key":"status","label":"Status"}]} searchKeys={["name","specialty","load","rooms","status"]} />
</section>
    </div>
  );
}
