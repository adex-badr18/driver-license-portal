

import NaijaStates from "naija-state-local-government";
import React, { useEffect, useState } from 'react';
import Gender from "../../utils/Gender";
import Select from "../../utils/Select";


const BasicDetailsForm = (props) => {
    const [stateDropdown, setDropdown] = useState(false)
    const [state, setState] = useState()
    const [lgaDropdown, setLgaDropdown] = useState(false)
    const [lga, setLga] = useState()
  
    const handleChangeDropdown = (args) => {
        setDropdown(!stateDropdown)
        console.log('args:', args)
        if(typeof args =="string"){
            console.log('i am in the if statement')
            setState(args)
            props.editState(args)
            if (args != state) {
                setLga()
                props.editLga()
                
            }
            console.log(NaijaStates.lgas(args))
        }
      };
      useEffect(()=>{
        typeof state == "string" ? props.editState(state) : null
      },[state])
      const handleLgaChangeDropdown = (args) => {
        setLgaDropdown(!lgaDropdown)
        console.log('args:', args)
        if(typeof args =="string"){
            setLga(args)
            props.editLga(args)
        }
      };

    const updateBasicDetails = (event) => {
        event.preventDefault()
        props.closeModal()
      };
      console.log(state)

    return (
        <div className='z-10 fixed backdrop-blur w-screen h-full left-0 top-0 bg-[#00000080] flex items-center justify-center'>
            <form className='relative w-10/12 md:w-3/4 lg:w-3/5 grid p-4 md:p-8 bg-white rounded-lg h-4/5 md:h-5/6 lg:h-3/4 overflow-scroll' onSubmit={updateBasicDetails}>
                <h3 className='sticky md:relative w-fit text-xl md:text-2xl lg:text-4xl text-custom-green mb-8'>Edit Basic Details</h3> 
                <div className='grid md:grid-cols-2 gap-1 md:gap-3'>
                <Input 
                    type="text"
                    labelName="First Name"
                    htmlFor='firstName'
                    placeholder='First Name'
                    value={props.formData.firstname}
                    onChange={props.editFirstName}
                    required={true} />
                <Input 
                    type="text"
                    labelName="Middle Name"
                    htmlFor='middleName'
                    placeholder='Middle Name' 
                    value={props.formData.middlename}
                    onChange={props.editMiddleName}
                    required={true} />
                <Input 
                    type="text"
                    labelName="Surname"
                    htmlFor='surname'
                    placeholder='Surname' 
                    value={props.formData.surname}
                    onChange={props.editSurname}
                    required={true} />
                <Input 
                    type='email'
                    labelName="Email Address"
                    htmlFor='email'
                    placeholder='Email Address'
                    value={props.formData.email}
                    onChange={props.editEmail}
                    required={true} />
                <Input 
                    type='text'
                    labelName="phone"
                    htmlFor='Phone Number'
                    placeholder='Phone Number'
                    inputMode="decimal"
                    value={props.formData.phone}
                    onChange={props.editPhone}
                    required={true} />
                <Gender 
                    value={props.formData.gender}
                    onChange={props.editGender}
                 />
                <Input 
                    type='text'
                    labelName="Home Address"
                    htmlFor='address'
                    placeholder='Home Address'
                    value={props.formData.address}
                    onChange={props.editAddress}
                    required={true} />
                <Input 
                    type='date'
                    labelName="Date of Birth"
                    htmlFor='dob'
                    value={props.formData.dob}
                    onChange={props.editDob}
                    required={true}
                     />
                     <label className='relative w-full p-4 border-4 border-custom-grey bg-slate-50 rounded-lg' onClick={handleChangeDropdown}>
                        {stateDropdown ?
                        <Select closeModal={handleChangeDropdown} value="state"/>:
                        <button type="button" className="w-full h-full">{props.formData.State ? props.formData.State :"Select a state"}</button>

                        }
                     </label>
                     <label className='relative w-full p-4 border-4 border-custom-grey bg-slate-50 rounded-lg' onClick={handleLgaChangeDropdown}>
                        {lgaDropdown && props.formData.State && stateDropdown == false?
                        <Select closeModal={handleLgaChangeDropdown} value={props.formData.State}/>:
                        <button type="button" className="w-full h-full">{props.formData.lga ? props.formData.lga : props.formData.State ? "Select your LGA" : "Select a state"}</button>

                        }

                     </label>
                    </div>
                     <div className=" bg-white sticky bottom-[-24px] flex items-center gap-5 justify-end mt-4">
                        <button type='button' onClick={props.closeModal} className='px-8 py-4 rounded-lg text-base bg-rose-600 text-white'>Cancel</button>
                        <button type='submit' className='px-8 py-4 rounded-lg text-base text-white bg-[#22C55E] w-fit'>Saves Changes</button>
                     </div>

            </form>
        </div>
    )
}

export default BasicDetailsForm
