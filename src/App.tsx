import {
  faCode,
  faDumbbell,
  faRunning,
} from "@fortawesome/free-solid-svg-icons";
import Habit from "./components/Habit";

function App() {
  return (
    <>
      <div className="w-full h-screen flex items-center flex-col space-y-4 mt-8">
        <Habit
          habitText="Code"
          habitIcon={faCode}
          habitColour="red"
          habitColourBrightness="200"
        />
        <Habit
          habitText="Gym"
          habitIcon={faDumbbell}
          habitColour="blue"
          habitColourBrightness="200"
        />
        <Habit
          habitText="Run"
          habitIcon={faRunning}
          habitColour="green"
          habitColourBrightness="200"
        />
      </div>
    </>
  );
}

export default App;
