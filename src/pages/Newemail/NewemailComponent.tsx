
import ReactQuill, {Quill} from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../../assets/style/Sidebar.css';
import { useForm } from 'react-hook-form'
import { useEffect } from 'react';
import { Oval } from 'react-loader-spinner'
import '../../assets/style/Sidebar.css'

// interface NewemailProps {
//   sendMessage: () => void;
//   recipient: string;
//   subject: string;
//   setSubject: string;
//   content: string;
//   setContent: string;
//   Isbutton: boolean;
//   loader: boolean;
//   onSetSubject: (e: React.ChangeEvent<HTMLInputElement>) => void; 
//   onSetRecipient: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }

const NewemailComponent = (props: any) => {


  const {
    register, handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm();

  const { sendMessage,
    recipient,
    subject,
    onSetSubject,
    content,
    onSetRecipient,
    Isbutton,
    setContent,
  } = props;

  let modules = {
    
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
    
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'direction': 'rtl' }],                         // text direction
    
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
    
      ['clean'] ,
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false
    },
  }

  useEffect(() => {
    register("content", { required: true });
  }, [register]);

  const contentValue = watch('content');

  const setBodyContent = (content: string) => {
    setContent(content);
    setValue('content', content); // Set value of 'content' field
  };

  // console.log("Enter mail container", props);
  return (
    <>
      
          <form className="pt-5" onSubmit={handleSubmit(sendMessage)}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                {...register("recipient", {
                  required: true,
                  pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                })}
                value={recipient}
                onChange={onSetRecipient}
              />
              <div style={{ color: 'red' }}>
                {errors.recipient?.type === "required" && "Name is required"}
                {errors.recipient?.type === 'pattern' && "Enter valid email "}
              </div>

            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Subject</label>
              <input type="text" className="form-control"  aria-describedby="textHelp"
                {...register("subject", { required: true })}
                value={subject}
                onChange={onSetSubject}
              />
              <div style={{ color: 'red' }}>
                {errors.subject?.type === "required" && "subject is required"}
              </div>
            </div>
            <div className="mb-3 editor-container">
              <ReactQuill theme="snow" modules={modules}
                className="editor"
                value={content}
                onChange={setBodyContent}
              />
            </div>
            <div style={{ color: 'red' }}>
              {errors.content && "Email Body required"}
            </div>
            <div className="my-2 text-center">
              <button type="submit" className={Isbutton ? "btn btn-primary" : "btn btn-secondary disabled"}>Submit</button>
            </div>
          </form>
      
    </>
  )
}

export default NewemailComponent;

