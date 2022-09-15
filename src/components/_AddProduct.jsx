import {useState} from 'react'
import axios from 'axios'

export default function _AddProduct() {
  const [input, setInput] = useState({
    title : '',
    desc : '',
    price : ''
  })
  const handleChange  = (e)=>{
    setInput({...input , [e.target.name] : e.target.value})
  }
  const handlePhoto  = (e)=>{
    setInput({...input , image : e.target.files[0]})
    console.log(input.image)
  }
  


  const handleSubmit  = async (e)=>{
    e.preventDefault()
    const formData = new FormData()
    formData.append('title' , input.title)
    formData.append('desc' , input.desc)
    formData.append('price' , input.price)
    formData.append('image' , input.image)

    console.log(formData)
  const res = await axios.post('http://localhost:3001/api/v1/add_new' , {
   formData
  })
  }
  
  return (
    <>
    <div className="form-main-container">
        <form className="form bg-gray-400 w-full" onSubmit={handleSubmit} encType="multipart/form-data">
            <input type="text" name="title" id="" placeholder='title' onChange={handleChange} />
            <input type="text" name="desc" id=""  placeholder='desc'  onChange={handleChange}/>
            <input type="text" name="price" id=""  placeholder='price'  onChange={handleChange}/>
            <input type="file" name="image" id=""  placeholder='image'  onChange={handlePhoto}/>
            <button type="submit" className='bg-gray-400 py-2 px-5'> oks</button>
        </form>
    </div>
    </>
  )
}
