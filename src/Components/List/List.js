import React from 'react'
import getImg from '../../utils/getImg'
import Box from '../Box/Box'


export default function List({ services }) {
    return (
        <div>
            {services.length === 0
                ? <h1> No services </h1>

                :
                <>
                    <h2>Booked Services</h2>
                    {services.map((service, index) => {
                        return (

                            <Box
                                background={getImg(service.logo)}
                                title={service.name}
                                key={index}>

                                <span className="quida-booking-date"> {service.date.toLocaleDateString("es-ES")} </span>
                            </Box>
                        )
                    })}
                </>

            }

        </div>
    )

}
