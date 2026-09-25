import './App.css';

function App() {
  return (
    <div>
      <h1>Welcome to My React App</h1>

      <form>
        <h2>Contact Form</h2>

        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
        />

        <br />
        <br />

        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
        />

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
