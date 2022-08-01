import "./App.css";
import ParentScreen from "./Components/ParentScreen";
import DeviceOrientation, { Orientation } from "react-screen-orientation";

const App = () => {
  return (
    //Orientaion is just for tutorial not implemented
    <DeviceOrientation lockOrientation={'landscape'}>
        {/* Will only be in DOM in landscape */}
        <Orientation orientation='landscape' alwaysRender={false}>
          <div className="App">
            <ParentScreen />
          </div>
        </Orientation>
        {/* Will stay in DOM, but is only visible in portrait */}
        <Orientation orientation='portrait' alwaysRender={false}>
          <div className="App">
            <ParentScreen />
          </div>
        </Orientation>
      </DeviceOrientation>
  );
};

export default App;
