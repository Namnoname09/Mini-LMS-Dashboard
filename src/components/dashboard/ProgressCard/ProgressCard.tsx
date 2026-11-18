interface ProgressCardProps {
  progress: number; // 0-100
}

export default function ProgressCard({ progress }: ProgressCardProps) {
  return (
    <div className="progress-card">
      <div className="progress-card__track">
        <div className="progress-card__fill" style={{ width: `${progress}%` }} />
      </div>
      <span className="progress-card__label">{progress}%</span>
    </div>
  );
}
