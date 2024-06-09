import {registerSheet, SheetProps} from 'react-native-actions-sheet';
import { View, Text, TextInput, KeyboardAvoidingView } from 'react-native'; 
import ActionSheet from 'react-native-actions-sheet';
import { useState } from 'react';
import { Sprout } from 'lucide-react-native';


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
    <ActionSheet id='habit-create-sheet' closable containerStyle={{height: 500, borderRadius: 64}} gestureEnabled={true}
    headerAlwaysVisible={false}
    initialOffsetFromBottom={2}
    indicatorStyle={{
      width: 50, 
      height: 4.81, 
      marginTop: 10, 
      marginBottom: 15,
      borderRadius: 2,
    }}>
      <KeyboardAvoidingView behavior={(Platform.OS === 'ios') ? 'padding' : null}> 
      <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', padding: 32}}> 
        <Sprout size={48} color='#344E41' /> 
        <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 32, color: '#344E41', letterSpacing: '-0.6em'}}>Start a New Habit Today!</Text>    
        <Text style={{fontSize: 16, marginBottom: 8, color: '#344E41', letterSpacing: '-0.6em', textAlign: 'left', marginRight: 'auto', fontWeight: '600'}}>What would you like to achieve?</Text> 
        <TextInput  
          className='w-full h-12 border border-[#D2D5DA] shadow rounded-lg px-4 mt-2  text-black'
          style={{width: '100%', height: 48, borderColor: '#D2D5DA', borderWidth: 1, borderRadius: 8, padding: 16, marginBottom: 16}} 

          placeholderTextColor={'#344E4155'} 
          placeholder="Name"
          selectionColor={'#344E41'} 
             
        />
      </View>
      </KeyboardAvoidingView>  
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