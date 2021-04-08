import React from "react"

// Створюєм контекст

const {
    Provider : SwapiServiceProovider ,
    Consumer : SwapiServiceConsumer
} = React.createContext()

export {
    SwapiServiceProovider,
    SwapiServiceConsumer
}