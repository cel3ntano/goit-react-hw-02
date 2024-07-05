import { useState, useEffect } from "react";
import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";
import "./App.css";

export default function App() {
  const optionsButtons = ["Good", "Neutral", "Bad"];
  const initialFeedback = { good: 0, neutral: 0, bad: 0 };

  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("savedFeedback");
    return savedFeedback !== null ? JSON.parse(savedFeedback) : initialFeedback;
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  const updateFeedback = feedbackType => {
    if (feedbackType === "reset") {
      setFeedback({ good: 0, neutral: 0, bad: 0 });
    } else
      setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  useEffect(() => {
    window.localStorage.setItem("savedFeedback", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <div className='appContainer'>
      <Description />
      <Options
        buttons={optionsButtons}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
      />

      <div className='feedbackContainer'>
        {totalFeedback > 0 ? (
          <Feedback
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            positive={positiveFeedback}
          />
        ) : (
          <Notification />
        )}
      </div>
    </div>
  );
}
