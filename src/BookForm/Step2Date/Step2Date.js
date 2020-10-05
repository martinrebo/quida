import React, { useState } from 'react'
import DatePicker from 'react-date-picker'
import servicesList from '../../utils/servicesList'
import apptext from '../../utils/apptext'
import getImg from '../../utils/getImg'
import { useServicesStore } from '../../Store/Context'

import './Step2Date.css'


export default function Step2Date(props) {
    const servicesStore = useServicesStore();
    let serviceId = servicesStore.state.bookingFlow.selectedServiceId
    let initialDate = servicesStore.state.bookingFlow.date

    const [date, setDate] = useState(initialDate)

    const handleDate = (value) => {
        setDate(value)
        servicesStore.flow2SelectDate(value)
    }

    // Choose current service + convert propsId to number
    const currentService = servicesList.filter(service => service.id === parseInt(serviceId))[0]
    console.log(currentService)


    const style = {
        backgroundImage: `url(${getImg(currentService?.logo)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: "90vh"
    }

    return (
        <div style={style}>
            <h3 className="white">{apptext.bookform.setp2title} {props.serviceId}</h3>
            <h6 className="white">{currentService?.name} - {currentService?.logo} </h6>
            <DatePicker
                className="quida-calendar"
                isOpen={true}
                autofocus
                value={date}
                onChange={handleDate} />
        </div>
    )
}
