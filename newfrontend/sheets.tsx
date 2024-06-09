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


  


registerSheet('habit-sheet', HabitSheet);
registerSheet('habit-explore-sheet', HabitExploreSheet); 
 
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
  }  
}

export {};