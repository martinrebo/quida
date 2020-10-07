import React from 'react'
import Box from '../../Components/Box/Box'
import servicesList from '../../utils/servicesList'
import apptext from '../../utils/apptext'
import getImg from '../../utils/getImg'
import { useServicesStore } from '../../Store/Context'

export default function Step1Service({ title }) {
    const servicesStore = useServicesStore();

    const handleClick = (e) => {
        // convert id in number
        e.stopPropagation()
        let id = parseInt(e.target.dataset.id, 10)
        servicesStore.flow1SelectService(id)
       
    }

    return (
        <div>
            <h2>{apptext.bookform.step1title}</h2>

            {servicesList.map((service, index) => {
                return (
                    <div className="quida-service-list" key={index} onClick={handleClick}>
                        <div>
                            <Box
                             background={getImg(service.logo)}
                             dataId={service.id}
                             title={service.name} />
                        </div>
                    </div>
                )

            })}

        </div>
    )
}
