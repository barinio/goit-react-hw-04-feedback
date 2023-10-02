import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const add = ({ target }) => {
    switch (target.name) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        break;
    }
  };
  const options = { good, neutral, bad };

  const total = () => good + neutral + bad;
  const positivePercentage = () => Math.round((good / total()) * 100) + '%';
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(options)} onLeaveFeedback={add} />
      </Section>
      <Section title="Statistics">
        {total() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total()}
            positive={positivePercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
