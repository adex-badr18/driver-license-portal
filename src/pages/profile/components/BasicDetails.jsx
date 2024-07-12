
import { useState } from 'react';
import { FaEdit } from "react-icons/fa";
import SingleDetail from '../utils/SingleDetail';
import BasicDetailsForm from './Modals/BasicDetailsForm';

const BasicDetails = (props) => {
    const [showModal, setShowModal] = useState(false)
    const[profileDetails, setProfile] = useState({})
   
    const handleEditBasicDetails = () => { 
        setShowModal(true)
    }

    const handleCloseModal = () =>{
        setShowModal(false)
    }


    return (
        <>
        <div className='flex mt-7 md:mt-16 md:p-6 relative border-4 border-custom-grey w-full'>
        <h4 className="p-3 bg-white text-lg md:text-2xl font-medium absolute top-[-29px]">Basic Details</h4>
        <FaEdit className="bg-white text-2xl md:text-4xl font-medium absolute top-[-16px] right-10 cursor-pointer" onClick={handleEditBasicDetails} />
        < div className='mt-5 grid md:grid-cols-2 lg:grid-cols-3 w-full'>

            <SingleDetail 
                label="Surname"
                details ={props.state.surname} />
            <SingleDetail 
                label="First Name"
                details ={props.state.firstname} />
            <SingleDetail 
                label="Middle Name"
                details ={props.state.middlename} />
            <SingleDetail
                label='Email'
                details={props.state.email} />
            <SingleDetail
                label="Phone Number"
                details={props.state.phone}/>
            <SingleDetail 
                label='Date of Birth'
                details={props.state.dob} />
            <SingleDetail 
                label='Gender'
                details={props.state.gender} />
            <SingleDetail 
                label='Home Address'
                details={props.state.address} />
           <SingleDetail 
                label='L.G.A'
                details={props.state.lga} />
          <SingleDetail 
                label='State'
                details={props.state.StateofAddress} />
        </div>
        </div>
        {showModal?
        <BasicDetailsForm 
            formData={props.state} 
            closeModal={handleCloseModal}
            editAddress={props.editAddress}
            editDob={props.editDob}
            editEmail={props.editEmail}
            editFirstName={props.editFirstName}
            editGender={props.editGender}
            editMiddleName={props.editMiddleName}
            editPhone={props.editPhone}
            editSurname={props.editSurname}
            editLga={props.editLga}
            editState={props.editState}
             /> : null   }
    </>   
    )
}

export default BasicDetails
