// import Test from "./components/Test";
import Hero from "./components/Hero";
import Person from "./components/Person";
import Schedule from "./components/Schedule";

function App() {
  return (
    <div className="max-w-[1000px] mx-auto min-h-screen p-4">
      <Hero />
      {/* <Test></Test> */}
      <Schedule />
      <Person />
    </div>
  );
}

export default App;
