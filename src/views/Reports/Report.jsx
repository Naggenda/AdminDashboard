import React, { useState } from 'react';

function Report() {

    const [files, setFiles] = useState([]);

    const handleDrop = (event) => {
        event.preventDefault();
        const { files } = event.dataTransfer;
        if (files.length > 0) {
            setFiles([...files]);
        }
    }

    const handleDragOver = (event) => {
        event.preventDefault()
    }

    const handleDragStart = (event) => {
        event.dataTransfer.setData("text/plain", event.target.id)
    }
    return (
        <div className="main-content">
            <div className="file-upload-area m-10" onDragOver={handleDragOver} onDrop={handleDrop} >
                <div className="card-body d-flex align-items-center justify-content-center m-2 scan-div" style={{ minHeight: "372px" }} draggable="true" onDragStart={handleDragStart}>
                    <div className='file-upload-div'>
                        <p>upload files here...</p>
                        <ul>
                            {files.map((file, index) => (
                                <li key={index}>{file.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Report
