"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Copilot, LiveClock, CommandPalette, ToastStack } from "@/lib/ui";

const NAV = [["/","Today"],["/appointments","Appointments"],["/providers","Providers"],["/rooms","Rooms"],["/referrals","Referrals"],["/alerts","Alerts"],["/analytics","Analytics"],["/exports","Exports"],["/settings","Settings"]];
const LINKS = NAV.map(([href, label]) => ({ href, label: String(label) }));
const TOASTS = ["Signal acknowledged", "Board refreshed", "Export queued", "Copilot standing by"];
const PROMPTS = [{"q":"Room util spike","a":"Ultrasound at 96%. Shift two routine scans to Room C; keep urgent slots. Notify front desk scripts."},{"q":"No-show cluster","a":"Morning no-shows 14%. Send 90-minute SMS for remaining; open waitlist for Dr. Patel."},{"q":"Referral backlog","a":"19 cardiology referrals >3 days. Batch triage at 15:00; auto-book priority flags."}];

export function Shell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return (
    <div className="shell ">
      <header className="topbar">
        <div>
          <div className="brand">Clinic<span>Flow</span></div>
          <p style={{ margin: "0.2rem 0 0", fontSize: 11, color: "var(--muted)" }}>Clinical Soft UI — care ops calm · <LiveClock /></p>
        </div>
        <nav className="nav" aria-label="Primary">
          {NAV.map(([href, label]) => (
            <Link key={href} href={href} className={path === href ? "active" : ""}>{label}</Link>
          ))}
        </nav>
      </header>
      <main className="main">{children}</main>
      <CommandPalette links={LINKS} />
      <ToastStack items={TOASTS} />
      <Copilot brand="ClinicFlow" prompts={PROMPTS} />
    </div>
  );
}
