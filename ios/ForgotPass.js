import React,{Component} from 'react';
import{StyleSheet,Text,View,TextInput,TouchableOpacity,Keyboard,KeyboardAvoidingView} from 'react-native';

export default class ForgotPass extends Component
{
    
       
     
    render()
    {
        return(

            

<View style={styles.container}>
    
<View style={styles.subview}>

    <Text style={styles.subTxt}>Forgot Password</Text>
    
    
    <TextInput style={styles.nameInput} placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}/>

    
<Text style={styles.forgot} onPress={()=>this.props.navigation.navigate('Login')}>Login Here
</Text>


<TouchableOpacity style={styles.btn}
onPress={()=>this.props.navigation.navigate('HomeScreen')}>
    <Text style={styles.btnTxt}>SEND</Text>
</TouchableOpacity>


</View>
    
    

</View>

    
    );
    }
}

const styles=StyleSheet.create(
    {

        container:{
            flex:1,
             backgroundColor:'orange',
             justifyContent:'center',
             height:700,
        

        },
        subview: {
            backgroundColor:'white',
            height:430,
            marginTop:300,
            borderTopRightRadius:40,
            borderTopLeftRadius:40,

        },
        headerTxt:{
            fontWeight:'bold',
            color:'white',
            position:'absolute'
        },
        subTxt:{
            fontSize:30,
            color:'black',
            marginTop:20,
            fontWeight:'bold',
            marginLeft:40,


        },
        nameInput:{
            height:40,
            width:270,
            marginLeft:40,
            borderBottomWidth:2,
           marginTop:30,

        },
        btn:{

            height:50,
            width:100,            
            backgroundColor:'green',
            borderRadius:80,
            borderWidth:2,
            marginLeft:120,
            marginTop:100,
            justifyContent:'center',
            alignItems:'center',

        },
        btnTxt:{
            color:'white',
            fontWeight:'bold',
            fontSize:18,
        },

        endTxt:
        {
            fontSize:15,
            marginTop:30,
            marginLeft:30,
            fontWeight:'bold',

            
        },
        endView:{
            flexDirection:'row',
            justifyContent:'space-between',
            bottom:50,


        },
        endBtn:{
            marginRight:80,


        },
        loginTxt:{

            fontSize:22,
            marginTop:30,
            bottom:20,
            color:'red',
            marginLeft:20,

        },
        forgot:{
            marginLeft:210,
            top:40,
            fontSize:17,
            color:'red',
        }
    
    });