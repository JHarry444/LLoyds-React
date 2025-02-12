import DuckForm from "./DuckForm";
import DuckList from "./DuckList";
import { useEffect, useMemo, useState } from "react";
import { Duck } from "./types";
import axios from "axios";

const DuckContainerFetch = () => {
    const [contrived, setContrived] = useState("");
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


    const filteredDucks = useMemo<Duck[]>(() => {
        return ducks.filter(duck => {
            console.log("I'M FILTERING DUCKS!");
            return duck.name.toLowerCase().startsWith(filter);
        })
    }, [ducks, filter])

    return (<>
        <DuckForm fetchDucks={fetchDucks} />
        <h3>CONTRIVED INPUT</h3>
        <input type="text" value={contrived} onChange={e => setContrived(e.target.value)} />
        <h3>Filter</h3>
        <input type="text" placeholder="name" value={filter} onChange={e => setFilter(e.target.value)} />
        <DuckList ducks={filteredDucks} />
    </>);
}

export default DuckContainerFetch;