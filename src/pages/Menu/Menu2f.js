import { ActivityIndicator, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, fonts, windowWidth } from '../../utils';
import { apiURL, api_token, MYAPP, storeData } from '../../utils/localStorage';
import axios from 'axios';
import RenderHtml from 'react-native-render-html';
import { MyPicker } from '../../components';
import SoundPlayer from 'react-native-sound-player'
export default function Menu2f({ navigation, route }) {
    const item = route.params;

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [done, setDone] = useState(false);

    const [soal, setSoal] = useState([
        {
            jenis: 'Penyu hijau',
            status: 'Endangered (Terancam)',
            img: require('../../assets/hijau.png'),
            isi: '',
        },
        {
            jenis: 'Penyu belimbing',
            status: 'Vulnerable (Rentan)',
            img: require('../../assets/belimbing.png'),
            isi: ''
        },
        {
            jenis: 'Penyu lekang',
            status: 'Vulnerable (Rentan)',
            img: require('../../assets/lekang.png'),
            isi: ''
        },
        {
            jenis: 'Penyu tempayan',
            status: 'Vulnerable (Rentan)',
            img: require('../../assets/hijau.png'),
            isi: ''
        },
        {
            jenis: 'Penyu pipih',
            status: 'Data Deficient (Informasi Kurang)',
            img: require('../../assets/pipih.png'),
            isi: ''
        },
        {
            jenis: 'Penyu sisik',
            status: 'Critically Endangered (Kritis)',
            img: require('../../assets/sisik.png'),
            isi: ''
        },
        {
            jenis: 'Penyu kempi',
            status: 'Critically Endangered (Kritis)',
            img: require('../../assets/kempi.png'),
            isi: ''
        },



    ])

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
                    <RenderHtml
                        contentWidth={windowWidth}
                        source={{
                            html: data.keterangan
                        }}
                    />
                    <View style={{
                        flex: 1
                    }}>
                        <FlatList data={soal} renderItem={({ item, index }) => {
                            return (
                                <View style={{
                                    borderWidth: 1,
                                    borderRadius: 10,
                                    borderColor: colors.secondary,
                                    padding: 10,
                                    marginVertical: 5,
                                    flexDirection: 'row'
                                }}>
                                    <View style={{
                                        flex: 1,
                                    }}>
                                        <Text style={{
                                            fontFamily: fonts.sugar[600],
                                            fontSize: 16
                                        }}>Jenis Penyu</Text>
                                        <Text style={{
                                            fontFamily: fonts.sugar[400],
                                            fontSize: 16,
                                            color: colors.secondary,
                                        }}>{item.jenis}</Text>
                                        <Image source={item.img} style={{
                                            width: 100,
                                            height: 100
                                        }} />

                                    </View>
                                    <View style={{
                                        flex: 1.3,
                                    }}>
                                        <MyPicker onValueChange={x => {

                                            if (index == soal.length - 1) {
                                                setDone(true)
                                            }

                                            let tmp = [...soal];
                                            tmp[index].isi = x;
                                            setSoal(tmp);

                                            if (soal[index].isi == soal[index].status && soal[index].isi != '') {
                                                SoundPlayer.playSoundFile('oke', 'mp3')
                                            } else {
                                                SoundPlayer.playSoundFile('tidak', 'mp3')
                                            }

                                        }} backgroundColor={soal[index].isi == soal[index].status && soal[index].isi != '' ? colors.success : soal[index].isi != soal[index].status && soal[index].isi != '' ? colors.danger : colors.white} textColor={colors.black} label="Status Konservasi" data={[
                                            {
                                                label: 'pilih jawaban',

                                            },
                                            {
                                                label: 'Endangered (Terancam)',
                                                value: 'Endangered (Terancam)'
                                            },
                                            {
                                                label: 'Vulnerable (Rentan)',
                                                value: 'Vulnerable (Rentan)'
                                            },
                                            {
                                                label: 'Data Deficient (Informasi Kurang)',
                                                value: 'Data Deficient (Informasi Kurang)'
                                            },
                                            {
                                                label: 'Critically Endangered (Kritis)',
                                                value: 'Critically Endangered (Kritis)'
                                            },

                                        ]} />
                                    </View>
                                </View>
                            )
                        }} />
                    </View>
                </ScrollView>
            </View>}


            {loading && <View style={{
                padding: 20,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ActivityIndicator color={colors.secondary} size="large" />
            </View>}

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})