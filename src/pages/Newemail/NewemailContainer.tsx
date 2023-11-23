import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import 'react-quill/dist/quill.snow.css';
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import NewemailComponent from "./NewemailComponent";

const NewemailContainer = () => {
  const editor = useRef(null);
  const [recipient, setRecipient] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [content, setContent] = useState<string>('');
  
  const Isbutton = () => recipient.length > 0 && subject.length > 0 && content.length > 0;

  const onSetRecipient = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log("Recipient value====>", value);
    setRecipient(value);
  };

  const onSetSubject = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log("Subject value====>", value);
    setSubject(value);
  };

  const resetFields = () => {
    setRecipient('');
    setSubject('');
    setContent('');
  };

  const sendMessage = async () => {
    console.log("Enter sendMessage function");

    if (recipient && subject && content) {
      try {
        const body = {
          "toAddress": recipient,
          "subject": subject,
          "message": content
        };

        const response = await axios.post("http://localhost:5000/send", body);
        if (response.status === 200) {
          toast.success("Email sent successfully", {
            position: toast.POSITION.TOP_RIGHT
          });
          resetFields();
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.log("Error creating Post===>", error);
      }
    } else {
      console.log("Something went wrong. Fields are not filled.");
    }
  };

  return (
    <NewemailComponent 
      sendMessage={sendMessage}
      recipient={recipient}
      onSetRecipient={onSetRecipient}
      subject={subject}
      onSetSubject={onSetSubject}
      content={content}
      Isbutton={Isbutton()}
      editor={editor}
      setContent={setContent}
    />
  );
};

export default NewemailContainer;
