import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

const Blogpage = () => {
  return (
    <>
    <header
    className="w-full h-20 bg-cover bg-center flex justify-center items-center rounded-2xl  mt-3 here">
    <div className="flex flex-col justify-center relative items-center backdrop-blur-md bg-black/60 w-full h-full">
      <h1 className='text-2xl text-white'>AN OVERWORKED NEWSPAPER EDITOR</h1>
    </div>
</header>
    <section className="w-full h-96 bg-cover bg-center flex justify-center items-center rounded-2xl  mt-3 blog w-[1100px] my-0 mx-auto"></section>

 <div className='w-[1100px] my-0 mx-auto flex items-center text-[#757575] font-bold text-1.5xl space-x-8 my-6'>
  <span>Job Career Admin,</span>
  <span>Education,</span>
  <span>Jobs,</span>
  <span>Learn,</span>
 </div>
<section className='w-[1100px] my-0 mx-auto text-[#757575] leading-7 mt-10 space-y-4 px-4'>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quo tempora aspernatur et officia esse culpa asperiores, voluptas assumenda sint, repellendus odio, maiores perspiciatis! Itaque quod corrupti rerum libero, ea aut mollitia. Fugiat impedit eveniet sapiente illum vitae? Facere quod veritatis saepe hic delectus minima doloribus commodi sapiente, molestiae, veniam id voluptas! Sapiente amet harum minima veniam autem, obcaecati reiciendis alias enim illum eligendi soluta nesciunt provident aliquam eveniet. Libero iste praesentium non placeat excepturi illum, quia in ducimus eos.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quo tempora aspernatur et officia esse culpa asperiores, voluptas assumenda sint, repellendus odio, maiores perspiciatis! Itaque quod corrupti rerum libero, ea aut mollitia. Fugiat impedit eveniet sapiente illum vitae? Facere quod veritatis saepe hic delectus minima doloribus commodi sapiente, molestiae, veniam id voluptas! Sapiente amet harum minima veniam autem, obcaecati reiciendis alias enim illum eligendi soluta nesciunt provident aliquam eveniet. Libero iste praesentium non placeat excepturi illum, quia in ducimus eos.</p>
    <h4 className='text-2xl font-bold text-black'>SIMPLE ANSWER IS, BECAUSE OTHER CANDIDATES WON’T.</h4>
    <div className='border-l-8 border-[#55A747] italic mt-4'>
    <p className='p-8'>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quo tempora aspernatur et officia esse culpa asperiores, voluptas assumenda sint, repellendus odio, maiores perspiciatis! Itaque quod corrupti rerum libero, ea aut mollitia. Fugiat impedit eveniet sapiente illum vitae? Facere quod veritatis saepe hic delectus minima doloribus commodi sapiente, molestiae, veniam id voluptas! Sapiente amet harum minima veniam autem, obcaecati reiciendis alias enim illum eligendi soluta nesciunt provident aliquam eveniet. Libero iste praesentium non placeat excepturi illum, quia in ducimus eos."</p>

    </div>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quo tempora aspernatur et officia esse culpa asperiores, voluptas assumenda sint, repellendus odio, maiores perspiciatis! Itaque quod corrupti rerum libero, ea aut mollitia. Fugiat impedit eveniet sapiente illum vitae? Facere quod veritatis saepe hic delectus minima doloribus commodi sapiente, molestiae, veniam id voluptas! Sapiente amet harum minima veniam autem, obcaecati reiciendis alias enim illum eligendi soluta nesciunt provident aliquam eveniet. Libero iste praesentium non placeat excepturi illum, quia in ducimus eos.</p>
</section>
<div className=' gap-2 flex  items-start flex-row sm:justify-start w-[1100px] my-0 mx-auto my-8 px-4'> 
            <h6 className='pr-6 '>Share This:</h6>
            <FaFacebook className='mr-2 mr-8 text-2xl hover:text-[#55A747]'/>
          <FaInstagram className='mr-8 text-2xl hover:text-[#55A747]'/>
          <FaTwitter className='mr-8 text-2xl hover:text-[#55A747]'/>
          <FaYoutube className='mr-8 text-2xl hover:text-[#55A747]'/>
        </div>
    </>
  )
}

export default Blogpage