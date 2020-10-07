import React from 'react'
import { useServicesStore } from '../../Store/Context'
import { useHistory } from "react-router-dom";
import servicesList from '../../utils/servicesList'
import getImg from '../../utils/getImg'
import Box from '../../Components/Box/Box';

export default function Step3Book() {
    const servicesStore = useServicesStore();
    const history = useHistory();

    //Convert BookDate into a Sring
    let bookDate = servicesStore.state.bookingFlow.date
    const date = bookDate.toLocaleDateString("es-ES")

    // Get the current booked service Information 
    let serviceId = servicesStore.state.bookingFlow.selectedServiceId
    const currentService = servicesList.filter(service => service.id === parseInt(serviceId))[0]

    // On Confirm Add Service + Clean Flow + Go to booked page 
    const handleConfirm = (e) => {
        // Add Booked Service
        servicesStore.addService({
            name: currentService.name,
            serviceId: currentService.id,
            date: bookDate,
            logo: currentService.logo
        })
        // Clean Booking Flow
        servicesStore.flow3Clean()
        // Navigate to the Booked Pages
        history.push("/booked")
    }

    // On Cancel go back to home page + 
    const handleCancel = (e) => {
        history.push("/")
    }

    return (
        <div className="quida-grid-item">
            <Box
                background={getImg(currentService?.logo)} />
            <div className="boxed">
                <h2> {currentService.name} </h2>
                <p> {currentService.description} </p>
                <h1> {date} </h1>
                <h3> {currentService.price} €</h3>
                <button onClick={handleCancel} className="quida-button-secondary"> Cancelar </button>
                <button onClick={handleConfirm} className="quida-button"> Confirmar </button>

            </div>
        </div>
    )
}
