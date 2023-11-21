import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import 'react-quill/dist/quill.snow.css';
// import {Client} from "@sendgrid/client"
// import sgMail from '@sendgrid/mail';
// sgMail.setClient(new Client())
// const sgMail = require('@sendgrid/mail');


const Newemail = () => {

    const editor = useRef(null);
    let[recipient, setRecipient] = useState<string>('')
    let[subject, setSubject] = useState<string>('')
    let [content, setContent] = useState<string>('');

    async function sendMessage(e: React.FormEvent){
        e.preventDefault();

        
        console.log(`setRecipient is: ${recipient} and Subject of mail is: ${subject} body of mail is: ${content}`);
        
        // if (recipient.length > 0 && subject.length > 0 && content.length > 0) {
            if(true){
            const SENDGRID_API_KEY = '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';
            const recipient = 'moin@nimblechapps.in';
            const subject = 'test mail';
            const body = 'This is a testing mail';

            

              try {
                const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  }, 
                  body: JSON.stringify({ recipient, subject, body }),
                });
            
                if (response.ok) {
                  alert('Email sent successfully!');
                //   console.log("response is:", response);
                //   console.log("response body is:", response.body);
                //   console.log("response statusText is:", response.statusText);
                //   console.log("response type is:", response.type);

                } else {
                  console.error('Failed to send email:', response.statusText);
                }
              } catch (error) {
                console.error('Error sending email:', error);
              }
        }
        else{
            console.log("Something went wrong");
            console.log(`setRecipient is: ${recipient} and Subject of mail is: ${subject} body of mail is: ${content}`);
        }
        
    }

    return (
        <>
            <form className="pt-5" onSubmit={sendMessage} name='Email-form'>
                <div className="mb-3">
                    <h4 className="me-4">To: </h4>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=> setRecipient(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <h4 className="me-4">Subject: </h4>
                    <input type="text" className="form-control"  placeholder="Enter Subject" onChange={(e)=> setSubject(e.target.value)} />
                </div>
                <div className="mb-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={10} placeholder="Enter body" spellCheck={true} onChange={(e) => setContent(e.target.value)} />
                    {/* <JoditEditor ref={editor} value={content} onChange={newContent => setContent(newContent)} /> */}
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary me-2">Submit</button>
                </div>
            </form>


        </>
    )
}

export default Newemail;






















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