import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Animated, TouchableOpacity } from 'react-native';

export default class InnerPage extends Component {
    static navigationOptions = {
        title: 'Second Page',

    };
    state = {
        ready: false,
        SlideInLeft: new Animated.Value(0),
        slideUpValue: new Animated.Value(0),
        fadeValue: new Animated.Value(0)
    };


    _start = () => {
        return Animated.parallel([
            Animated.timing(this.state.SlideInLeft, {
                toValue: 1,
                duration: 1200,
                useNativeDriver: true
            })
        ]).start();
    };

    render() {
        let { SlideInLeft } = this.state;
        const text = this.props.navigation.getParam('data', 'nothing sent')
        const v = text
        console.log(v)
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.btn} onPress={() => this._start()}>
                    <Text style={styles.textBtn}>Start</Text>
                </TouchableOpacity>

                <View >
                    <Animated.View
                        style={{
                            transform: [
                                {
                                    translateY: SlideInLeft.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [-600, 0]
                                    })
                                }
                            ],
                        }}
                    >

                        <Image
                            style={{ width: 160, height: 160, borderRadius: 400 / 2 }}
                            // source={{ uri: 'http://placehold.it/32x32' }}
                            source={require('../images/face.png')}
                        />
                    </Animated.View>
                </View>

                <Animated.View
                    style={{
                        transform: [
                            {
                                translateY: SlideInLeft.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [600, 0]
                                })
                            }
                        ],

                    }}
                >
                    <View style={styles.head}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#676767' }}>
                            {v.item.firstname}
                        </Text>
                        <Text style={{ fontWeight: 'bold', color: '#6adde8' }}>HOVER OVER CONTAINER</Text>
                        <View style={{ marginTop: 50, alignItems: "center" }}>
                            <Text style={{ fontSize: 15 }}>
                                {v.item.firstname} {v.item.surname}
                            </Text>
                            <Text style={{ fontSize: 15 }}>
                                Company: {v.item.company}
                            </Text>
                            <Text style={{ fontSize: 15 }}>
                                Email:{v.item.email}
                            </Text>
                            <Text style={{ fontSize: 15 }}>
                                Phone: {v.item.phone}
                            </Text>
                            <Text style={{ fontSize: 15 }}>
                                Gender:{v.item.gender}  Aage:{v.item.age}
                            </Text>
                        </View>
                    </View>
                </Animated.View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 140,
        marginBottom: 140,
        marginLeft: 30,
        marginRight: 30,
        alignItems: 'center',
        padding: 15,
        position: 'absolute',
        borderTopLeftRadius:55,
        borderBottomRightRadius:55
    },
    head: {
        flex: 1,
        alignItems: 'center',
    }
});