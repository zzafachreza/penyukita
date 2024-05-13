import { ActivityIndicator, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { apiURL, api_token, MYAPP, storeData } from '../../utils/localStorage';
import axios from 'axios';
import RenderHtml from 'react-native-render-html';
import { Icon } from 'react-native-elements';
import SweetAlert from 'react-native-sweet-alert';
import SoundPlayer from 'react-native-sound-player'

export default function Menu1c({ navigation, route }) {
    const item = route.params;
    const [open, setOpen] = useState(false);
    const [jawaban, setJawaban] = useState('');

    const cek = (x) => {
        setOpen(true);
        setJawaban(x)
        if (x == 'Sama') {
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
                }}>Berikut adalah gambar seluruh jenis penyu di dunia. Jika kamu amati penyu ini tampak sama atau berbeda ?</Text>
                <View style={{
                    marginTop: 10,
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <TouchableWithoutFeedback onPress={() => cek('Sama')}>
                        <View style={{
                            marginRight: 20,
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: jawaban == 'Sama' ? colors.danger : colors.secondary,
                            padding: 10,
                            borderRadius: 10,
                        }}>
                            <Text style={{
                                fontFamily: fonts.sugar[600],
                                color: colors.white,
                                fontSize: 15,
                            }}>Sama</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => cek('Berbeda')}>
                        <View style={{
                            marginLeft: 20,
                            flex: 1,
                            backgroundColor: jawaban == 'Berbeda' ? colors.success : colors.secondary,
                            padding: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                        }}>
                            <Text style={{
                                fontFamily: fonts.sugar[600],
                                color: colors.white,
                                fontSize: 15,
                            }}>Berbeda</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>

                <Image source={require('../../assets/all.png')} style={{
                    width: '100%',
                    height: windowHeight - 350,
                    resizeMode: 'contain'
                }} />

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
                        Jika gambar penyu-penyu di atas kamu amati dengan cermat, maka kamu akan mengetahui bahwa mereka tampak berbeda satu sama lain. Ada ciri-ciri tertentu yang membedakan mereka. Oleh karena itu, penyu-penyu tersebut dibedakan menjadi beberapa jenis.
                    </Text>
                }
            </View>
            {open && <TouchableWithoutFeedback onPress={() => navigation.navigate('Menu1c1', item)}>
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
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})