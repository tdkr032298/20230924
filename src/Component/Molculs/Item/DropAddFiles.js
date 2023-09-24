import { useCallback, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
// import { fetchAsyncGetFiles, fetchAsyncPostFiles } from '../features/fileSlice';
import { useDispatch } from 'react-redux';

const baseStyle = {
    display: "flex",
    justifyContent: 'center',
    flexDirection: "column",
    width: 350,
    height: 100,
    margin:8,
    borderRadius:8,
};
const borderNormalStyle = {
    border: "1px dotted #888"
};
const borderDragStyle = {
    border: "1px solid #00f",
    transition: 'border .5s ease-in-out'
};
const DropAddFiles = () => {
    const dispatch = useDispatch()

    const onDrop = useCallback( async (acceptedFiles) => {
        // Do something with the files
        const file = acceptedFiles[0]
        let filename = file.name.split('.').slice(0,-1).join('.')
        // 送信用Formdataを作成
        const uploadData = new FormData()
        uploadData.append('file',file)
        uploadData.append('file_name',filename)
        uploadData.append('created_by','車体 荒子')
        // DBにpostする Formdata形式で送る JSONに変換せずに送る方が効率的
        // await dispatch(fetchAsyncPostFiles(uploadData))
        // postしたらファイルリストを更新する
        // await dispatch(fetchAsyncGetFiles())

        console.log('acceptedFiles:', acceptedFiles);
        console.log('file:', file);
    }, []);
    const { getRootProps, getInputProps, isDragActive, open, acceptedFiles } = useDropzone({
        onDrop,
        noClick: true
    });
    // ドラッグ状態に応じてcssを変化させるための記述
    const style = useMemo(() => (
        { ...baseStyle, ...(isDragActive ? borderDragStyle : borderNormalStyle)}
    ), [isDragActive]);


    return (
        <div className="container">
            <div {...getRootProps({ style })}>
                <input {...getInputProps()} />
                {/* {
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag 'n' drop some files here</p>
                } */}
                <button type="button" onClick={open} className="text-blue-500 text-3xl">＋</button>
            </div>

        </div>
    );
}

export default DropAddFiles;