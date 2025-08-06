import "./App.css";
import Search from "./components/Search";

function App() {
  return (
    <>
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <h1>GitHub User Search</h1>
        <Search />
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
