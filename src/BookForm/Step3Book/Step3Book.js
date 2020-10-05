import React from 'react'
import { useServicesStore } from '../../Store/Context'
import servicesList from '../../utils/servicesList'
import getImg from '../../utils/getImg'
import Box from '../../Components/Form/Box';

export default function Step3Book() {
    const servicesStore = useServicesStore();
    let serviceId = servicesStore.state.bookingFlow.selectedServiceId
    // Choose current service
    const currentService = servicesList.filter(service => service.id === parseInt(serviceId))[0]
    console.log(currentService)
    return (
        <div>
            <Box
                background={getImg(currentService?.logo)} />
            <div className="boxed">
                <p> {currentService.name} </p>
                <p> {currentService.description} </p>
                <button> Confirmar </button>
            </div>
        </div>
    )
}
