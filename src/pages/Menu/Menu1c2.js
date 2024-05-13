import { ActivityIndicator, FlatList, Image, Picker, SafeAreaView, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { apiURL, api_token, MYAPP, storeData } from '../../utils/localStorage';
import axios from 'axios';
import RenderHtml from 'react-native-render-html';
import { Icon } from 'react-native-elements';
import SweetAlert from 'react-native-sweet-alert';
import SoundPlayer from 'react-native-sound-player'
import { MyPicker } from '../../components';

export default function Menu1c2({ navigation, route }) {
    const item = route.params;
    const [open, setOpen] = useState(false);
    const [DATA, setDATA] = useState([
        {
            img: require('../../assets/hijau.png'),
            label: 'Penyu Hijau',
            cek: 0,
        },
        {
            img: require('../../assets/belimbing.png'),
            label: 'Penyu Belimbing',
            cek: 0,
        },
        {
            img: require('../../assets/lekang.png'),
            label: 'Penyu Lekang',
            cek: 0,
        },
        {
            img: require('../../assets/kempi.png'),
            label: 'Penyu Kempi',
            cek: 0,
        },
        {
            img: require('../../assets/sisik.png'),
            label: 'Penyu Sisik',
            cek: 0,
        },
        {
            img: require('../../assets/pipih.png'),
            label: 'Penyu Pipih',
            cek: 0,
        },
        {
            img: require('../../assets/tempayan.png'),
            label: 'Penyu Tempayan',
            cek: 0,
        },
    ])

    const cek = (x) => {
        setOpen(true)
        if (x == 6) {
            SweetAlert.showAlertWithOptions({
                title: 'Oops...',
                subTitle: 'Maaf jawaban salah !',
                style: 'error',
                cancellable: true
            });
            SoundPlayer.playSoundFile('tidak', 'mp3')

        } else {
            SweetAlert.showAlertWithOptions({
                title: 'Kamu Hebat !',
                subTitle: 'Jawaban benar',
                style: 'success',
                cancellable: true
            });
            SoundPlayer.playSoundFile('oke', 'mp3')

        }
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
            <View style={{
                flex: 1,
                padding: 20,
            }}>
                <Text style={{
                    fontFamily: fonts.sugar[600],
                    fontSize: 18,
                    color: colors.warning,
                    textAlign: 'justify'
                }}>Ayo Lengkapilah nama-nama penyu yang masih kosong!</Text>
                <FlatList data={DATA} renderItem={({ item, index }) => {
                    return (
                        <View style={{
                            flex: 1,
                            margin: 5,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Image source={item.img} style={{
                                width: 80,
                                height: 80,
                            }} />
                            {(index == 0 || index == 3 || index == 4 || index == 6) && <>
                                <Text style={{
                                    fontFamily: fonts.sugar[600],
                                    fontSize: 15,
                                    color: colors.warning,
                                }}>{item.label}</Text>
                            </>}

                            {(index == 1 || index == 2 || index == 5) && <>
                                <View style={{ width: '100%', borderWidth: 1, borderRadius: 10, borderColor: item.cek > 0 ? colors.success : colors.danger }}>
                                    <Picker onValueChange={x => {
                                        console.log(x);
                                        let tmp = [...DATA];
                                        if (index == 1 && x == 'Penyu Belimbing') {
                                            tmp[index].cek = 1;
                                            SoundPlayer.playSoundFile('oke', 'mp3')

                                        } else if (index == 2 && x == 'Penyu Lekang') {
                                            tmp[index].cek = 1;
                                            SoundPlayer.playSoundFile('oke', 'mp3')

                                        } else if (index == 5 && x == 'Penyu Pipih') {
                                            tmp[index].cek = 1;
                                            SoundPlayer.playSoundFile('oke', 'mp3')

                                        } else {
                                            SoundPlayer.playSoundFile('tidak', 'mp3')
                                        }

                                        setDATA(tmp)
                                    }} style={{ height: 30, transform: [{ scale: 0.8 }] }}>
                                        <Picker.Item label="Pilih Jawaban" />
                                        <Picker.Item label="Penyu Lekang" value="Penyu Lekang" />
                                        <Picker.Item label="Penyu Pipih" value="Penyu Pipih" />
                                        <Picker.Item label="Penyu Belimbing" value="Penyu Belimbing" />
                                    </Picker>
                                </View>
                            </>}


                        </View>
                    )
                }} numColumns={2} />



            </View>
            <Text style={{
                fontFamily: fonts.sugar[400],
                fontSize: 11,
                textAlign: 'center',
                padding: 5,
                marginVertical: 10,
                marginHorizontal: 20,
                backgroundColor: colors.secondary,
                borderRadius: 10,
                color: colors.white
            }}>
                Agar kamu dapat semakin paham materi tentang penyu, mari buka menu “Tentang penyu”!
            </Text>
            <TouchableWithoutFeedback onPress={() => navigation.replace('Home')}>
                <View style={{
                    alignSelf: 'flex-end',
                    marginBottom: 10,
                    marginRight: 10,
                    padding: 10,
                    width: 60,
                    height: 60,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 30,
                    backgroundColor: colors.warning
                }}>
                    <Icon type='ionicon' name='home' size={30} color={colors.white} />
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})