import React from 'react'
import Header from '../Components/Header/Header'
import List from '../Components/List/List'
import { useServicesStore } from '../Store/Context'
import { useObserver } from 'mobx-react'
import { toJS } from 'mobx'

export default function BookedList() {
    const servicesStore = useServicesStore();

    console.log("shit", toJS(servicesStore.state.services))
    return useObserver(() => {
        console.log("wtf", servicesStore.state.services)
        return (
            <>
                <Header />
                <div className="quida-main">
                    <List services={toJS(servicesStore.state.services)} />
                </div>

            </>
        )

    })


}
