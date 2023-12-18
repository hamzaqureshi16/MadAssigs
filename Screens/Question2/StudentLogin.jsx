import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View } from 'react-native'
import { AuthStyles } from '../../Styles/Auth.Style'
import { Text,TextInput,Button } from 'react-native-paper'
import { login } from '../../Redux/Slices/AuthSlice'
import { useDispatch } from 'react-redux'

const StudentLogin = () => {
    const dispatch = useDispatch()
    const [data, setData] = React.useState({
        registration: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
    })

    const reset = () => {
        setData({
            registration: '',
            password: '',
            check_textInputChange: false,
            secureTextEntry: true,
        })
    }

    const Login = async () => {
        try {
            const students = await AsyncStorage.getItem('students')
            if(students){
                const student = JSON.parse(students)
                const isStudent = student.find((item) => item.registration == data.registration.toLowerCase() && item.password == data.password)
                if(isStudent){
                    dispatch(login({
                        role: 'student',
                        username: isStudent.name,
                        registration: isStudent.registration,
                    }))

                    alert('student logged in')
                }
            }
            else{
                alert('no student found')
            }
            reset();
        } catch (error) {
            
        }
    }
  return (
    <View style={AuthStyles.container}>
      <Text style={AuthStyles.heading}>Student Login</Text>
      <TextInput
        label="Registration"
        value={data.registration}
        onChangeText={(text) => setData({ ...data, registration: text })}
        style={AuthStyles.input}
      />
      
    <TextInput
        label="Password"
        value={data.password}
        onChangeText={(text) => setData({ ...data, password: text })}
        style={AuthStyles.input}
        secureTextEntry={data.secureTextEntry}
        right={<TextInput.Icon name={data.secureTextEntry ? 'eye-off' : 'eye'} onPress={() => setData({ ...data, secureTextEntry: !data.secureTextEntry })} color="black" />}
    />

      <Button
        mode="contained"
        style={AuthStyles.Button}
        onPress={() => Login()}
      >
        Login
      </Button>
    </View>
  )
}

export default StudentLogin
