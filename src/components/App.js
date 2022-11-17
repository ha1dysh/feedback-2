import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const vote = ({ target }) => {
    const { name } = target;

    if (name === 'good') {
      setGood((state) => state + 1);
    } else if (name === 'neutral') {
      setNeutral((state) => state + 1);
    } else if (name === 'bad') {
      setBad((state) => state + 1);
    }
  };

  const total = good + neutral + bad;
  const perc = ((100 / total) * good).toFixed();

  return (
    <div>
      <h1>Please leave feedback</h1>
      <FeedbackOptions vote={vote} />

      {total === 0 ? (
        <h2>no feedback given</h2>
      ) : (
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          total={total}
          perc={perc}
        />
      )}
    </div>
  );
}
