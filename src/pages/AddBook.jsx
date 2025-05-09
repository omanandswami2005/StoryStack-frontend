import axios from 'axios';
import React, { useState } from 'react'

const AddBook = () => {
    const [Data, setData]= useState({
        url:"",
        title:"",
        author:"",
        price:"",
        desc:"",
        language:"",
    });
    const headers={
        id:localStorage.getItem("id"),
        authorization:`Bearer ${localStorage.getItem("token")}`,
    }
     const chnage=(e)=>{
        const {name,value}=e.target;
        setData({...Data,[name]:value});
     }

     const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setData((prev) => ({
              ...prev,
              url: reader.result, // sets base64 as url
            }));
          };
          reader.readAsDataURL(file);
        }
      };
     const submit=async()=>{
        try {
            if(
            Data.url===""||
            Data.title===""||
            Data.author===""||
            Data.price===""||
            Data.desc===""||
            Data.language===""
        ){
            alert("All feilds Required");
        }
        else{
            const res=await axios.post("https://backend-j6ni.onrender.com/api/v1/add-book",Data,{headers});
            setData({
                url:"",
                title:"",
                author:"",
                price:"",
                desc:"",
                language:"",
            });
            alert(res.data.message);
        }
        } catch (error) {
            alert(error.res.data.message);
        }
     }

     return (
        <div className='h-full p-4'>
          <h1 className='text-3xl md:text-5xl font-semibold text-zinc-100 mb-6'>Add Book</h1>
      
          <div className='p-6 bg-blue-900 rounded-lg space-y-6'>
      
            <div>
              <label className='text-zinc-400'>Image</label>
              <input
                type='text'
                className='w-full mt-2 bg-blue-950 text-zinc-100 p-3 rounded outline-none'
                placeholder='URL of image'
                name='url'
                required
                value={Data.url}
                onChange={chnage}
              />
            </div>
            <div className='mt-3 flex items-center gap-3'>
    <input
      type='file'
      accept='image/*'
      onChange={(e) => handleImageUpload(e)}
      className='text-zinc-300'
    />
    {Data.url && (
      <img src={Data.url} alt='Preview' className='h-16 rounded border' />
    )}
  </div>
      
            <div>
              <label className='text-zinc-400'>Title Of Book</label>
              <input
                type='text'
                className='w-full mt-2 bg-blue-950 text-zinc-100 p-3 rounded outline-none'
                placeholder='Title Of Book'
                name='title'
                required
                value={Data.title}
                onChange={chnage}
              />
            </div>
      
            <div>
              <label className='text-zinc-400'>Author Of Book</label>
              <input
                type='text'
                className='w-full mt-2 bg-blue-950 text-zinc-100 p-3 rounded outline-none'
                placeholder='Author Of Book'
                name='author'
                required
                value={Data.author}
                onChange={chnage}
              />
            </div>
            <div className='flex flex-col md:flex-row gap-6'>
  <div className='w-full md:w-1/2'>
    <label className='text-zinc-400'>Language</label>
    <input
      type='text'
      className='w-full mt-2 bg-blue-950 text-zinc-100 p-3 rounded outline-none'
      placeholder='Language Of Book'
      name='language'
      required
      value={Data.language}
      onChange={chnage}
    />
  </div>

  <div className='w-full md:w-1/2'>
    <label className='text-zinc-400'>Price</label>
    <input
      type='number'
      className='w-full mt-2 bg-blue-950 text-zinc-100 p-3 rounded outline-none'
      placeholder='Price Of Book'
      name='price'
      required
      value={Data.price}
      onChange={chnage}
    />
  </div>
</div>
            <div>
              <label className='text-zinc-400'>Description Of Book</label>
              <textarea
                className='w-full mt-2 bg-blue-950 text-zinc-100 p-3 rounded outline-none'
                rows='5'
                placeholder='Description Of Book'
                name='desc'
                required
                value={Data.desc}
                onChange={chnage}
              />
            </div>
      
            <button
              className='w-full bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition duration-200'
              onClick={submit}
            >
              Add Book
            </button>
          </div>
        </div>
      );
}

export default AddBook
