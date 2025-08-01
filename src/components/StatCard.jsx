import React from "react";
import { getThemeByTitle } from "../utils/themeUtils";
import { tokens } from "../styles/tokens";
import "./StatCard.css";

const { colors, typography } = tokens;

const StatCard = ({
  title,
  icon,
  visitPercent,
  hospitalizationPercent,
  visitChange,
  admitChange,
  visitDate,
  admitDate,
}) => {
  const { color: statColor, background: cardBackground, icon: defaultIcon } = getThemeByTitle(title);
  const iconSrc = icon || defaultIcon;

  const getChangeArrow = (change) => {
    const num = parseFloat(change);
    if (isNaN(num)) return null;
  
    const epsilon = 0.001; // tolerance for what counts as no change
    const isNoChange = Math.abs(num) < epsilon;
  
    if (isNoChange) {
      return <span style={{ color: colors.gray600, marginRight: 4 }}>→</span>;
    }
  
    const isUp = num > 0;
    const arrow = isUp ? "▲" : "▼";
    const color = isUp ? colors.redPrimary : colors.greenMuted;
  
    return <span style={{ color, marginRight: 4 }}>{arrow}</span>;
  };
  

  return (
    <div className="stat-card" style={{ backgroundColor: cardBackground }}>
      <div className="stat-card-header">
        {iconSrc && <img className="stat-card-icon" src={iconSrc} alt={`${title} icon`} />}
        <div className="stat-card-title">{title}</div>
      </div>

      <div className="stat-block">
        <div className="stat-percent" style={{ color: statColor }}>{visitPercent}</div>
        <div className="stat-detail">
          <div className="stat-label" style={{ color: statColor }}>of Visits</div>
          <div className="stat-trend-row">
          {visitChange !== null && (
  <>
    {getChangeArrow(visitChange)}
    {Math.abs(visitChange)}% · <span className="stat-date">{visitDate}</span>
  </>
)}  </div>
        </div>
      </div>

      <hr className="stat-divider" />

      <div className="stat-block">
        <div className="stat-percent" style={{ color: statColor }}>{hospitalizationPercent}</div>
        <div className="stat-detail">
          <div className="stat-label" style={{ color: statColor }}>of Hospitalizations</div>
          <div className="stat-trend-row">
          {admitChange !== null && (
  <>
    {getChangeArrow(admitChange)}
    {Math.abs(admitChange)}% · <span className="stat-date">{visitDate}</span>
  </>
)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
