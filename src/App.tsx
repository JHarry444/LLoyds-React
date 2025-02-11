// import About from "./components/About"
import About from "./components/About";
import ExternalData from "./components/ExternalData";
import ExtternalData from "./components/ExternalData";
import Trainer from "./components/Trainer";
function App() {

  const intro = () => console.log("hello, world!");

  // we use () after the return because JS will insert a ; after any flow-of-control statement 
  // so it's easy to accidentally make your code unreachable
  return (
    <>
      <h1>Hello, World</h1>
      <About brief />
      <About />

      <h2>External Data</h2>
      <ExternalData />
      <h2>Props</h2>
      {
        /* when passing a function as a prop remmber to NOT use () as you want to 
        pass a REFERENCE to the function, rather than the RESULT of calling it  */
      }
      <Trainer name="JH" />
      <Trainer name="Cameron" age="32" specialism="js" intro={intro} />
      <Trainer name="Piers" specialism="devops" intro={intro} />
      <Trainer name="Shafeeq" age={40} intro={intro} />
      {/* <Trainer name="Peter" /> */}
      {/* In react self-closing elements must have a closing / */}
      <input />
    </>
  )
}

export default App;
