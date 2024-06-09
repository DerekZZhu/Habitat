import AsyncStorage from '@react-native-async-storage/async-storage';


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
