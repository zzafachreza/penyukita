import { ActivityIndicator, Image, Linking, SafeAreaView, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { apiURL, api_token, MYAPP, storeData } from '../../utils/localStorage';
import axios from 'axios';
import RenderHtml from 'react-native-render-html';
import { Icon } from 'react-native-elements';
import Pdf from 'react-native-pdf';

export default function Menu7({ navigation, route }) {
    const item = route.params;
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
        axios.post(apiURL + 'artkel_pdf', {
            judul: route.params.label
        }).then(res => {
            console.log(res.data);
            setData(res.data[0])
        }).finally(() => {
            setLoading(false)
        })
    }, []);
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
            </View>

            {!loading &&
                <View style={{
                    flex: 1,

                }}>
                    <Pdf
                        style={{
                            height: windowHeight,
                            width: windowWidth,
                            backgroundColor: colors.primary
                        }}
                        minScale={1.0}
                        maxScale={1.0}
                        scale={1.0}
                        spacing={0}

                        trustAllCerts={false}
                        // source={{ uri: webURL + data.foto_pdf, cache: true }}
                        source={{
                            uri: data.pdf, cache: true
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
                            Linking.openURL(uri)
                        }}
                    />
                </View>
            }

            {
                loading && <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <ActivityIndicator size="large" color={colors.secondary} />
                </View>
            }

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})