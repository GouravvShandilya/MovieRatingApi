"use client"
import React,{useState} from 'react'
import Link from 'next/link'


function Banner() {

  const [newSearchedValue,setSearchedValue] = useState()


  async function submitHandler(e){
    e.preventDefault()
    const query = e.target.value;
     setSearchedValue(query)
 }
console.log(newSearchedValue)
return (
    <div className='banner text-white bg-center bg-cover flex items-center  w-full max-h-[400px] min-h-[360px]'>
      <div className='w-full h-[250px]   p-10'>
        <h2 className='text-4xl font-bold'>Welcome.</h2>
        <h3 className='text-2xl font-semibold mt-1 '>Millions of movies, TV shows and people to discover. Explore now.</h3>
        
          <form className='mt-[2vw] relative w-11/12 p-3 flex rounded-[100px] ' >
            <input  onChange={submitHandler} name='searched' type="search" className='w-full py-3 px-4 rounded-[100px] outline-none text-black' placeholder='Search for a movie,tv show,person......' />
            <div>
             <Link href={`/search/${newSearchedValue}`} > <button className='absolute right-2 font-semibold bg-gradient-to-r from-[#1CD2AD] to-[#05B9DC] top-3 px-8 py-3  rounded-[50px]'>Search</button></Link>
            </div>
          </form>
        
      </div>
    </div>
  )
}

export default Banner


    // Use string interpolation to update the URL


