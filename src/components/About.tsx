 type AboutProps = {
    brief?: boolean
 }
 const About = ({brief}: AboutProps) => {
    if (!brief) {
        return(
        <>
            <p>Hello!</p>
            <p>This is my website!</p>
        </>
    );
    } else {
        return <p>Hello!</p>;
    }

}

 export default About;