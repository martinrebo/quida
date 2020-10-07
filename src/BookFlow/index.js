import React from 'react'
import Step1Service from './Step1Service/Step1Service'
import Step2Date from './Step2Date/Step2Date'
import Step3Book from './Step3Book/Step3Book'
import { useServicesStore } from '../Store/Context'
import { useObserver } from "mobx-react";

export default function BookForm() {


    const servicesStore = useServicesStore();
    
 
    let currentStep = servicesStore.state.bookingFlow.activeStep

    const handleNextStep = () => {
        servicesStore.gotoStep(currentStep + 1)

    }
    const handlePrevStep = () => {
        servicesStore.gotoStep(currentStep - 1)
    }


    return useObserver(() => {
        let step = servicesStore.state.bookingFlow.activeStep
        let serviceId = servicesStore.state.bookingFlow.selectedServiceId
        let date = servicesStore.state.bookingFlow.date

        return (
            <div className="quida-main">

                {step === 1 ? <Step1Service /> : null}
                {step === 2 ? <Step2Date /> : null}
                {step === 3 ? <Step3Book /> : null}

                {/* Show Nav buttons if a Service is ready for booking confirmation */}
                {step && serviceId && date ? (

                    <div className="quida-bookflow-nav">
                        {step > 1 ? (
                            <button className="quida-button-secondary " onClick={handlePrevStep}> Prev </button>

                        ) : null}

                        {step <= 2 ? (
                            <button className="quida-button-secondary " onClick={handleNextStep}> Next </button>
                        ) : null}

                    </div>

                ) : null}

            </div>
        )
    }


    )
}
