import { ActivityIndicator, Image, Linking, SafeAreaView, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { apiURL, api_token, MYAPP, storeData } from '../../utils/localStorage';
import axios from 'axios';
import RenderHtml from 'react-native-render-html';
import VideoPlayer from 'react-native-video-player';
import WebView from 'react-native-webview';
import YoutubePlayer from "react-native-youtube-iframe";

export default function Menu1a({ navigation, route }) {
    const item = route.params;
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.primary,
        }}>
            <View style={{
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Text style={{

                    flex: 1,
                    color: colors.secondary,
                    paddingLeft: 10,
                    fontSize: 18,
                    fontFamily: fonts.sugar[600]
                }}>{item.label}</Text>
                <TouchableWithoutFeedback onPress={() => Linking.openURL('https://chat.whatsapp.com/LMynyArSQtM1aQwZ8lBUOw')}>
                    <View style={{

                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image source={require('../../assets/diskusi.png')} style={{
                            width: 50,
                            height: 50,
                            resizeMode: 'contain'
                        }} />

                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <View style={{

                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image source={require('../../assets/back.png')} style={{
                            width: 50,
                            height: 50,
                            resizeMode: 'contain'
                        }} />

                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={{
                flex: 1,
                padding: 10,
            }}>
                <Text style={{

                    fontFamily: fonts.sugar[400],
                    fontSize: 14,
                    textAlign: 'justify',
                    marginBottom: 20,
                }}>
                    Siapkan hatimu untuk menyaksikan video yang mengungkap tabir kegelapan di balik perdagangan terlarang. Mari kita bersatu untuk mengakhiri kejahatan terhadap makhluk laut yang rentan! Saksikan video berikut!
                </Text>
                <YoutubePlayer
                    height={300}
                    videoId={'rSkZIxbVg9I'}
                    webViewProps={{
                        injectedJavaScript: `
                  var element = document.getElementsByClassName('container')[0];
                  element.style.position = 'unset';
                  element.style.paddingBottom = 'unset';
                  true;
                `,
                    }}
                />
                <Text style={{
                    marginTop: 20,
                    fontFamily: fonts.secondary[400],
                    fontSize: 12,
                    color: colors.secondary
                }}>Sumber : https://youtu.be/rSkZIxbVg9I?si=J1jDCZEewSsNpxVS</Text>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})