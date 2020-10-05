import React from 'react'
import Step1Service from './Step1Service/Step1Service'
import Step2Date from './Step2Date/Step2Date'
import Step3Book from './Step3Book/Step3Book'
import Step4Confirmation from './Step4Confirmation/Step4Confirmation'
import apptext from '../utils/apptext'
import { useServicesStore } from '../Store/Context'
import { useObserver } from "mobx-react";

export default function BookForm() {

    const text = apptext.bookform
    const servicesStore = useServicesStore();
    console.log(servicesStore)
    let currentStep = servicesStore.state.bookingFlow.activeStep

    const handleNextStep = () => {
        // currentStep = servicesStore.state.bookingFlow.activeStep
        servicesStore.gotoStep(currentStep + 1)
        console.log(currentStep)
    }
    const handlePrevStep = () => {
        // currentStep = servicesStore.state.bookingFlow.activeStep
        servicesStore.gotoStep(currentStep - 1)
        console.log(currentStep)
    }


    return useObserver(() => {
        let step = servicesStore.state.bookingFlow.activeStep
        let serviceId = servicesStore.state.bookingFlow.selectedServiceId
        let date = servicesStore.state.bookingFlow.date

        return (
            <div className="quida-main">
                <div>Active Step: {step} -- {serviceId}</div>
                {step === 1 ? <Step1Service title={text.step1title} /> : null}
                {step === 2 ? <Step2Date /> : null}
                {step === 3 ? <Step3Book /> : null}
                {step === 4 ? <Step4Confirmation /> : null}

                {step && serviceId && date ? (
                    <div className="quida-bookflow-nav">
                        <button className="quida-bookflow-button" onClick={handlePrevStep}> Prev </button>
                        <button className="quida-bookflow-button" onClick={handleNextStep}> Next</button>
                    </div>

                ) : null}

            </div>
        )
    }


    )
}
