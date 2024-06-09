import {registerSheet, SheetProps} from 'react-native-actions-sheet';
import { View, Text } from 'react-native'; 
import ActionSheet from 'react-native-actions-sheet';


const HabitSheet = () => {
  return (
    <ActionSheet id='habit-sheet' closable containerStyle={{height: 500, borderRadius: 32}} gestureEnabled={true}
    headerAlwaysVisible={false}
    initialOffsetFromBottom={2}
    indicatorStyle={{
      width: 50, 
      height: 4.81, 
      marginTop: 10,
      marginBottom: 15,
      borderRadius: 2,
    }}>
      <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', padding: 32}}> 
        
      </View>
    </ActionSheet>
  );
} 


function HabitExploreSheet(props: SheetProps<"habit-explore-sheet">) {
  return (
    <ActionSheet id={props.sheetId} closable containerStyle={{height: 400, borderRadius: 32}} gestureEnabled={true}
    headerAlwaysVisible={false}
    initialOffsetFromBottom={2}
    indicatorStyle={{
      width: 50, 
      height: 4.81, 
      marginTop: 10,
      marginBottom: 15,
      borderRadius: 2,
    }}>
      <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', padding: 32}}> 
        <Text>{props.payload.name}</Text> 
      </View>
    </ActionSheet>
  );
}

function HabbitCreateSheet() {
  // call database to set the habit

  return (
    <ActionSheet id='habit-create-sheet' closable containerStyle={{height: 500, borderRadius: 32}} gestureEnabled={true}
    headerAlwaysVisible={false}
    initialOffsetFromBottom={2}
    indicatorStyle={{
      width: 50, 
      height: 4.81, 
      marginTop: 10,
      marginBottom: 15,
      borderRadius: 2,
    }}>
      <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', padding: 32}}> 
        <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 16, color: '#344E41'}}>Create a new habit</Text> 
        
      </View>
    </ActionSheet>
  );
}


  


registerSheet('habit-sheet', HabitSheet);
registerSheet('habit-explore-sheet', HabitExploreSheet); 
registerSheet('habit-create-sheet', HabbitCreateSheet); 
 
// We extend some of the types here to give us great intellisense
// across the app for all registered sheets.
declare module 'react-native-actions-sheet' {
  interface Sheets {
    'habit-sheet': SheetDefinition;
    'habit-explore-sheet': SheetDefinition<{
      payload: {
        name: string;
        description: string;
        dayCreated: string;
        totalDaysSinceCreation: number;
        streak: number;
        frequency: string;
        completed: boolean;
      };
    }>
    'habit-create-sheet': SheetDefinition; 
  }  
}

export {};