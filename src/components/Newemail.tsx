import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import 'react-quill/dist/quill.snow.css';

const Newemail = () => {

    const editor = useRef(null);
    const [content, setContent] = useState('');
    
    return (
        <>
            <form className="pt-5">
                <div className="mb-3">

                    <h4 className="me-4">To: </h4>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="mb-3">
                    <h4 className="me-4">Subject: </h4>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Subject" />
                </div>
                <div className="mb-3">
                    {/* <textarea className="form-control" id="exampleFormControlTextarea1" rows={10} placeholder="Enter body" spellCheck={true} /> */}
                    <JoditEditor ref={editor} value={content} onChange={newContent => setContent(newContent)} />
                </div>
                <div className="modal-footer">
                    <button type="submit" className="btn btn-primary me-2">Submit</button>
                    <button type="submit" className="btn btn-danger me-2">Discard</button>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </form>


        </>
    )
}

export default Newemail;