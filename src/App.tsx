import './App.css'
import axios from 'axios';

function App() {
  const name = "ian";
  const surname = "sakashita";

  const handleClick = async () => {
    const response = await axios.get('https://backend-learning-styles.vercel.app/')
    console.log(response)
  }

  return (
    <>
      <div>
        <p>
          O {name} casou com o {surname}
        </p>
        <button onClick={handleClick}>
          Click
        </button>
        </div>
    </>
  )
}

export default App
