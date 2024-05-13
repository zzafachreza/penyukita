import { ActivityIndicator, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, fonts, windowWidth } from '../../utils';
import { apiURL, api_token, MYAPP, storeData } from '../../utils/localStorage';
import axios from 'axios';
import RenderHtml from 'react-native-render-html';
import SoundPlayer from 'react-native-sound-player'
export default function Menu3a({ navigation, route }) {
    const item = route.params;

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [cek, setCek] = useState('');

    useEffect(() => {
        __GetTransaction();
    }, [])

    const __GetTransaction = () => {
        setLoading(true);
        axios.post(apiURL + 'artikel', {
            judul: item.label
        }).then(res => {
            setData(res.data[0]);
            setLoading(false);
        })
    }

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

            {!loading && <View style={{
                padding: 10,
                flex: 1,
            }}>
                <ScrollView showsVerticalScrollIndicator={false} style={{
                }}>
                    <Text style={{
                        fontFamily: fonts.sugar[400],
                        fontSize: 16
                    }}>Apa itu ekosistem? Ekosistem adalah suatu sistem ekologi yang terbentuk oleh hubungan timbal balik antara makhluk hidup dengan lingkungannya yang tidak terpisahkan. Terdapat dua komponen yang saling berinteraksi dalam ekosistem, yaitu komponen biotik dan komponen abiotik. Contoh komponen biotik adalah ikan, penyu, dan cumi-cumi sedangkan contoh komponen abiotik adalah air, batu, dan pasir.</Text>

                    <Text style={{
                        marginVertical: 10,
                        fontFamily: fonts.sugar[400],
                        fontSize: 16,
                        color: colors.warning
                    }}>Komponen biotik merupakan komponen…sedangkan komponen abiotik merupakan komponen... </Text>


                    <View style={{
                        marginBottom: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-around'
                    }}>
                        <TouchableOpacity onPress={() => {
                            setCek(0);
                            SoundPlayer.playSoundFile('oke', 'mp3')
                        }} style={{
                            width: windowWidth / 2.5,
                            padding: 10,
                            borderWidth: 1,
                            borderRadius: 10,
                            backgroundColor: cek == 0 && cek !== '' ? colors.success : colors.primary
                        }}>
                            <Text style={{
                                textAlign: 'center',
                                fontFamily: fonts.sugar[400],
                                fontSize: 16,
                                color: cek == 0 && cek !== '' ? colors.white : colors.black
                            }}>hidup, tak hidup</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            setCek(1);
                            SoundPlayer.playSoundFile('tidak', 'mp3')
                        }} style={{
                            width: windowWidth / 2.5,
                            padding: 10,
                            borderWidth: 1,
                            borderRadius: 10,
                            backgroundColor: cek == 1 && cek !== '' ? colors.danger : colors.primary
                        }}>
                            <Text style={{
                                textAlign: 'center',
                                fontFamily: fonts.sugar[400],
                                fontSize: 16,
                                color: cek == 1 && cek !== '' ? colors.white : colors.black
                            }}>tak hidup, hidup</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{
                        fontFamily: fonts.sugar[400],
                        fontSize: 16,
                        marginBottom: 30,
                    }}>Ekosistem air laut merupakan ekosistem yang menjadi tempat tinggal penyu. Wulandari (2009) menyatakan ekosistem lautan, pantai, estuari, terumbu karang, dan padang lamun merupakan bagian dari ekosistem air laut. </Text>

                    <RenderHtml
                        contentWidth={windowWidth}
                        source={{
                            html: data.keterangan
                        }}
                    />
                </ScrollView>
            </View>}


            {
                loading && <View style={{
                    padding: 20,
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <ActivityIndicator color={colors.secondary} size="large" />
                </View>
            }

        </SafeAreaView >
    )
}

const styles = StyleSheet.create({})