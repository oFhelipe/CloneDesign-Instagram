import React from 'react'
import { Text, View, Image, FlatList } from 'react-native'
import styles from './styles'
import { AntDesign, Feather, SimpleLineIcons } from '@expo/vector-icons'

import instagramLogo from '../../assets/images/logo.png'

import Dados from '../../assets/Dados/Dados.json'
import Postagem from '../../components/Postagem';
import StatusCircle from '../../components/StatusCircle';
import StatusData from '../../assets/Dados/StatusData.json'

const StatusBar = () => {

    return (
        <FlatList
            style={styles.statusBar}
            data={StatusData}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            keyExtractor={ item=>item.id }
            renderItem={({ item:status })=>{
                return <StatusCircle key={status.foto} name={status.name} foto={status.foto} />
            }}
            ListHeaderComponent={()=>{return(
                                    <View style={styles.meuStoryBox}>
                                        <View style={{alignItems:'flex-end', justifyContent:'flex-end'}}>
                                            <Image style={styles.imageStatus} source={require('../../assets/images/perfil.jpg')} />
                                            
                                            <View style={styles.plusIconStatus}>
                                            <AntDesign name="pluscircle" color='#28abff' size={16} /> 
                                            </View>
                                        </View>
                                        <Text style={styles.nomeStatus}>Seu Story</Text>
                                    </View>
                                );}}/>
    );

}

const Inicio = () => {   
        return (
                <View style={styles.container}>
                    <View style={styles.topBar}>
                        <Feather style={styles.cameraIcon} name='camera' size={26} color='#000' />
                        <Image style={styles.instagramLogo} source={instagramLogo} />
                        <View style={{flex:1}} >
                            <SimpleLineIcons style={styles.iconPlane} name='paper-plane' size={24} color='#000'/>
                        </View>
                    </View>

                    <FlatList
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={()=>{return (<StatusBar />);}}
                        data={Dados}
                        keyExtractor={item => item.id}
                        renderItem={({ item:post })=>{
                            return <Postagem key={post.foto} data={post} />
                            }}/>

                </View>
            
        )
}

export default Inicio
