import React from 'react'
import { Redirect } from 'react-router-dom'

interface Iprops {
    component: React.FC | React.ComponentClass<unknown, unknown>
}

export default class RouteGuard extends React.Component<Iprops, unknown> {
    render(): JSX.Element {
        const { component, ...rest } = this.props
        const isLogin = !!localStorage.getItem('isLogin')
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const FOO = React.createElement(component, { ...(rest as any) })
        return isLogin ? FOO : <Redirect to="/login" />
    }
}
