import axios from "axios"

function App() {
  const sendRequest = async () => {
    const response = await axios.get("/request")
    console.log(response);
  }
  return (
    <div>
      <h1>Hello World!</h1>
      <button onClick={sendRequest}>Send request</button>
    </div>
  );
}

export default App;
