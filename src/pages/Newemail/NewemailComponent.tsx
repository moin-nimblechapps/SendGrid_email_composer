import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import 'react-quill/dist/quill.snow.css';
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const NewemailComponent = () => {

  const editor = useRef(null);
  let [recipient, setRecipient] = useState<string>('')
  let [subject, setSubject] = useState<string>('')
  let [content, setContent] = useState<string>('');
  // let Isbutton = true;
  let Isbutton = () => {
    if (recipient.length > 0 && subject.length > 0 && content.length > 0  ) {
      console.log("Isbutton in IF===>", Isbutton);
        return true;
    }
    console.log("Isbutton in else===>", Isbutton);
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
      <form className="pt-5" onSubmit={sendMessage} name='Email-form'>
        <div className="mb-3">
          <h4 className="me-4">To: </h4>
          <input type="email" className="form-control" required={true} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setRecipient(e.target.value)} />
        </div>
        <div className="mb-3">
          <h4 className="me-4">Subject: </h4>
          <input type="text" className="form-control" required={true} placeholder="Enter Subject" onChange={(e) => setSubject(e.target.value)} />
        </div>
        <div className="mb-3">
          <textarea className="form-control" required={true} id="exampleFormControlTextarea1" rows={10} placeholder="Enter body" spellCheck={true} onChange={(e) => setContent(e.target.value)} />
          {/* <JoditEditor ref={editor} value={content} onChange={newContent => setContent(newContent)} /> */}
        </div>
        <div className="text-center">
          <button type="submit" className={Isbutton() ? "btn btn-primary" : 'btn btn-secondary disabled'}>Submit</button>
        </div>
      </form>


    </>
  )
}

export default NewemailComponent;