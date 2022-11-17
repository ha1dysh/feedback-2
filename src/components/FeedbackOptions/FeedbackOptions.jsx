export default function FeedbackOptions({ vote }) {
  return (
    <>
      <button type="button" name="good" onClick={vote}>
        Good
      </button>
      <button type="button" name="neutral" onClick={vote}>
        Neutral
      </button>
      <button type="button" name="bad" onClick={vote}>
        Bad
      </button>
    </>
  );
}
