import React, { useEffect } from "react";
import "./Stylesheets/upload.css";

function Upload() {
    // variables

    // setting States
    const [files, setFiles] = React.useState([]);

    // Refs
    const inputRef = React.useRef(null);

    // Functions
    function handlefiles(e) {
        const newFiles = e.target.files;
        setFiles((prev) => [...prev, ...newFiles]);
    }
    function clearFiles() {
        if (files.length > 0) {
            setFiles([]);
        } else {
            console.log("No files to clear");
        }
    }
    function deleteFile(index){
        setFiles((prev) => prev.filter((_, i) => i !== index));
    }

    // effects
    useEffect(() => {
        console.log(files);
        inputRef.current.value = null;
    }, [files]);

    return (
        <div className="upload-container">
            <div className="upload-upload-div">
                <input
                    type="file"
                    multiple
                    accept="application/pdf"
                    onChange={(e) => handlefiles(e)}
                    ref={inputRef}
                />
            </div>

            <div>
                {files.map((file, i) => {
                    const fileURL = URL.createObjectURL(file);
                    return (
                        <div className="preview" key={i}>
                            <embed
                                key={i}
                                src={fileURL}
                                type="application/pdf"
                                width="200"
                                height="150"
                            />
                            <p>{file.name}</p>
                            <button onClick={()=>deleteFile(i)}>Delete</button>
                        </div>
                    );
                })}
            </div>

            <div className="upload-btn-holder">
                <button className="upload-btn" onClick={clearFiles}>
                    Clear files
                </button>
                <button>Generate Flash Cards</button>
                <button>Generate Questionnaire</button>
            </div>
        </div>
    );
}

export default Upload;
