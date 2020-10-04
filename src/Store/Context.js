import React from 'react'
import { createServicesStore } from './Store'
import { useLocalStore } from 'mobx-react'

const ServicesContext = React.createContext(null)

export const ServicesProvider = ({children}) => {
  const ServicesStore = useLocalStore(createServicesStore)

  return <ServicesContext.Provider value={ServicesStore}>
    {children}
  </ServicesContext.Provider>
}

export const useServicesStore = () => React.useContext(ServicesContext)