import { useRef, useState } from "react";
import { Duck } from "./types";

type DuckFormProps = {
    setDucks: React.Dispatch<React.SetStateAction<Duck[]>>
}
const DuckForm = ({ setDucks }: DuckFormProps) => {
    const [duck, setDuck] = useState<Duck>({
        name: "",
        age: 0,
        colour: "",
        habitat: ""
    });

    const nameRef = useRef<HTMLInputElement>(null);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDuck((oldDuck: Duck) => ({ ...oldDuck, [e.target.name]: e.target.value }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); //prevents page reload on submit

        setDucks((ducks: Duck[]) => [duck, ...ducks]);
        setDuck({
            name: "",
            age: 0,
            colour: "",
            habitat: ""
        });
        nameRef.current?.focus();
    }

    return (<form onSubmit={handleSubmit}>
        <label htmlFor="duckName">Name:</label>
        <input type="text" name="name" id="duckName" value={duck.name} onChange={handleChange} ref={nameRef} />
        <br />
        <label htmlFor="duckAge">Age:</label>
        <input type="text" name="age" id="duckAge" value={duck.age} onChange={handleChange} />
        <br />
        <label htmlFor="duckColour">Colour:</label>
        <input type="text" name="colour" id="duckColour" value={duck.colour} onChange={handleChange} />
        <br />
        <label htmlFor="duckHabitat">Habitat:</label>
        <input type="text" name="habitat" id="duckHabitat" value={duck.habitat} onChange={handleChange} />
        <br />
        <button type="submit">Add</button>
    </form>);
}

export default DuckForm;