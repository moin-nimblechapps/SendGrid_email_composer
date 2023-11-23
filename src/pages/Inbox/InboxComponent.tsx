
import React from "react";

interface Todo {
    id: number;
    title: string;
    // Define other properties of your todos if needed
  }
  
  interface InboxProps {
    list: string;
  }

  const InboxComponent: React.FC<InboxProps> = (props) => {
    const {list} = props;
    return (
        <>
            <div className="">
                <h1 className="text-center">{props.list}</h1>
            </div>
        </>
    )
}

export default InboxComponent;