import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { Routes } from './lib'
import routeConfig from './routeConfig'
import zhCN from 'antd/es/locale/zh_CN'

function App(): JSX.Element {
    return (
        <BrowserRouter>
            <ConfigProvider locale={zhCN}>
                {/* <Switch>
                    <Route path="/" exact>
                        <Redirect to="/home" />
                    </Route>
                    <Route path="/login" component={Login} exact></Route>
                    <Route
                        path="/home"
                        render={(props) => (
                            <RouteGuard
                                component={LeftRightLayout}
                                {...props}
                            />
                        )}
                        exact
                    ></Route>
                </Switch> */}
                <Routes routes={routeConfig} />
            </ConfigProvider>
        </BrowserRouter>
    )
}

export default App
