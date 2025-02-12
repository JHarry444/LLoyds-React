import DuckForm from "./DuckForm";
import DuckList from "./DuckList";
import { useState } from "react";
import { Duck } from "./types";

const DuckContainer = () => {

    const [ducks, setDucks] = useState<Duck[]>([]);

    return (<>
        <DuckForm setDucks={setDucks} />
        <DuckList ducks={ducks} />
    </>);
}

export default DuckContainer;