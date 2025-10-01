interface ScoreBadgeProps {
  score: number;
  className?: string;
}

const ScoreBadge = ({ score, className = "" }: ScoreBadgeProps) => {
  const getScoreConfig = (score: number) => {
    if (score >= 800) {
      return {
        label: "Excelente",
        colorClass: "bg-score-excellent text-white",
        textClass: "text-score-excellent"
      };
    } else if (score >= 650) {
      return {
        label: "Bom",
        colorClass: "bg-score-good text-white",
        textClass: "text-score-good"
      };
    } else if (score >= 500) {
      return {
        label: "Regular",
        colorClass: "bg-score-fair text-white",
        textClass: "text-score-fair"
      };
    } else {
      return {
        label: "Baixo",
        colorClass: "bg-score-poor text-white",
        textClass: "text-score-poor"
      };
    }
  };

  const config = getScoreConfig(score);

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${config.colorClass}`}>
        {config.label}
      </span>
      <span className={`font-bold ${config.textClass}`}>
        {score}
      </span>
    </div>
  );
};

export default ScoreBadge;