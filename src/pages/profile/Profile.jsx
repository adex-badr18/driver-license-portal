
import { useState } from "react";
import { useLocation } from "react-router-dom";
import BasicDetails from "./components/BasicDetails";
import InstantDriverDetails from "./components/InstantDriverDetails";
import LoginDetails from "./components/LoginDetails";
import ProfilePicture from "./components/ProfilePicture";

const Profile = () => {

  let { state } = useLocation();
  console.log('state:', state)
  const [profileDetails, setProfile] = useState({
      username: 'michaelw',
        password: 'michaelwpass',
        firstname: "Michael",
        surname: "Joe",
        middlename: "Doe",
        dob:"1992-12-27",
        phone:"+2348111206206",
        email:"ayopelumi2014@gmail.com",
        StateofAddress: "Lagos",
        lga:"ifedayo",
        address:"berger",
        gender: "Male",
        licenseId:"12344AD52DC",
        certificateNumber:"Ikj384AD34",
        nin :"557FFR2397F93983",
        joined : "21-12-3034",
        lastRenewal: "21-21-2021",
        nextRenewal: "21-21-2021",
        image: "src/assets/images/close-up-friends-traveling-by-car.jpg"
  })


  console.log({profileDetails})

  const editFirstName = (args) => {
    setProfile({
        ...profileDetails,
        firstname:args
    })
  };
  const editMiddleName = (args) => { 
      setProfile({
          ...profileDetails,
          middlename:args
      })
  };
  const editSurname = (args) => { 
      setProfile({
          ...profileDetails,
          surname:args
      })
  };
  const editEmail = (args) => {
      setProfile({
          ...profileDetails,
          email:args
      })
    };
  const editGender = (args) => { 
      setProfile({
          ...profileDetails,
          gender:args
      })
  };
  const editAddress = (args) => { 
      setProfile({
          ...profileDetails,
          address:args
      })
  };
  const editPhone = (args) => { 
      setProfile({
          ...profileDetails,
          phone:args
      })
  };
  const editDob = (args) => { 
      setProfile({
          ...profileDetails,
          dob:args
      })
  }
  const editState = (args) => { 
    console.log(args)
    setProfile({
            ...profileDetails,
            StateofAddress:args
    })
  };
  const editLga = (args) => { 
    setProfile({
        ...profileDetails,
        lga:args
    })
  };
  const editImage = (event) => {
        
    let reader = new FileReader();
    let file = event.target.files[0];
    console.log(event.target.files[0])
    reader.onloadend = () => {

      setProfile({
        ...profileDetails,
        image: reader.result,
        file: file

      })
    };
    reader.readAsDataURL(file);
}

  return (
    <section className='w-screen py-7 md:py-12 xl:py-20 px-4 md:px-10 xl:px-16'>
        <h3 className='text-[28px]/[36px] md:text-[44px]/[56px] font-bold'>Profile Details</h3>    

        <div className="w-full">
            <ProfilePicture  
              state={profileDetails}
              editImage={editImage}
            />
            <BasicDetails  
              state={profileDetails}
              editAddress={editAddress}
              editDob={editDob}
              editEmail={editEmail}
              editFirstName={editFirstName}
              editGender={editGender}
              editMiddleName={editMiddleName}
              editPhone={editPhone}
              editSurname={editSurname}
              editLga={editLga}
              editState={editState}
            />
            <LoginDetails  state={profileDetails}/>
            <InstantDriverDetails state={profileDetails} />
        </div>
    </section>
  );
}

export default Profile