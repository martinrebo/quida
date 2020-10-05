import {nanoid} from 'nanoid'

export function createServicesStore(){
    return {
      
      state: {services: [],
      bookingFlow: {activeStep: 1, selectedServiceId: null, date: null}},

      flow1SelectService(selectedServiceId) {
        this.state.bookingFlow.activeStep=2
        this.state.bookingFlow.selectedServiceId= selectedServiceId
      },
      flow2SelectDate(date) {
        this.state.bookingFlow.date=date
        this.state.bookingFlow.activeStep=3
      },
  
      gotoStep(number){
        console.log(number, this.state.bookingFlow.activeStep)
        this.state.bookingFlow.activeStep = number
      },
      addService(text){
        console.log(text, this.services)
        this.state.services.push({
          text, id: nanoid()
        })
      },
      removeService(id){
        this.state.services = this.state.services.filter(service => service.id !== id)
        console.log("deleted service")
      }
    }
  }
 