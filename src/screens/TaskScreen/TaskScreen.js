import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View, Image, TextInput, FlatList, Pressable } from "react-native";
import Title from "../../title/title";
import Colors from "../../assets/Colors";
import fonts from "../../assets";

function TaskScreen() {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('');
    const [enteredPriority, setEnteredPriority] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [errors, setErrors] = useState({});

    const priorityOrder = ['High', 'Medium', 'Low']
    function colors(enteredPriority) {
        switch (enteredPriority) {
          case 'Low':
            return 'green';
            break;
          case 'Medium':
            return 'yellow';
            break;
          case 'High':
            return 'red';
            break;
          default:
            return 'blue'
            break;
        }
      }
    function handlePriority(priority) {
        setEnteredPriority(priority);
        setModalVisible(false);
    }

    function addTask() {
        if (validateForm()) {
        setTasks((currentTasks) => [
            ...currentTasks,
            { id: Math.random().toString(), title: enteredTitle, description: enteredDescription, priority: enteredPriority }
        ]);

        setEnteredTitle('');
        setEnteredDescription('');
        setEnteredPriority('');
    }
    }

    function validateForm() {
        const errors = {};
        if (!enteredTitle) {
            errors.enteredTitle = '*Please Enter Title*';
        }
        if (!enteredPriority) {
            errors.enteredPriority = '*Please Enter Priority*';
        }
       
        if (!enteredDescription) {
            errors.enteredDescription = '*Please Enter Description*';
        }
        setErrors(errors);
         return Object.keys(errors).length === 0;
    }

    return (
        <View style={styles.rootContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.titlesText}>Enter Your Tasks</Text>
            </View>
            <View>
                <Text style={styles.titleText}>Title</Text>
                <TextInput
                    style={styles.inputField}
                    placeholder="Enter Title"
                    placeholderTextColor={Colors.textColor}
                    value={enteredTitle}
                    onChangeText={setEnteredTitle}
                />
                {errors.enteredTitle && <Text style={styles.error}>{errors.enteredTitle}</Text>}
            </View>
            <View>
                <Text style={styles.titleText}>Description</Text>
                <TextInput
                    style={styles.inputField}
                    placeholderTextColor={Colors.textColor}
                    placeholder="Enter Description"
                    value={enteredDescription}
                    onChangeText={setEnteredDescription}
                />
                {errors.enteredDescription && <Text style={styles.error}>{errors.enteredDescription}</Text>}
            </View>
            <View>
                <Text style={styles.titleText}>Priority</Text>
            </View>

            <Pressable
                style={styles.button}
                onPress={() => {setModalVisible(true)}}
            >
                <Text style={styles.buttonsText}>
                    {enteredPriority ? `${enteredPriority}` : `Select Priority`}
                </Text>
                <Image style={styles.image} source={require('../../assets/images/dropDown.png')} />
            </Pressable>
            {errors.enteredPriority && <Text style={styles.error}>{errors.enteredPriority}</Text>}

            <TouchableOpacity style={styles.addButton} onPress={addTask}>
                <Text style={styles.addButtonText}>Add Task</Text>
            </TouchableOpacity>
            <FlatList
                data={tasks}
                renderItem={({ item }) => (
                    <View style={styles.flatListRoot}>
                        <View style={styles.flatContainer}>
                            <View style={[styles.flatList , {backgroundColor: colors(item.priority)}]}>
                                <Text style={styles.flatText}>Title : {item.title}</Text>
                                <Text style={styles.flatText}>Description : {item.description}</Text>
                                <Text style={styles.flatText}>Priority : {item.priority}</Text>
                            </View>
                        </View>
                        <View styles={{ margin: 5 }}>

                        </View>
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />
            <Modal
                animationType="slide"
                visible={modalVisible}
                transparent={true}
                
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalImage}>
                        <Text style={styles.textModal}>Select Your Priority</Text>
                        <TouchableOpacity style={styles.cross} onPress={() =>  setModalVisible(false)}>
                        <Image style={styles.image} source={require('../../assets/images/cross.png')} />

                        </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={[styles.buttons,{backgroundColor:'#db1c1c'}]} onPress={() => handlePriority('High')}>
                            <Text style={styles.buttonText}>High Priority</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.buttons,{backgroundColor:'#c0a119'}]} onPress={() => handlePriority('Medium')}>
                            <Text style={styles.buttonText}>Medium Priority</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.buttons,{backgroundColor:'#3ba148'}]} onPress={() => handlePriority('Low')}>
                            <Text style={styles.buttonText}>Low Priority</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default TaskScreen;
