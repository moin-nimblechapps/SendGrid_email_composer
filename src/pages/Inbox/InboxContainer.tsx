
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

    let List: string = "List of Mails";

    return (
        <>
           <InboxComponent list = {List}/>
        </>
    )
}

export default InboxContainer;