import {nanoid} from 'nanoid'

export function createServicesStore(){
    return {
      
      state: {services: [],
      bookingFlow: {activeStep: 1, selectedServiceID: null, date: null}},
  
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
 