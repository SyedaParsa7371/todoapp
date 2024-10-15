import { Button, FlatList, StyleSheet, Text, View ,Image} from "react-native"
import Colors from "../../assets/Colors";
import Title from "../../title/title";
import fonts from "../../assets";
import { TouchableOpacity } from "react-native-gesture-handler";


function HomeScreen( {route,navigation}) {
const {enteredUserName,enteredEmail}=route.params


 function TaskHandler(){
    navigation.navigate('TaskScreen')
 }

    return( 
        <View style={styles.rootContainer}> 
            <View style={styles.signupContainer}>
            <View style={styles.imageContainer}>
            <Text style={styles.textdatas}>Welcome {enteredUserName}</Text>
                        <Image style={styles.image} source={require('../../assets/images/sign.png')} />
                    </View>
                <Text style={styles.textdata}>User's Name:{enteredUserName}</Text>
                <Text style={styles.textdata}>User's Email:{enteredEmail}</Text>
            </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.addButton} onPress={TaskHandler}>
                <Text style={styles.textButton}>Add Task</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
export default HomeScreen;

const styles=StyleSheet.create({
    rootContainer:{
        backgroundColor:Colors.backgroundSignup,
        flex:1,
        
    },
    signupContainer:{ 
        backgroundColor:Colors.signupDetails,
        padding:50,
        margin:20,
        borderWidth:1,
        borderColor:Colors.inputColor,
        marginTop:100,
        borderRadius:20,
    },
    textdatas:{
        fontSize:25,
        textAlign:'center',
        color:Colors.textColor,
        fontFamily:fonts.ubuntuBoldItalic
    },
    addButton: {
        backgroundColor: Colors.buttonColors,
        padding: 10,
        margin: 10,
        width: 250,
        borderRadius: 5,
        alignItems: 'center',
    },
    textButton:{
        color:Colors.textHome,
        fontSize:17,
        fontFamily:fonts.ubuntuBoldItalic
    },
    textdata:{
        fontSize:19,
        textAlign:'center',
        color:Colors.textColor,
        fontFamily:fonts.ubuntuItalic
    },
    title:{
        height:20,
        width:150,
        marginBottom:25
    },
    buttonContainer:{
        margin: 10,
        marginBottom: 200,
        marginLeft:75,
        width:200,   
    },
    imageContainer: {
       marginBottom:10,
    },
    image: {
        marginLeft:70,
        height: 150,
        width: 150,
        borderRadius: 75,},
})