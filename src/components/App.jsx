import { useEffect, useState } from 'react';
import FeedbackOptions from '../components/FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statisticts';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(good + neutral + bad);
  }, [good, neutral, bad]);

  const handleIncrement = feedback => {
    switch (feedback) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const positivePercentage = Math.round((good / total) * 100) || 0;

  return (
    <>
      <FeedbackOptions
        good={good}
        neutral={neutral}
        bad={bad}
        handleIncrement={handleIncrement}
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}
      />
    </>
  );
};

export default App;
