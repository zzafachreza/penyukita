import { ActivityIndicator, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { apiURL, api_token, MYAPP, storeData } from '../../utils/localStorage';
import axios from 'axios';
import RenderHtml from 'react-native-render-html';
import { Icon } from 'react-native-elements';
import Pdf from 'react-native-pdf';

export default function Menu8({ navigation, route }) {
    const item = route.params;


    const MyMenu = ({ label, target }) => {
        return (
            <TouchableWithoutFeedback onPress={() => navigation.navigate(target, {
                label: label
            })}>
                <View style={{
                    marginVertical: 10,
                    height: 60,
                    borderRadius: 5,
                    backgroundColor: colors.secondary,
                    padding: 10,
                    borderBottomWidth: 5,
                    borderBottomColor: colors.warning,
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        flex: 1,
                        fontFamily: fonts.sugar[600],
                        color: colors.white,
                        fontSize: 18,
                    }}>{label}</Text>
                    <Icon type='ionicon' name='chevron-forward-circle' color={colors.white} />
                </View>
            </TouchableWithoutFeedback>
        )
    }
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.primary,
        }}>
            {/* <View style={{
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Image source={item.img} style={{
                    width: 60,
                    height: 60
                }} />
                <Text style={{
                    flex: 1,
                    color: colors.secondary,
                    paddingLeft: 10,
                    fontSize: 18,
                    fontFamily: fonts.sugar[600]
                }}>{item.label}</Text>
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
            </View> */}

            <View style={{
                flex: 1,

            }}>
                <Pdf
                    style={{
                        flex: 1,

                        backgroundColor: colors.primary
                    }}
                    minScale={2.9}
                    maxScale={2.9}
                    scale={2.90}


                    trustAllCerts={false}
                    // source={{ uri: webURL + data.foto_pdf, cache: true }}
                    source={{
                        uri: 'https://penyu.okeadmin.com/petunjuk.pdf', cache: true
                    }}
                    onLoadComplete={(numberOfPages, filePath) => {
                        console.log(`Number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page, numberOfPages) => {
                        console.log(`Current page: ${page}`);
                    }}
                    onError={(error) => {
                        console.log(error);
                    }}
                    onPressLink={(uri) => {
                        console.log(`Link pressed: ${uri}`);
                    }}
                />
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})