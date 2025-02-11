import trainers from "../data/trainers.json";
import Trainer from "./Trainer";
type TrainerProps = {
    id: string
    name: string,
    age?: number | string,
    specialism?: string
}
const ExternalData = () => {
    return (
        <>
            {
                trainers.map(({ id, name, age, specialism }: TrainerProps) => (<Trainer key={id} name={name} age={age} specialism={specialism} />))
            }
        </>
    );
}

export default ExternalData;