import React from 'react'
import { useRouteError } from 'react-router-dom'
import NavBar from './NavBar'

const ErrorMessage = () => {
    const error = useRouteError();
    console.error(error)
    return (
        <>
        <header> <NavBar /> </header>
        <main>
            <h1>Whoops! Something went wrong!</h1>
        </main>
        </>
    )
}

export default ErrorMessage