import { Duck } from "./types";

const DuckList = ({ ducks }: { ducks: Duck[] }) => {

    return (<>
        {
            ducks.map(({ id, name, age, colour, habitat }: Duck) => (
                <div key={id}>
                    <p>Name: {name}</p>
                    <p>Age: {age}</p>
                    <p>Colour: {colour}</p>
                    <p>Habitat: {habitat}</p>
                </div>
            ))
        }

    </>);
}

export default DuckList;