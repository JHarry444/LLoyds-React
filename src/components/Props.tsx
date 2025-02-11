import Trainer from "./Trainer";

const Props = () => {

    const intro = () => console.log("hello, world!");

    return (<>
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
    </>);
}

export default Props;