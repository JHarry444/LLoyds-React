import DuckForm from "./DuckForm";
import DuckList from "./DuckList";
import { useEffect, useState } from "react";
import { Duck } from "./types";
import axios from "axios";

const DuckContainerFetch = () => {
    const [filter, setFilter] = useState("");
    const [ducks, setDucks] = useState<Duck[]>([]);

    async function fetchDucks() {
        try {
            const { data } = await axios.get("http://localhost:8081/ducks");
            setDucks(data);
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchDucks();
        return () => console.log("Bye!");
    }, [filter]);


    return (<>
        <DuckForm fetchDucks={fetchDucks} />
        <h3>Filter</h3>
        <input type="text" placeholder="name" value={filter} onChange={e => setFilter(e.target.value)} />
        <DuckList ducks={ducks.filter(duck => duck.name.toLowerCase().startsWith(filter))} />
    </>);
}

export default DuckContainerFetch;