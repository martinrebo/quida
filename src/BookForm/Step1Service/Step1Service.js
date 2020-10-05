import React from 'react'
import Box from '../../Components/Form/Box'
import servicesList from '../../utils/servicesList'
import fisio from '../../assets/alternative-medicine-1327808_640.jpg'

export default function Step1Service({ title, onSubmit }) {
   
    return (
        <div>
                <h1>{title}</h1>

                {servicesList.map((service) => {
                    return (
                        <Box background={fisio}>
                            <h3>{service.name} - - {service.logo} - ➡️</h3>
                        </Box>

                    )

                })}

                <button>Submit</button>
           
        </div>
    )
}
