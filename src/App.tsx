// import About from "./components/About"
import Trainer from "./components/Trainer";

function App() {

  const intro = () => console.log("hello, world!");

  return (
    <>
      <h1>Hello, World</h1>
      {/* <About/> */}
      {
        /* when passing a function as a prop remmber to NOT use () as you want to 
        pass a REFERENCE to the function, rather than the RESULT of calling it  */
      }
      <Trainer name="Jordan" age={30} specialism="java" intro={intro} />
      <Trainer name="Cameron" age="32" specialism="js" intro={intro} />
      <Trainer name="Piers" age={26} specialism="devops" intro={intro} />
      <Trainer name="Shafeeq" age={40} specialism="python" intro={intro} />
      <Trainer name="Peter" />
      {/* In react self-closing elements must have a closing / */}
      <input />
    </>
  )
}

export default App;
