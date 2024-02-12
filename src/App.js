import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Weather defaultCity="Berlin" />
        </header>
      </div>
    </div>
  );
}

export default App;
