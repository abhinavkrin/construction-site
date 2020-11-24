import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { HOME } from '../routes';
import { Pages } from './Pages';

function MainComponent(){
    return (
        <div className="body">
           <Switch>
                {Pages.map((page,i)=>(
                    <Route path={page.path} key={i+page.path} exact={page.exact} render={(props)=>page.component(props)}/>
                ))}
                <Redirect to={HOME}/>
            </Switch>
        </div>
    )
}

export default withRouter(MainComponent);