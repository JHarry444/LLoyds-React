type TrainerProps = { 
    name?: string , 
    age?: number | string, 
    specialism?: string
    intro?: () => void
}

const Trainer = ({name, age, specialism, intro}: TrainerProps) => {

    if (intro) intro();

    return ( <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Specialism: {specialism}</p>
    </div> );
}
 
export default Trainer;