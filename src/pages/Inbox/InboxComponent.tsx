
import React from "react";

interface Todo {
    id: number;
    title: string;
    // Define other properties of your todos if needed
  }
  
  interface InboxProps {
    todos: Todo[];
  }

  const InboxComponent: React.FC<InboxProps> = (props) => {
    const {todos} =props;
    const configValue = process.env.REACT_APP_SENDGRID_API_KEY;
    console.log(configValue)
    return (
        <>
            <div className="">
                {
                    todos.map((todo) => (
                        <>
                        <div key={process.env.SENDGRID_API_KEY}>
                        <li>{process.env.PUBLIC_URL}</li>
                        <li>{todo.id}</li>
                        <li>{todo.title}</li>
                        </div>
                        </>
                    ))
                }
            </div>
        </>
    )
}

export default InboxComponent;