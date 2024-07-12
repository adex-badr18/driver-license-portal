import React from 'react'

const ProfilePicture = (props) => {
  console.log(props.state.image)
    return (
        <div className='flex md:flex-row flex-col items-center md:items-end mt-8 md:mt-16 gap-6 md:gap-10'>
              <div className=" flex shrink-0">
              <img className="h-60 w-60 object-cover border-2 border-custom-grey rounded-full" src={props.state.image} alt="Current profile photo" />
            </div>
            <label className="block">
              <span className="sr-only">Choose profile photo</span>
              <input type="file" accept='image/' className="block w-full text-sm text-slate-500
                file:mr-2 md:file:mr-4 file:py-4 file:px-6
                file:rounded-full file:border-0
                file:text-base file:font-semibold
                file:bg-violet-50 file:text-[#22C55E]
                hover:file:bg-[#22C55EFF] hover:file:text-white
              "
              onChange={props.editImage}/>
            </label> 
        </div>
    )
}

export default ProfilePicture
