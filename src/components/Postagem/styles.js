import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    fotoPerfilPostagem:{
        borderRadius:50,
        height:32,
        width:32,
        marginLeft:16
    },
    nomePerfilPostagem:{
        fontFamily: 'normal',
        fontWeight:'bold',
        marginLeft:10,
    },
    fotoNomePostagem:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:8,
    },
    dots:{
        flex:1,
        alignItems:'flex-end',
        marginRight:8
    },
    iconsPub:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:8,
    },
    icon:{
        marginLeft:10,
    },
    comentContainer:{
        flex:1,
        paddingHorizontal:16,
    },
    curtidoText: {
        fontFamily:'Roboto'
    },
    curtidoTextBold: {
        fontFamily:'Roboto-Bold'
    },
    todosComentariosText: {
        color:'#999',
        marginVertical:2,
    },
    tempoText:{
        fontSize:10,
        color:'#999',
        marginVertical:2,
    },
    counterBox: {
        zIndex:2,
        backgroundColor:'rgba(0,0,0,0.85)',
        padding:2,
        paddingHorizontal:12,
        borderRadius:200,
        position:'absolute',
        alignItems:'center',
        justifyContent:'center',
        right:8,
        top:8,
    },
    counterText: {
        color:'#FFF'
    }
});

export default styles