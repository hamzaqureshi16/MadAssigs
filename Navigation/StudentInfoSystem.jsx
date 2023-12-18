import React, { useEffect } from "react";
import Login from "../Screens/Question2/Login";
import { useSelector, useDispatch } from "react-redux";
import { Text } from "react-native";
import { View } from "react-native";
import { AuthStyles } from "../Styles/Auth.Style";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import RegisterStudent from "../Screens/Question2/RegisterStudent";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SearchStudent from "../Screens/Question2/SearchStudent";
import StudentLogin from "../Screens/Question2/StudentLogin";
import { logout } from "../Redux/Slices/AuthSlice";
import StudentHome from "../Screens/Question2/StudentHome";
import RegisterCourses from "../Screens/Question2/RegisterCourses";

const StudentInfoSystem = () => {
  const Auth = useSelector((state) => state.Auth);
  const Tab = createMaterialBottomTabNavigator();

  const AdminNav = () => {
    const dispatch = useDispatch();

    return (
      <Tab.Navigator
        options={{
          topBar: {
            visible: true,
          },
        }}
 
      >
        <Tab.Screen
          name="Register"
          component={RegisterStudent}
          options={{
            tabBarLabel: "Register",
            tabBarIcon: ({ color }) => (
              <Icon name="account-plus" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchStudent}
          options={{
            tabBarLabel: "Search",
            tabBarIcon: ({ color }) => (
              <Icon name="account-search" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Logout"
          component={SearchStudent}
          options={{
            tabBarLabel: "Logout",
            tabBarIcon: ({ color }) => (
              <Icon name="logout" color={color} size={26} />
            ),
          }}
          listeners={({ navigation }) => ({
            tabPress: () => {
              dispatch(logout());
            },
          })}
        />
      </Tab.Navigator>
    );
  };

  const AuthNav = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="AdminLogin"
          component={Login}
          options={{
            tabBarLabel: "Admin Login",
            tabBarIcon: ({ color }) => (
              <Icon name="login" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="StudentLogin"
          component={StudentLogin}
          options={{
            tabBarLabel: "Student Login",
            tabBarIcon: ({ color }) => (
              <Icon name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };


  const StudentNav = () => {
    return (
      <Tab.Navigator
        options={{
          headershown: true,
          topBar: {
            visible: true,
          }
        }}
        >
        <Tab.Screen
          name="StudentHome"
          component={StudentHome}
          options={{

            tabBarLabel: "Home",  
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="RegisterCourses"
          component={RegisterCourses}
          options={{
            tabBarLabel: "Register Courses",
            tabBarIcon: ({ color }) => (
              <Icon name="book" color={color} size={26} />
            ),
          }}
        />


        </Tab.Navigator>
    )
  }
  return (
    <>
      {Auth.Authorized && Auth.role == "admin" ? (
        <AdminNav />
      ) : Auth.role == "student" ? (
        <StudentNav/>
      ) : (
        <>
          <AuthNav />
        </>
      )}
    </>
  );
};

export default StudentInfoSystem;
