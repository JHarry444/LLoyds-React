import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const PetList = () => {
    const [name, setName] = useState("");
    const [pets, setPets] = useState<string[]>([]);


    function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
        console.log("Event:", event);

        setName(event?.target.value);
    }

    function addPet() {
        setPets(oldPets => [name, ...oldPets]);
        setName("");
    }

    return (<>
        <h2>Pet List</h2>
        <label htmlFor="addPet">Name:</label>
        {/* onChange in react is actually an onInput */}
        {/* 'controlled' inputs are inputs with a value and onchange that mirror the state */}
        <input className="hello" type="text" id="addPet" value={name} onChange={handleChange} />
        <button onClick={addPet} disabled={!name}>Add</button>
        {
            pets.length > 0 && (
                <>
                    <h3>Pets</h3>
                    <ol>
                        {
                            pets.map((pet: string) => <li key={uuidv4()}>{pet}</li>)
                        }
                    </ol>
                </>
            )
        }

    </>);
}

export default PetList;