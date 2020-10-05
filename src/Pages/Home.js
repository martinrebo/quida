import React from 'react'
import Header from '../Components/Header/Header'
import {useServicesStore} from '../Store/Context'

export default function Home() {
    const servicesStore = useServicesStore();
    console.log(servicesStore)
    return (
        <div>
            <Header/>
            <a href="/booking">BOOK SERVICE</a> / LIST OF BOOKED SERVICES
            {servicesStore.state.services.map((service) => (
          <li onClick={
            () => servicesStore.removeService(service.id)
          } key={service.id}>{service.text}</li>
        ))}
        </div>
    )
}
