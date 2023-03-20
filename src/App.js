import { BackgroundGradient } from "./components/background-gradient/background-gradient";
import { NavBar } from "./components/nav-bar/nav-bar";
import { HomePage } from "./pages/home-page/home-page";
function App() {
  return (
    <div className="App">
      <BackgroundGradient />
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
