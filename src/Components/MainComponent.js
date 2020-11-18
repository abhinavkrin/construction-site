import React from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { Redirect, Route } from 'react-router-dom';
import { HOME } from '../routes';
import { Pages } from './Pages';

export default function MainComponent(){
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