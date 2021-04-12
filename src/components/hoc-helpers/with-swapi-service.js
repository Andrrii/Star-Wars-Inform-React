import React from "react"
import {SwapiServiceConsumer} from "../swapi-service-context"

const withSwapiService = (mapMethodsToProps) => (Wrapped) => {

    // Компонент обгортка  , який отримує swapiService і встановлює його на комоненті

    return (props) => {
        return (
            <SwapiServiceConsumer>
                {
                    (swapiService) => {
                        const serviceProps = mapMethodsToProps(swapiService)
                        return (
                            <Wrapped {...props} {...serviceProps} />
                        )
                    }
                }
            </SwapiServiceConsumer>
        )
    }
}

export default withSwapiService