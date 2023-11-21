
import React, { useEffect, useState } from "react";
import InboxComponent from "./InboxComponent";

interface TodoData {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
    todos:[]
}

const InboxContainer: React.FC = () => {
    const[todos,setTodo] = useState<TodoData[]>([])
    const fetchTodos: string = process.env.REACT_APP_FETCH_TODOS;
    console.log(fetchTodos);
    useEffect(() => {
    console.log("From useEffetc ",typeof fetchTodos);

    console.log("From useEffetc ", fetchTodos);
    fetch(fetchTodos)
        .then((response) => response.json())
        .then((data) => setTodo(data as TodoData[]))
        .catch((error) => console.log("error===>", error))
    }, [])


    return (
        <>
           <InboxComponent
            todos={todos as any}
            />
        </>
    )
}

export default InboxContainer;