const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: Colors.backgroundSignup,
        flex: 1,
        padding: 15,
    },
    titleContainer: {
        marginTop: 50,
        textAlign:'center',
        borderWidth:2,
        marginLeft:85,
        width:220,
        height:50,
        padding:5
        
    },
    cross:{
        justifyContent:'center'
    },
    titlesText:{
        fontSize:24,
        textAlign:'center',
        fontFamily:fonts.ubuntuBoldItalic,
        color:Colors.signupContainer
    },
    inputField: {
        borderWidth: 2,
        padding: 10,
        margin: 15,
        fontSize:17,
        color:Colors.textColor,
        fontFamily:fonts.ubuntuItalic
        
    },
    image: {
        marginRight: 5,
        height: 15,
        width: 15,
    },
    modalImage:{
        flexDirection:'row',
        margin:5,
        justifyContent:"space-between"
    },
    button: {
        width: 355,
        paddingTop: 8,
        margin: 10,
        height: 50,
        alignItems: 'center',
        borderWidth: 2,
        justifyContent: 'space-between',
        padding: 10,
        flexDirection: 'row',
        fontFamily:fonts.ubuntuItalic

    },
    buttons: {
        backgroundColor: Colors.buttonColors,
        paddingTop: 8,
        margin: 10,
        height: 50,
        alignItems: 'center',
        color: Colors.textHome,
        borderWidth: 1,
        justifyContent: 'center',
        borderRadius: 5,
       
    },
    textModal: {
        padding: 10,
        fontSize: 20,
        color: Colors.textmodal,
        textAlign:'center',
        fontFamily:fonts.ubuntuItalic

    },
    modalContainer: {
        backgroundColor: Colors.textHome,
        height: '40%',
        width: '75%',
        borderRadius: 15,
        justifyContent:'center'
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 17,
        color: Colors.textHome,
        fontFamily:fonts.ubuntuBoldItalic
    },
    buttonsText: {
        padding: 4,
        fontSize:17,
        color:Colors.textColor,
        fontFamily:fonts.ubuntuItalic,
    },
    addButton: {
        backgroundColor: Colors.buttonColors,
        padding: 10,
        margin: 10,
        marginLeft: 75,
        width: 250,
        borderRadius: 5,
        alignItems: 'center',

    },
    addButtonText: {
        fontSize: 18,
        color: Colors.textHome,
        fontFamily:fonts.ubuntuItalic
    },
    titleText: {
        marginLeft: 15,
        fontSize:19,
        color:Colors.textColor,
        // fontWeight:'700',
        fontFamily:fonts.ubuntuBoldItalic,
        // backgroundColor:'red'
    },
    flatList: {
        backgroundColor: '#5691a8',
        padding: 10,
        borderRadius:15,
    },
    flatContainer: {
        borderColor: '#24757a',
        borderWidth: 2,
        width: 350,
        margin: 10,
        borderRadius: 15
    },
    flatText: {
        // borderBottomWidth:2
        fontSize: 17,
        color: 'white',
        fontFamily:fonts.ubuntuItalic
    },
    flatListRoot: {
        backgroundColor: '#2d748a',
        flex: 1,
        marginBottom: 10,
        borderRadius: 10,
    },
    error:{
        color:Colors.errorColor,
        marginLeft:10
    }
});
