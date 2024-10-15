import { StyleSheet, Text } from "react-native";
import Colors from "../assets/Colors";



function Title({children}) {
    return <Text style={styles.title}>{children}</Text>
}
const styles=StyleSheet.create({
    title:{
        fontSize:20,
        // fontWeight:'bold',
        backgroundColor:Colors.buttonColors,
        color:Colors.textHome,
        textAlign:'center',
        borderWidth:2,
        borderColor:Colors.inputColor,
        padding:14,
        maxWidth:'100%',
        width:200,
        borderRadius:20,
        marginLeft:40
        
    }
})
export default Title;