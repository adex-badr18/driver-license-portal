import React from 'react';
import SingleDetail from '../utils/SingleDetail';
const InstantDriverDetails = (props) => {
    return (
         <div className='flex mt-10 md:p-6 relative border-4 border-custom-grey w-full'>
            <h4 className="p-3 bg-white text-lg md:text-3xl font-medium absolute left-0  top-[-29px]">Instant Driver Details</h4>
            <div className=' mt-5 grid md:grid-cols-2 lg:grid-cols-3 w-full'>
                <SingleDetail
                    label='License ID'
                    details={props.state.licenseId}
                />
                <SingleDetail
                    label='NIN'
                    details={props.state.nin}
                />
                <SingleDetail
                    label='Driving Certificate Number'
                    details={props.state.certificateNumber}
                />
                <SingleDetail
                    label='Joined'
                    details={props.state.joined} />

                <SingleDetail
                    label='Last Renewal'
                    details={props.state.lastRenewal}
                />
                <SingleDetail
                    label='Next Renewal'
                    details={props.state.nextRenewal}

                />
            </div>
        </div>
    )
}

export default InstantDriverDetails
