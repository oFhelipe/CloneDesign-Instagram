import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    statusBox:{
        width:68, 
        marginHorizontal:8
    },
    borderGradientStatus:{
        borderRadius:50,
        height:68,
        width:68,
        justifyContent:'center',
        alignItems:'center',
        marginTop:8,
        marginBottom:4,
    },
    whiteBorderStatus:{
        borderRadius:50,
        height:64,
        width:64,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#FFF',
    },
    imageStatus:{
        borderRadius:50,
        height:60,
        width:60,
    },
    nomeStatus:{
        alignSelf:'center',
        fontSize:12
    },
});

export default styles