import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFF',
    },
    statusBar:{
        flex:1,
        flexDirection:'row',
        borderWidth:0.17,
        borderColor:'#bababa',
        paddingVertical:8,
    },
    plusIconStatus:{
        borderWidth:1.4,
        borderColor:'#FFF',
        borderRadius:50 ,
        position:'absolute',
        backgroundColor: '#FFF',
    },
    imageStatus:{
        borderRadius:50,
        height:60,
        width:60,
        marginTop:8
    },
    meuStoryBox:{
        alignItems:'center', 
        justifyContent:'center',
        marginHorizontal:8,
        flex:1,
    },
    topBar:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:10,
    },
    cameraIcon:{
        marginLeft:8,
    },
    instagramLogo:{
        height:32,
        width:89.51,
        marginLeft:16,
    },
    iconPlane:{
        alignSelf:'flex-end',
        marginRight:8,
    },
    nomeStatus:{
        fontSize:12,
        marginTop:8,
    }
 
});

export default styles
