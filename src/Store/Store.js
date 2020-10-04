import {nanoid} from 'nanoid'

export function createServicesStore(){
    return {
      services: [],
      addService(text){
        console.log(text, this.services)
        this.services.push({
          text, id: nanoid()
        })
      },
      removeService(id){
        this.services = this.services.filter(note => note.id !== id)
      }
    }
  }
 