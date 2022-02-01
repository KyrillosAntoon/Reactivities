import React, { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './navbar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import { Route } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ActivityForm from '../../features/activities/form/ActivityForm';

function App() {




  return (
    <div>
     <NavBar/>
    <Container style={{marginTop:'7em'}}>
      <Route exact path='/' component={HomePage} />
      <Route path='/activities' component={ActivityDashboard} />
      <Route path='/createActivity' component={ActivityForm} />
    </Container>
    </div>
  );
}

export default observer(App);