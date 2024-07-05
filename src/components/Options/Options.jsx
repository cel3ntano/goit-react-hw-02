import css from "./Options.module.css";
import clsx from "clsx";
export default function Options({ buttons, updateFeedback, totalFeedback }) {
  return (
    <ul className={css.options}>
      {buttons.map((button, index) => (
        <button
          key={index}
          className={clsx(css.button, css[button.toLowerCase()])}
          onClick={() => {
            updateFeedback(button.toLowerCase());
          }}>
          {button}
        </button>
      ))}
      {totalFeedback > 0 ? (
        <button
          className={clsx(css.button, css.reset)}
          onClick={() => {
            updateFeedback("reset");
          }}>
          Reset
        </button>
      ) : (
        <p className={clsx(css.thinking)}>🤔</p>
      )}
    </ul>
  );
}
