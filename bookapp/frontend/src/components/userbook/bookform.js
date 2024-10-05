import { useState } from "react";

function BOOKFORM() {

  const [file,setfiles]= useState()
  const [title,settitle] = useState([])
  const [category,setCategory] = useState()
  const handleFile = async () => {
      if (!file) return;
    
      const formData = new FormData();
      formData.append('file', file);
    
      try {
        const response = await axios.post('http://localhost:5000/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log('Response:', response);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
  };
  return (
    <div>
      <form onSubmit={handleFile}>
        <input
          type="text"
          value={title}
          placeholder="Enter Book Name"
          className="input input-bordered input-secondary w-full max-w-xs"
          onChange={(e)=>{settitle(e.target.value)}}
        />
        <input
          type="text"
          placeholder="your book belogs to which subject"
          className="input input-bordered input-secondary w-full max-w-xs"
          value={category}
          onChange={(e)=>{setCategory(e.target.value)}}

        />
        <input
          type="file"
          placeholder="Upload your File here"
          className="input input-bordered input-secondary w-full max-w-xs"
          onChange={(e)=>setfiles(e.target.files[0])}
        />
        <input
          type="text"
          placeholder="write free if your book is free"
          className="input input-bordered input-secondary w-full max-w-xs"
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default BOOKFORM;
