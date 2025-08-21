import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface HabitProps {
  habitText: string;
  habitIcon: IconDefinition;
  habitColour: "blue" | "red" | "green";
  habitColourBrightness: string;
}

const Habit = ({ habitText, habitIcon, habitColour }: HabitProps) => {
  const [isDone, setIsDone] = useState(false);

  const toggleIsDone = () => {
    if (isDone === true) {
      setIsDone(false);
    } else {
      setIsDone(true);
    }
  };

  const colorClasses = {
    blue: {
      todo: "bg-blue-200",
      completed: "bg-blue-300",
    },
    green: {
      todo: "bg-green-200",
      completed: "bg-green-300",
    },
    red: {
      todo: "bg-red-200",
      completed: "bg-red-300",
    },
  };

  const bgClass =
    colorClasses[habitColour]?.[isDone ? "completed" : "todo"] || "bg-gray-200";

  return (
    <div
      className={`w-1/3 h-24 flex items-center rounded-xl ${bgClass} hover:scale-105 duration-200 ease-in-out `}
      onClick={() => toggleIsDone()}
    >
      <FontAwesomeIcon icon={habitIcon} className="text-xl ml-4" />
      <p className="text-2xl ml-2">{habitText}</p>
    </div>
  );
};

export default Habit;
