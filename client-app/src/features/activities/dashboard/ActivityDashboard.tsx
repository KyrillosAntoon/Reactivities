import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';

interface Props{
    activities: Activity[];
    selectedActivity: Activity | undefined; // Activity or Undefined
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;

}
export default function ActivityDashboard({activities,selectedActivity, selectActivity,  cancelSelectActivity, editMode, openForm, closeForm, createOrEdit} : Props) { // Destructures Activities from Props
    return(
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities} selectActivity={selectActivity} />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity  && !editMode && //Anything to the right of && will only execute of the left element isn't null
                <ActivityDetails 
                activity={selectedActivity} 
                cancelSelectActivity={cancelSelectActivity}
                openForm={openForm} />
            }
            {editMode &&
                            <ActivityForm closeForm={closeForm} activity={selectedActivity} createOrEdit={createOrEdit}/>
            }
            </Grid.Column>
        </Grid>
    )
}