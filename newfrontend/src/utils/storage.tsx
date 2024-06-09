import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDatabase, ref, set, get, child } from '@firebase/database';

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
        
    } catch (error) {
        console.error("Failed to store data", error)
    }
}

const init_ = async (username, userId, email) => {
    user_data = {"username": username, 
                 "userId": userId,
                 "email": email,
                 "habits": {},
                 "friends": [],
                 "daily_streak": 0
                }
    try {
        await AsyncStorage.setItem("user_data", user_data)
    } catch (error) {
        console.error("Failed to store user_data")
    }
}

const addHabit = async (habit_id, habit_obj) => {
    const udata = await AsyncStorage.getItem("user_data")
    udata.habits[habit_id] = habit_obj

    try {
        await AsyncStorage.setItem("user_data", udata)
    } catch (error) {
        console.error("Failed to update user habits")
    }
}

const removeHabit = async(habit_id) => {
    const udata = await AsyncStorage.getitem("user_data")
    udata.habits.remove(habit_id)

    try {
        await AsyncStorage.setItem("user_data", udata)
    } catch (error) {
        console.error("Failed to update user habits")
    }
}

// naive method of doing flsuhing, could be just updating
const flushData = async () => {
    const udata = await AsyncStorage.getItem("user_data")
    try {
        await set(ref(db, 'users/' + userId), udata)
    } catch (error) {
        console.error("")
    }
}
