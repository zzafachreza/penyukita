import { ActivityIndicator, FlatList, Image, Linking, SafeAreaView, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { apiURL, api_token, MYAPP, storeData } from '../../utils/localStorage';
import axios from 'axios';
import RenderHtml from 'react-native-render-html';
import { MyPicker } from '../../components';
import SoundPlayer from 'react-native-sound-player'
import Pdf from 'react-native-pdf';
import ImageView from "react-native-image-viewing";
import { TouchableOpacity } from 'react-native';
export default function Menu2f({ navigation, route }) {
    const item = route.params;

    const [gambarPilih, setGambarPilih] = useState([
        require('../../assets/logo.png')
    ])
    const [visible, setIsVisible] = useState(false);


    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [done, setDone] = useState(false);

    const [soal, setSoal] = useState([
        {
            jenis: 'Penyu hijau',
            status: 'Endangered (Terancam)',
            img: require('../../assets/kon1.png'),
            isi: '',
            sumber: 'https://www.iucnredlist.org'
        },
        {
            jenis: 'Penyu belimbing',
            status: 'Vulnerable (Rentan)',
            img: require('../../assets/kon2.png'),
            isi: '',
            sumber: 'https://www.iucnredlist.org'
        },
        {
            jenis: 'Penyu lekang',
            status: 'Vulnerable (Rentan)',
            img: require('../../assets/kon3.png'),
            isi: '',
            sumber: 'https://www.iucnredlist.org'
        },
        {
            jenis: 'Penyu tempayan',
            status: 'Vulnerable (Rentan)',
            img: require('../../assets/kon4.png'),
            isi: '',
            sumber: 'https://www.iucnredlist.org'
        },
        {
            jenis: 'Penyu pipih',
            status: 'Data Deficient (Informasi Kurang)',
            img: require('../../assets/kon5.png'),
            isi: '',
            sumber: 'https://www.iucnredlist.org'
        },
        {
            jenis: 'Penyu sisik',
            status: 'Critically Endangered (Sangat Terancam)',
            img: require('../../assets/kon6.png'),
            isi: '',
            sumber: 'https://www.iucnredlist.org'
        },
        {
            jenis: 'Penyu kempi',
            status: 'Critically Endangered (Sangat Terancam)',
            img: require('../../assets/kon7.png'),
            isi: '',
            sumber: 'https://www.iucnredlist.org'
        },



    ]);




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

                flex: 1,
            }}>

                <ScrollView showsVerticalScrollIndicator={false} style={{
                    padding: 10,
                }}>

                    <Pdf
                        style={{
                            flex: 1,
                            height: windowHeight - 100,
                            backgroundColor: colors.primary,

                        }}
                        minScale={1.0}
                        maxScale={3.0}
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
                                        <TouchableWithoutFeedback onPress={() => {
                                            setGambarPilih([item.img]);
                                            setIsVisible(true);
                                        }}>
                                            <Image source={item.img} style={{
                                                width: '95%',
                                                height: 180,
                                            }} />
                                        </TouchableWithoutFeedback>


                                        <TouchableOpacity onPress={() => Linking.openURL(item.sumber)}>
                                            <Text style={{
                                                marginTop: 10,
                                                fontFamily: fonts.sugar[400],
                                                fontSize: 10,
                                                color: colors.secondary,
                                            }}>Sumber : {item.sumber}</Text>
                                        </TouchableOpacity>

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
                                                label: 'Critically Endangered (Sangat Terancam)',
                                                value: 'Critically Endangered (Sangat Terancam)'
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


            <ImageView
                images={gambarPilih}
                imageIndex={0}
                visible={visible}
                onRequestClose={() => setIsVisible(false)}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})