export default function Statistics({
  good,
  neutral,
  bad,
  total,
  perc,
}) {
  return (
    <>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>total: {total}</p>
      <p>positive: {perc}%</p>
    </>
  );
}
