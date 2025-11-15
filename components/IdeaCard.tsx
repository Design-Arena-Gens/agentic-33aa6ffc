"use client";
import React from "react";
import type { Idea } from "../lib/ideas";

export function IdeaCard({ idea }: { idea: Idea }) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
        <div>
          <div className="sector">{idea.sector} ? {labelCapital(idea.capital)} ? {labelTimeline(idea.revenueTimeline)}</div>
          <h3 style={{ margin: "6px 0 8px" }}>{idea.title}</h3>
        </div>
        <div className="badge" style={{ alignSelf: "flex-start" }}>{labelModel(idea.model)}</div>
      </div>
      <p style={{ color: "#c7cffb", marginTop: 0 }}>{idea.description}</p>
      <div>
        {idea.tags.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
      {idea.steps?.length ? (
        <div style={{ marginTop: 10 }}>
          <div className="small">?tapes rapides</div>
          <ol style={{ margin: 0, paddingLeft: 18, color: "#d9e1ff" }}>
            {idea.steps.slice(0, 4).map((s, idx) => (
              <li key={idx}>{s}</li>
            ))}
          </ol>
        </div>
      ) : null}
      <div className="actions" style={{ marginTop: 12 }}>
        {idea.pricing?.length ? (
          <div className="kpi">Prix: {idea.pricing.join(" ? ")}</div>
        ) : null}
        {idea.notes ? <div className="kpi">Note: {idea.notes}</div> : null}
      </div>
    </div>
  );
}

function labelCapital(c: Idea["capital"]) {
  return c === "low" ? "faible capex" : c === "medium" ? "capex moyen" : "capex ?lev?";
}
function labelTimeline(t: Idea["revenueTimeline"]) {
  return t === "immediate" ? "revenus rapides" : t === "1-3m" ? "1-3 mois" : "3-6 mois";
}
function labelModel(m: Idea["model"]) {
  switch (m) {
    case "service":
      return "Service";
    case "product":
      return "Produit";
    case "platform":
      return "Plateforme";
    case "subscription":
      return "Abonnement";
    case "marketplace":
      return "Marketplace";
  }
}
