import React from 'react'
import { Text, View, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import styles from './styles'

const StatusCircle = (props) => {
        return (
            <View style={styles.statusBox}>       
                <LinearGradient style={styles.borderGradientStatus} colors={['#cc2a53','#ed7c2c','#fade25']} start={[0.3,-0.1]}>
                    <View style={styles.whiteBorderStatus} >
                        <Image style={styles.imageStatus} source={{uri:props.foto}} />
                    </View>
                </LinearGradient>
                <Text style={styles.nomeStatus}>{props.name}</Text>
            </View>
        )
}

export default StatusCircle
