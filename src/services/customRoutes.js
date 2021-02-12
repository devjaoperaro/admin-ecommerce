import * as React from "react";
import { Route } from 'react-router-dom';
import Login from '../pages/Login';

export default [
    <Route exact path="/login" component={Login} />
];