import "./App.css";
import First from "./custom-files/First";
import Next from "./custom-files/Next";
import User from "./custom-files/User";
import Service from "./custom-files/Service";
import Count from "./custom-files/Count";
import NextCount from "./custom-files/NextCount";

function App() {
  const myName = "Pritom Debnath";
  const year = 2023;
  const birthYear = 2010;
  const startSchool = true;
  return (
    <div className="App">
      <h2>My Name Is {myName}</h2>
      <h2>I'm {year - birthYear} Years Old</h2>
      <h2>{startSchool ? "Start Schhol" : "Not Start School"}</h2>

      {/* First.Js */}
      <First />
      {/* Next.Js */}
      <Next />
      {/* User.Js */}
      <hr />
      <User userName={"User One"} userId={"ID-1"} />
      <hr />
      <User userName={"User Two"} userId={"ID-2"} />
      <hr />
      {/* Service.Js */}
      <Service serviceName={"Web Design"} serviceText={"About Web Design"} />
      <hr />
      <Service
        serviceName={"UI/UX Design"}
        serviceText={"About UI/UX Design"}
      />
      <hr />
      {/* Count.Js */}
      <Count />
      <hr />
      {/* NextCount.Js */}
      <NextCount />
    </div>
  );
}

export default App;
