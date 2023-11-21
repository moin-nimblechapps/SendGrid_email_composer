import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import 'react-quill/dist/quill.snow.css';
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import NewemailComponent from "./NewemailComponent";

const NewemailContainer = () => {

  const editor = useRef(null);
  let [recipient, setRecipient] = useState<string>('')
  let [subject, setSubject] = useState<string>('')
  let [content, setContent] = useState<string>('');
  // let Isbutton = true;
  let Isbutton = () => {
    if (recipient.length > 0 && subject.length > 0 && content.length > 0  ) {
        return true;
    }
    return false;
  }

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    console.log("Enter a sendMessage function");

    if (recipient.length > 0 && subject.length > 0 && content.length > 0) {
      console.log(`Inside IF setRecipient is: ${recipient} and Subject of mail is: ${subject} body of mail is: ${content}`);
      try {
        var body = {
          "toAddress": recipient,
          "subject": subject,
          "message": content
        };

       try {
        const response = await axios.post("http://localhost:5000/send", body);
        if (response.status === 200) {
          console.log("Email sent success")
            toast.success("Email sent success", {
              position: toast.POSITION.TOP_RIGHT
            });
            setRecipient('');
            setSubject('');
            setContent('');
        }
        else{
          toast.error(response.data.message);
        }
       
       } catch (error) {
        console.log("Error creating Post===>", error)
       }

      } catch (error) {
        console.error('Error sending email:', error);
      }
    }
    else {
      console.log("Something went wrong");
      console.log(`Inside else setRecipient is: ${recipient} and Subject of mail is: ${subject} body of mail is: ${content}`);
    }

  }

  return (
    <>
    <NewemailComponent />
    </>
  )
}

export default NewemailContainer;






















// sgMail.setApiKey('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')
// const msg = {
//     to: recipient,
//     from: 'developer@nimblechapps.com',
//     subject: subject,
//     text: content,
//     html: `<p>${content}</p>`
// }
// try {
//     await sgMail.send(msg);
//     alert('Email sent successfully!');
//     setRecipient('');
//     setSubject('');
//     setContent('');
// } catch (error) {
//     alert(`Error is====> ${error}`);
// }  