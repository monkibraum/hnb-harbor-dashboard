import React, { Component } from 'react'
import pageRoutes from "routes/pages";
import { Switch, Route, Redirect } from "react-router-dom";


class Root extends Component {

    componentWillMount(){
    }

    render() {
        
        const switchRoutes = (
            <Switch>
                {pageRoutes.map((prop, key) => {
                    if (prop.redirect) return <Redirect from={prop.path} to={prop.to} key={key} />;
                    return <Route exact path={prop.path} component={prop.component} key={key} />;
                })}
            </Switch>
        );

        return (
            <React.Fragment>
                {switchRoutes}
            </React.Fragment>
        )
    }
}

export default Root