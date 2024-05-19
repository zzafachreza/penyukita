import { ActivityIndicator, Image, Linking, SafeAreaView, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { apiURL, api_token, MYAPP, storeData } from '../../utils/localStorage';
import axios from 'axios';
import RenderHtml from 'react-native-render-html';
import { Icon } from 'react-native-elements';
import SweetAlert from 'react-native-sweet-alert';
import SoundPlayer from 'react-native-sound-player'
import ImageView from "react-native-image-viewing"
export default function Menu1c1({ navigation, route }) {
    const item = route.params;
    const [gambarPilih, setGambarPilih] = useState([
        require('../../assets/logo.png')
    ])
    const [visible, setIsVisible] = useState(false);

    const [open, setOpen] = useState(false);
    const [jawaban, setJawaban] = useState('');

    const cek = (x) => {
        setJawaban(x);
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
                title: 'Anda Hebat !',
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
                padding: 20,
            }}>
                <Text style={{
                    fontFamily: fonts.sugar[600],
                    fontSize: 18,
                    color: colors.warning,
                    textAlign: 'justify'
                }}>Jika kamu amati, ada berapa jenis penyu yang ada di dunia ?</Text>
                <View style={{
                    marginTop: 10,
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <TouchableWithoutFeedback onPress={() => cek(7)}>
                        <View style={{
                            marginRight: 20,
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: jawaban == 7 ? colors.success : colors.secondary,
                            padding: 10,
                            borderRadius: 10,
                        }}>
                            <Text style={{
                                fontFamily: fonts.sugar[600],
                                color: colors.white,
                                fontSize: 15,
                            }}>7</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => cek(6)}>
                        <View style={{
                            marginLeft: 20,
                            flex: 1,
                            backgroundColor: jawaban == 6 ? colors.danger : colors.secondary,
                            padding: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                        }}>
                            <Text style={{
                                fontFamily: fonts.sugar[600],
                                color: colors.white,
                                fontSize: 15,
                            }}>6</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>

                <TouchableWithoutFeedback onPress={() => {
                    setGambarPilih([require('../../assets/all.png')]);
                    setIsVisible(true)
                }}>
                    <Image source={require('../../assets/all.png')} style={{
                        width: '100%',
                        height: windowHeight - 350,
                        resizeMode: 'contain'
                    }} />
                </TouchableWithoutFeedback>

                {jawaban !== '' &&

                    <Text style={{
                        fontFamily: fonts.sugar[400],
                        fontSize: 11,
                        textAlign: 'center',
                        marginTop: 5,
                        padding: 5,
                        backgroundColor: colors.secondary,
                        borderRadius: 10,
                        color: colors.white
                    }}>
                        Jika kamu perhatikan, pada gambar tersebut terdapat judul yaitu, “Ragam Penyu di Seluruh Dunia”. Hal itu dapat dijadikan sebagai petunjuk bahwa itu merupakan gambar jenis-jenis penyu yang ada di seluruh dunia. Kemudian pada gambar tersebut terdapat 7 gambar penyu, dari sini kamu dapat mengetahui bahwa jenis penyu yang ada di dunia ada 7.
                    </Text>
                }
            </View>
            {open && <TouchableWithoutFeedback onPress={() => navigation.navigate('Menu1c2', item)}>
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
                    <Icon type='ionicon' name='arrow-forward' size={30} color={colors.white} />
                </View>
            </TouchableWithoutFeedback>}
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