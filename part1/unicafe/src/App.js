import { useState } from "react";

function StatisticLine({ text, value }) {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
}

function Statistics({ good, neutral, bad }) {
  function calcAverage() {
    const denom = good + neutral + bad;
    return denom === 0 ? 0 : (good * 1 - bad * 1) / denom;
  }
  function calcPositive() {
    const denom = good + neutral + bad;
    return denom === 0 ? 0 : (good * 100) / denom;
  }
  function haveFeedback() {
    return good + neutral + bad !== 0;
  }
  function showFeedback() {
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={good + neutral + bad} />
          <StatisticLine text="average" value={calcAverage()} />
          <StatisticLine text="positive" value={`${calcPositive()} %`} />
        </tbody>
      </table>
    );
  }

  return haveFeedback() ? showFeedback() : <div>No feedback given</div>;
}

function Button({ onClick, text }) {
  return <button onClick={onClick}>{text}</button>;
}

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
