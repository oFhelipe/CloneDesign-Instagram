import React, { useState } from 'react'
import { View, Image, Text, Dimensions, TouchableOpacity } from 'react-native'
import { BaseButton } from 'react-native-gesture-handler'
import AutoHeightImage from 'react-native-auto-height-image'
import { MaterialCommunityIcons, AntDesign, SimpleLineIcons, Feather, FontAwesome } from '@expo/vector-icons'
import LottieView from 'lottie-react-native'

import styles from './styles'
import Carousel, { Pagination } from 'react-native-snap-carousel'

const Postagem = (props) => {

    const [heart, setHeart] = useState(false);
    const [playAnimation, setPlayAnimation] = useState(false);

    const [image, setImage] = useState(true);
    const [atualImage, setAtualImage] = useState(0);
    
    const [lastClick, setLastClick] = useState(0);

    const { name, foto, comentario } = props.data;

      async function handleLoveImage() {
            
            const time = new Date().getTime() - lastClick;
            
            if(time < 300){
                await setPlayAnimation(false);
                setHeart(true);    
                setPlayAnimation(true);    
                }

            setLastClick(new Date().getTime());
        }

        function handleChangeHeartIcon() {
                setHeart(!heart); 
                setPlayAnimation(!heart);
        }

        return (
            <View style={styles.postagemContainer}>
                    
            <View style={styles.fotoNomePostagem}>
                <Image style={styles.fotoPerfilPostagem}  source={require('../../assets/images/perfil.jpg')} />
                <Text style={styles.nomePerfilPostagem}>{name}</Text>
                <View style={styles.dots}>
                   <MaterialCommunityIcons  name='dots-vertical' size={20} color='#000'/> 
                </View>
            </View>
            
             <BaseButton onPress={handleLoveImage}>
                 
                {
                    Array.isArray(foto)
                    ? <>       
                        <Carousel
                                inactiveSlideScale={1}
                                sliderWidth={Dimensions.get('screen').width}
                                itemWidth={Dimensions.get('screen').width}
                                data={foto}
                                onSnapToItem={(index) => { setAtualImage(index) } }
                                renderItem={({item})=>{
                                    return (<View style={{flex:1, justifyContent:'center'}}>
                                                <AutoHeightImage 
                                                    width={Dimensions.get('screen').width} 
                                                    source={{uri:item}} />
                                            </View>
                                            );
                                }}/>
                                <View style={styles.counterBox}>
                            <Text style={styles.counterText}>{atualImage + 1}/{foto.length}</Text>
                        </View> 
                        </>
                    : <AutoHeightImage 
                    width={Dimensions.get('screen').width} 
                    source={{uri:foto}} />
                }
                
                {playAnimation ? <LottieView 
                    onAnimationFinish={()=>{setPlayAnimation(false)}}
                    source={require('../../assets/animations/HeartLike.json')} 
                    autoPlay={true}
                    loop={false}/>
                    : <></>}

             </BaseButton>
        
            <View style={styles.iconsPub}>
                
                <View style={{flexDirection:'row'}}>   
                    <TouchableOpacity onPress={handleChangeHeartIcon}>

                    {heart 
                        ? <AntDesign  style={styles.icon} name='heart' size={24} color='#ed4956'/> 
                        : <AntDesign  style={styles.icon} name='hearto' size={24} color='#000'/> 
                    }
                    
                    </TouchableOpacity>                                                    
                    <Feather style={styles.icon} name='message-circle' size={25} color='#000'/>
                    <SimpleLineIcons style={styles.icon} name='paper-plane' size={23} color='#000'/>
                </View>
                
                {Array.isArray(foto) && <Pagination
                                            dotsLength={foto.length}
                                            activeDotIndex={atualImage}
                                            dotStyle={{
                                                backgroundColor:"#0097FC",
                                                marginHorizontal: -4,
                                                height:6,
                                                width:6,
                                            }}
                                            inactiveDotStyle={{
                                                backgroundColor:"#ADADAD",
                                                marginHorizontal: -4,
                                                height:9,
                                                width:9,
                                                borderRadius:10,
                                            }}
                                            containerStyle={{
                                                paddingVertical:0,
                                                position:'absolute',
                                                alignSelf:'center',
                                                width:'100%'
                                            }}
                                            />}
                
                    <FontAwesome style={{marginRight:10}} name='bookmark-o' size={25} color='#000'/>
            
            </View>
            <View style={styles.comentContainer}>
                <Text style={styles.curtidoText}>
                    Curtido por <Text style={styles.curtidoTextBold}>pessoa 1</Text> e <Text style={styles.curtidoTextBold}>outras pessoas</Text>
                </Text>
                <Text style={styles.curtidoText}>
                    <Text style={styles.curtidoTextBold}>ofhen_</Text> {comentario}
                </Text>
                <Text style={styles.todosComentariosText}>
                    Ver todos os 10 comentários
                </Text>
                <Text style={styles.tempoText}>
                    Há 14 horas
                </Text>
            </View>
        </View>
        )
    
}

export default Postagem
