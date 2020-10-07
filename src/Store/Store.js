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
      flow3Clean() {
        this.state.bookingFlow.date=null
        this.state.bookingFlow.activeStep=1
        this.state.bookingFlow.selectedServiceId=null
      },
  
      gotoStep(number){
        this.state.bookingFlow.activeStep = number
      },
      addService(object){
        let bookedService = object;
        bookedService.id= nanoid()
        this.state.services.push(bookedService)
  
      },
      removeService(id){
        this.state.services = this.state.services.filter(service => service.id !== id)
      }
    }
  }
 