"use client";
import React from "react";

export function StatsBar({ totals }: { totals: { total: number; quick: number; lowCap: number; recurring: number } }) {
  return (
    <div className="kpis" style={{ margin: "10px 0 16px" }}>
      <div className="kpi">Id?es: {totals.total}</div>
      <div className="kpi">Revenus rapides: {totals.quick}</div>
      <div className="kpi">Faible capex: {totals.lowCap}</div>
      <div className="kpi">R?currents: {totals.recurring}</div>
    </div>
  );
}
