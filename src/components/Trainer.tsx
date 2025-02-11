// define a type in the same file as it's not used anywhere else atm
// ? denotes an optional paremeter
// | shows that a parameter can be one of 2 (or more) types
// easy method definition: name: (param: type) => returnType
type TrainerProps = { 
    name: string, 
    age?: number | string, 
    specialism?: string
    intro?: () => void
}
// for convenience the props have been 'destructured' (or 'exploded')
// it's posssible to simply define the types inline but it's preferrable to create a type as it's more readable
const Trainer = ({name, age, specialism, intro}: TrainerProps) => {

    if (intro) intro();

    return ( <div>
        <p>Name: {name}</p>
        {age ? <p>Age: {age}</p> : <p>NO AGE</p>}
        {specialism && <p>Specialism: {specialism}</p>}
    </div> );
}
 
export default Trainer;