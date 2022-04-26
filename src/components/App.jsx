import { Route, Routes } from "react-router-dom";
import Time from "./Time";
import Home from "./Home";
import NotFound from "./NotFound";
import WeatherContainer from "./WeatherContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/weather" element={<WeatherContainer />} />
      <Route path={"/time"} element={<Time />} />
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
}

export default App;
