
import React, { useEffect, useState } from "react";

interface TodoData {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const Inbox: React.FC = () => {
    const[todos,setTodo] = useState<TodoData[]>([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((data) => setTodo(data as TodoData[]))
    }, [])

    return (
        <>
            <div className="">
                {
                    todos.map((todo) => (
                        <>
                        <div  key={todo.id}>
                        <li>{todo.title}</li>
                        <li>{todo.id}</li>
                        </div>
                        </>
                    ))
                }
            </div>
        </>
    )
}

export default Inbox;