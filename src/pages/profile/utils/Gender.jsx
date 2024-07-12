import {useState} from 'react'

const Gender = (props) => {
    const genderArray =["Male","Female"]
    const [dropdown, setDropdown] = useState(false)
    const [value, setValue] = useState(props.value)
    const handleDropdown = (event) => {
        event.preventDefault()
        setDropdown(!dropdown)
        let value
        if(event.target.getAttribute("value")){
            value= event.target.getAttribute("value")
            setValue(value)
            props.onChange(value)
        }
      };
    return (
        <label className='relative grid gap-2 w-full mb-6' onClick={handleDropdown}>
            <span className='text-base md:text-[20px]/[22px] font-medium text-green-700 dark:text-green-500'>Gender</span>
        {dropdown ?
        <ul className="w-full left-0 bottom-0 absolute block rounded-md border border-[#e0e0e0] bg-white text-base font-medium text-[#6B7280] outline-none focus:shadow-md
        *:border *:border-custom-grey *:bg-white  dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10">
       {genderArray.map((value, index) => (
           <li className="w-full p-4 text-base bg-slate-50 text-center border-2 border-sky-500" key={index} value={value} onClick={handleDropdown}>
               {value}
           </li>))}
           </ul>
           :
        <button type="button" className="w-full h-full py-3 px-5  border-2 border-custom-grey bg-slate-50 rounded-lg">{value ? value :genderArray[0]}</button>

        }

     </label>
    )
}

export default Gender
