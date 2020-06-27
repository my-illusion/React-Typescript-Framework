import React from 'react'
import { Redirect } from 'react-router-dom'

interface Iprops {
    component: React.FC
}

export default class RouteGuard extends React.Component<Iprops, unknown> {
    render(): JSX.Element {
        const { component, ...rest } = this.props
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const FOO = React.createElement(component, { ...(rest as any) })
        return FOO
    }
}
