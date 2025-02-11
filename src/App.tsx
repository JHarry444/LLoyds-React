import About from "./components/About"
import Trainer from "./components/Trainer";

function App() {

  const intro = () => console.log("hello, world!");
  
  return (    
    <>
        <h1>Hello, World</h1>
        {/* <About/> */}
        <Trainer name="Jordan" age={30} specialism="java" intro={intro}/>
        <Trainer name="Cameron" age="32" specialism="js"  intro={intro}/>
        <Trainer name="Piers" age={26} specialism="devops"  intro={intro} />
        <Trainer name="Shafeeq" age={40} specialism="python"  intro={intro}/>
        <Trainer name="Peter" />
        <input />
    </>
  )
}

export default App;
