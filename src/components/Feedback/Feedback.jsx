import { clsx } from "clsx";
import css from "./Feedback.module.css";
export default function Feedback({ good, neutral, bad, positive }) {
  const feedback = [
    { label: "Good", value: good },
    { label: "Neutral", value: neutral },
    { label: "Bad", value: bad },
  ];

  return (
    <>
      <ul className={css.feedbackList}>
        {feedback.map(({ label, value }) => {
          return (
            <li className={clsx(css[label.toLowerCase()])} key={label}>
              <span>{label}: </span>
              <span>{value}</span>
            </li>
          );
        })}
      </ul>
      <p className={css.positive}>Positive: {positive}% </p>
    </>
  );
}
