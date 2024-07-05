import { useState } from "react";
import "./App.css";
function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:8080/list")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };
  return (
    <div className="App">
      <h1>fetch Data for CORS Example</h1>
      <button onClick={fetchData}>Fetch Data</button>
      {data[0] &&
        data.map((el) => (
          <div>
            <p>{el.id}</p>
            <p>{el.title}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
