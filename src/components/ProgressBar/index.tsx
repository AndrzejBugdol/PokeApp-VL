import { Label, Body, Progress, Score } from './styles';

type ProgressBarProps = {
  type: string;
  score: number;
  maxScore: number;
  color: string;
};

const ProgressBar = ({ type, score, maxScore, color }: ProgressBarProps) => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center' }}>
      <Label>{type}</Label>
      <Body>
        <Progress
          score={(score / maxScore) * 100}
          color={color}
        />
      </Body>
      <Score>
        {score}/{maxScore}
      </Score>
    </div>
  );
};

export default ProgressBar;
