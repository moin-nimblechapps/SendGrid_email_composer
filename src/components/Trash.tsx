

interface typeProps{
    text: string | number //Union 
    // id: string & number //Intersection
    id: number
    onClick?: () => void
}

// we can create our own type and pass to the props
// type myType = {
//     text: string
// }

const Trash: React.FC<typeProps> =(props)=>{
    const {text, onClick} = props;
    return(
        <>  
            <h1>{props.id}</h1>
            <h2>{text}</h2>
            <button onClick={onClick}>Alert</button>
        </>
    )
}

export default Trash;