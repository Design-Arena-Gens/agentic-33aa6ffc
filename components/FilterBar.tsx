"use client";
import React from "react";

type Props = {
  query: string;
  onQueryChange: (v: string) => void;
  sector: string | "";
  onSectorChange: (v: string | "") => void;
  sectors: string[];
  tags: string[];
  selectedTags: string[];
  onToggleTag: (t: string) => void;
  capital: "low" | "medium" | "high" | "";
  onCapitalChange: (v: "low" | "medium" | "high" | "") => void;
  timeline: "immediate" | "1-3m" | "3-6m" | "";
  onTimelineChange: (v: "immediate" | "1-3m" | "3-6m" | "") => void;
  model: "service" | "product" | "platform" | "subscription" | "marketplace" | "";
  onModelChange: (v: "service" | "product" | "platform" | "subscription" | "marketplace" | "") => void;
};

export function FilterBar(props: Props) {
  const {
    query,
    onQueryChange,
    sector,
    onSectorChange,
    sectors,
    tags,
    selectedTags,
    onToggleTag,
    capital,
    onCapitalChange,
    timeline,
    onTimelineChange,
    model,
    onModelChange
  } = props;

  return (
    <div className="filters">
      <div className="field sm-6">
        <input
          className="input"
          placeholder="Recherche: ex. 'tourisme', 'bien-?tre', 'b2b'..."
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
        />
      </div>
      <div className="field sm-3">
        <select className="select" value={sector} onChange={(e) => onSectorChange(e.target.value)}>
          <option value="">Tous secteurs</option>
          {sectors.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <div className="field sm-3">
        <select className="select" value={model} onChange={(e) => onModelChange(e.target.value as any)}>
          <option value="">Tous mod?les</option>
          <option value="service">Service</option>
          <option value="product">Produit</option>
          <option value="platform">Plateforme</option>
          <option value="subscription">Abonnement</option>
          <option value="marketplace">Marketplace</option>
        </select>
      </div>
      <div className="field sm-3">
        <select className="select" value={capital} onChange={(e) => onCapitalChange(e.target.value as any)}>
          <option value="">Capital: tous</option>
          <option value="low">Faible</option>
          <option value="medium">Moyen</option>
          <option value="high">?lev?</option>
        </select>
      </div>
      <div className="field sm-3">
        <select className="select" value={timeline} onChange={(e) => onTimelineChange(e.target.value as any)}>
          <option value="">D?lai revenus</option>
          <option value="immediate">Imm?dia</option>
          <option value="1-3m">1-3 mois</option>
          <option value="3-6m">3-6 mois</option>
        </select>
      </div>
      <div className="field sm-12">
        <div className="small" style={{ marginBottom: 6 }}>Tags rapides</div>
        <div className="checkbox-group">
          {tags.map((t) => (
            <button
              key={t}
              type="button"
              className="checkbox"
              onClick={() => onToggleTag(t)}
              aria-pressed={selectedTags.includes(t)}
              style={{
                borderColor: selectedTags.includes(t) ? "#38d39f" : undefined,
                color: selectedTags.includes(t) ? "#e9fff5" : undefined,
                background: selectedTags.includes(t) ? "#103522" : undefined
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
