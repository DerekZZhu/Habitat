import {registerSheet, SheetProps} from 'react-native-actions-sheet';
import { View, Text, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Pressable } from 'react-native'; 
import ActionSheet from 'react-native-actions-sheet';
import { useState } from 'react';
import { Sprout } from 'lucide-react-native';
import DropDownPicker from 'react-native-dropdown-picker';


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
      <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'start', width: '100%', padding: 32}}> 
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: 16}}> 
          <Text style={{fontSize: 16, marginBottom: 8, color: '#344E41', letterSpacing: '-0.6em', textAlign: 'left', marginRight: 'auto', fontWeight: '500'}}>{props.payload.dayCreated}</Text> 
          <Text style={{fontSize: 16, marginBottom: 8, color: '#344E41', letterSpacing: '-0.6em', textAlign: 'right', fontWeight: '500'}}>Started {props.payload.totalDaysSinceCreation} days ago</Text>
        </View> 
        <View style={{display: 'flex', flexDirection: 'column', marginBottom: 16}}>
          <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 8, color: '#344E41', letterSpacing: '-0.6em', fontStyle: 'italic'}}>{props.payload.name}</Text> 
          <Text style={{fontSize: 16, marginBottom: 8, color: '#344E41', letterSpacing: '-0.5em', textAlign: 'left', marginRight: 'auto', fontWeight: '500'}}>{props.payload.description}</Text> 
        </View> 


        <Text style={{fontSize: 16, marginBottom: 8, color: '#344E41', letterSpacing: '-0.6em', textAlign: 'left', marginRight: 'auto', fontWeight: '500'}}>Completed your habit today?</Text>
        <Pressable style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: 16, padding: 16, backgroundColor: '#344E41', borderRadius: 16}}>
          <Text style={{fontSize: 16,  color: '#FFFFFF', letterSpacing: '-0.6em', textAlign: 'left', margin: 'auto', fontWeight: '500'}}>{props.payload.completed ? 'Completed' : 'Check Off'}</Text>
        </Pressable>   
      </View> 
    </ActionSheet> 
  ); 
}

function HabbitCreateSheet() {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [frequency, setFrequency] = useState(null);

  const frequencys = [
    {label: 'Daily', value: 'daily'},
    {label: 'Weekly', value: 'weekly'},
    {label: 'Monthly', value: 'monthly'},
  ]

  // call database to set the habit

  return (  
    <ActionSheet id='habit-create-sheet' closable containerStyle={{height: 650, borderRadius: 64}} gestureEnabled={true}
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
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> 
        <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', padding: 32}}> 
          <Sprout size={48} color='#344E41' /> 
          <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 32, color: '#344E41', letterSpacing: '-0.6em'}}>Start a New Habit Today!</Text>    
          
          <Text style={{fontSize: 16, marginBottom: 8, color: '#344E41', letterSpacing: '-0.6em', textAlign: 'left', marginRight: 'auto', fontWeight: '600'}}>How often would you like to do this?</Text>
          <DropDownPicker
            open={open}
            value={frequency}
            style={{width: '100%', height: 48, borderColor: '#D2D5DA', borderWidth: 1, borderRadius: 8, padding: 16, marginBottom: 16}}
            items={frequencys}
            setOpen={setOpen}
            setValue={setFrequency}
          />
            
          <Text style={{fontSize: 16, marginBottom: 8, color: '#344E41', letterSpacing: '-0.6em', textAlign: 'left', marginRight: 'auto', fontWeight: '600'}}>What would you like to achieve?</Text> 
          <TextInput  
            className='w-full h-12 border border-[#D2D5DA] shadow rounded-lg px-4 mt-2  text-black'
            style={{width: '100%', height: 48, borderColor: '#D2D5DA', borderWidth: 1, borderRadius: 8, padding: 16, marginBottom: 16}} 
            onChangeText={text => setName(text)}
            placeholderTextColor={'#344E4155'} 
            placeholder="Set a goal for yourself"
            selectionColor={'#344E41'} 
              
          />
          <Text style={{fontSize: 16, marginBottom: 8, color: '#344E41', letterSpacing: '-0.6em', textAlign: 'left', marginRight: 'auto', fontWeight: '600'}}>Write a brief description</Text>
          <TextInput  
            className='w-full h-12 border border-[#D2D5DA] shadow rounded-lg px-4 mt-2  text-black'
            style={{width: '100%', height: 48, borderColor: '#D2D5DA', borderWidth: 1, borderRadius: 8, padding: 16, marginBottom: 16}} 
            onChangeText={text => setDescription(text)}  
            placeholderTextColor={'#344E4155'}  
            placeholder="Describe your goal" 
            selectionColor={'#344E41'} 
              
          />

        </View>
        </TouchableWithoutFeedback>
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
        daysWatered: number;
        streak: number;
        frequency: string;
        completed: boolean;
        isPrivate: boolean;
      };
    }>
    'habit-create-sheet': SheetDefinition; 
  }  
}

export {};