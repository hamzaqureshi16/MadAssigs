import { StyleSheet } from "react-native";

const AuthStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#bfbfbf",
        alignItems: "center",
        justifyContent: "center",
    },
    heading:{
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20,
    },
    Button:{
        marginTop: 20,
        backgroundColor: "#592782",
        padding: 10,
        borderRadius: 10,
        width: 200,
    },
    ButtonText:{
        color: "#fff",
        textAlign: "center",
        fontSize: 20,
    },
    input:{
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        width: 300,
        marginBottom: 20,
    },
    inputContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    text:{
        color: "#000",
        fontSize: 20,
        marginBottom: 20,
    },
    picker:{
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        width: 300,
        marginBottom: 20,
    },
    item:{
        color: "#fff",
        fontSize: 20,
        padding:20,
        borderRadius:30,
        display:"flex",
        margin:10,
        width:200,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "#592782",
    },
    itemText:{
        color: "#fff",
        fontSize: 20,
    },
    card:{
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        width: 300,
        marginBottom: 20,
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        alignItems:"center",

    },
    search:{
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        width: 300,
        marginBottom: 20,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    }
    });

export { AuthStyles }