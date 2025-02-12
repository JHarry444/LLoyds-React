import { Duck } from "./types";

const DuckList = ({ ducks }: { ducks: Duck[] }) => {

    return (<>
        {
            ducks.map(({ name, age, colour, habitat }: Duck) => (
                <div>
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