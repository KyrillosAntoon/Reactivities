import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Header, List } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './navbar';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities').then(resopnse => {
      setActivities(resopnse.data);
    })
  },[]);




  return (
    <Fragment >
      <NavBar />
      <Container style={{marginTop: '7em'}}>
      <List>
          {activities.map((activitiy)=> (
            <List.Item key={activitiy.id}>
              {activitiy.title}
              </List.Item>
          ))}
        </List>
      </Container>

    </Fragment>
  );
}

export default App;
