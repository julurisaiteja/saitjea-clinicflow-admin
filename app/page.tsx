"use client";
import { FadeIn, FilterTable, Marquee, Meter, Spark, Heatmap, useTick } from "@/lib/ui";
import { MixBars, TrendArea } from "@/components/Charts";
const KPIS=[{label:"Today appts",values:[86,88,84,90],suffix:""},{label:"Check-in rate",values:[91,89,93,90],suffix:"%"},{label:"No-show",values:[6.2,7.1,5.4,6.8],suffix:"%"},{label:"Room util",values:[82,86,79,88],suffix:"%"},{label:"Referrals",values:[19,17,21,16],suffix:""},{label:"Avg wait",values:[11,13,9,12],suffix:"m"}];
const ACTIVITY=["Dr. Patel room 3","Waitlist +2 filled","Referral RF-220","Ultrasound util 96%","SMS reminders sent"];
const ROWS=[{time:"08:30",patient:"A. Brooks",provider:"Dr. Patel",room:"3",type:"Follow-up",status:"Arrived"},{time:"08:45",patient:"C. Nguyen",provider:"Dr. Cole",room:"1",type:"New",status:"Waiting"},{time:"09:00",patient:"M. Ortiz",provider:"NP Reyes",room:"5",type:"Vaccine",status:"In room"},{time:"09:15",patient:"L. Kim",provider:"Dr. Patel",room:"3",type:"Procedure",status:"Scheduled"},{time:"09:30",patient:"J. Hale",provider:"Dr. Cole",room:"2",type:"Follow-up",status:"No-show"},{time:"09:45",patient:"S. Park",provider:"NP Reyes",room:"5",type:"Lab",status:"Arrived"},{time:"10:00",patient:"R. Diaz",provider:"Dr. Shah",room:"4",type:"Consult",status:"Waiting"},{time:"10:15",patient:"E. Vale",provider:"Dr. Patel",room:"3",type:"Follow-up",status:"Scheduled"},{time:"10:30",patient:"T. Ng",provider:"Dr. Cole",room:"1",type:"New",status:"Confirmed"},{time:"10:45",patient:"P. Fox",provider:"Dr. Shah",room:"4",type:"Procedure",status:"Scheduled"},{time:"11:00",patient:"K. West",provider:"NP Reyes",room:"5",type:"Vaccine",status:"Confirmed"},{time:"11:15",patient:"N. Bloom",provider:"Dr. Patel",room:"3",type:"Follow-up",status:"Waiting"}];
export default function Page(){return(<div className="page-stack">
<header className="page-head"><p className="kicker"><span className="live-dot"/>CLINICAL SOFT OPS</p><h1>Today&apos;s care flow</h1>
<p style={{color:"var(--muted)",maxWidth:560,margin:"0.4rem 0 0"}}>Calm soft UI — rooms, providers, referrals without alarm fatigue.</p></header>
<div className="video-film"><img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80" alt="Clinic"/><div className="cap">CARE FILM · FLOOR</div></div>
<Marquee items={ACTIVITY} className="panel"/>
<div className="kpi-grid">{KPIS.map((k,i)=><FadeIn key={k.label} delay={i*0.05} className="kpi"><Kpi {...k}/><Spark seed={i+2}/></FadeIn>)}</div>
<div className="grid-2">
<section className="panel"><h2>Morning timeline</h2><div className="timeline">{ROWS.slice(0,6).map(r=><div className="tl-item" key={r.time+r.patient}><strong>{r.time}</strong><div>{r.patient} · {r.provider} · Room {r.room}<div style={{color:"var(--muted)"}}>{r.type} · {r.status}</div></div></div>)}</div></section>
<section className="panel"><h2>Room utilization</h2><div className="rail-progress">{[["Room 1",88],["Room 2",42],["Room 3",96],["Room 4",70],["Room 5",81],["Ultrasound",96]].map(([n,v])=><div className="rail-row" key={String(n)}><span>{n}</span><Meter value={Number(v)}/><span>{v}%</span></div>)}</div></section>
</div>
<div className="grid-2"><section className="panel"><h2>Throughput</h2><TrendArea/></section><section className="panel"><h2>Visit mix</h2><MixBars/></section></div>
<section className="panel"><h2>Appointment board</h2><FilterTable rows={ROWS} columns={[{key:"time",label:"Time"},{key:"patient",label:"Patient"},{key:"provider",label:"Provider"},{key:"room",label:"Room"},{key:"type",label:"Type"},{key:"status",label:"Status"}]} searchKeys={["time","patient","provider","status"]}/></section>
</div>);}
function Kpi({label,values,suffix}:{label:string;values:number[];suffix:string}){const v=useTick(values);const display=Number.isInteger(values[0])?String(v):v.toFixed(1);return(<><b>{display}{suffix}</b><span>{label}</span></>);}
