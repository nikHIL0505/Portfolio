import "./App.css";
import Header from "./components/header";
import EntryBanner from "./components/entryBanner";
import AimSection from "./components/aimSection";

function App() {
  return (
    <div className="App">
      <EntryBanner />
      <Header />
      <AimSection />
    </div>
  );
}

export default App;
