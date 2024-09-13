import { useEffect } from "react";
import RouteController from "./routes/RouteController"

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <RouteController />
    </div>
  )
}

export default App
