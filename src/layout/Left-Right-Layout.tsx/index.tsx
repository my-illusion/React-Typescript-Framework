import React from 'react'
import { Routes } from '../../lib/index'

const Layout: React.FC<IRoutes> = ({ routes }): JSX.Element => {
    console.log(routes)
    return (
        <div>
            224 ---
            <Routes routes={routes} />
            33
        </div>
    )
}

export default Layout
