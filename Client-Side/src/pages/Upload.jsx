import React from 'react';
import './Stylesheets/upload.css';


function Upload() {
    const [files,setFiles] = React.useState([]);
    function handlefiles(e){
        const newFiles = e.target.files
        setFiles((prev)=>[...prev,...newFiles])
    }
    console.log(files)
    
    return (
        <div className='upload-container'>
            <div className='upload-upload-div'>
                <input type="file" multiple onChange={(e)=>handlefiles(e)} />
            </div>
            <div>
                {
                    
                }
            </div>
            <div className="upload-btn-holder">
                <button className='upload-btn'>Clear files</button>
                <button className='upload-btn'>Add More files</button>
                <button className='upload-btn'>Manage files</button>
            </div>
        </div>
    );
}

export default Upload;