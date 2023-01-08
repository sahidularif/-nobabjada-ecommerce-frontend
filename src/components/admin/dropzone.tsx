import React, { useState, useRef, } from 'react';
type Props = {
    children?: React.ReactNode;
    handleDrop?: (files: File[]) => void;
    files: File[];
    setFiles: (files: File[]) => void;

}
const Dropzone: React.FC<Props> = (props) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null)
    const { children, handleDrop, files, setFiles, } = props
    const [imgURL, setImgURL] = React.useState<string[]>([])
    const [highlighted, setHighlighted] = useState(false)
    const [errorMessage, setErrorMessage] = useState({
        formErrors: {}
    });


    const mapFileListToArray = (files: FileList) => {
        const array = []

        for (let i = 0; i < files.length; i++) {
            array.push(files.item(i))
        }

        return array
    }

    const preventDefault = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
    }
    const dragOver = (event: React.DragEvent<HTMLDivElement>) => {
        preventDefault(event)
    }
    const dragEnter = (event: React.DragEvent<HTMLDivElement>) => {
        preventDefault(event)
        setHighlighted(true);
    }
    const dragLeave = (event: React.DragEvent<HTMLDivElement>) => {
        preventDefault(event)
        setHighlighted(false);
    }
    const fileDrop = (event: React.DragEvent<HTMLDivElement>) => {
        preventDefault(event)
        if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
            const files = mapFileListToArray(event.dataTransfer.files) as File[]
            handleDrop?.(files)
            event.dataTransfer.clearData()
        }

    }

    const filesSelected = () => {
        if (fileInputRef.current?.files?.length) {
            const fileList = fileInputRef.current?.files
            const files = mapFileListToArray(fileList) as File[]
            handleDrop?.(files)
        }
    }

    const fileInputClicked = () => {
        fileInputRef.current?.click();
    }


    React.useEffect(() => {
        if (files.length < 1) return;
        let newImageUrls: any = [];
        files.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
        setImgURL(newImageUrls)
    }, [files])

    function deleteFile(e: number) {
        const s = imgURL.filter((item, index) => index !== e);
        const m = files.filter((item, index) => index !== e);
        setImgURL(s);
        setFiles(m);
    }
    return (
        <div className="image-uploader">

            <div className={`${highlighted ? "highlighted-dropzone" : "dropzone"}`}
                onDragEnter={dragEnter}
                onDragLeave={dragLeave}
                onDragOver={dragOver}
                onDrop={fileDrop}
                onClick={fileInputClicked} >
                {children}

            </div>
            <form encType="multipart/form-data">
                <input
                    hidden
                    id="myfile"
                    ref={fileInputRef}
                    className="file-input"
                    type="file"
                    placeholder="Click"
                    onChange={filesSelected}
                    name="avatar"
                />
            </form>

            {
                imgURL?.map((image, index) => {
                    return (
                        <div className="display-image" onClick={(e) => e.stopPropagation()}>
                            <img src={image} className="img-fluid border" width="80px" alt="" />
                            <div className="delete-icon"><i className="fad fa-backspace" onClick={() => deleteFile(index)}></i></div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Dropzone;