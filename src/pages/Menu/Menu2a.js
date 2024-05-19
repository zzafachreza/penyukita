import { ActivityIndicator, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, fonts, windowWidth } from '../../utils';
import { apiURL, api_token, MYAPP, storeData } from '../../utils/localStorage';
import axios from 'axios';
import RenderHtml from 'react-native-render-html';
import { Icon } from 'react-native-elements';
import { showMessage } from 'react-native-flash-message';
import SweetAlert from 'react-native-sweet-alert';
import SoundPlayer from 'react-native-sound-player'
import ImageView from "react-native-image-viewing";

export default function Menu2a({ navigation, route }) {
    const item = route.params;
    const [gambarPilih, setGambarPilih] = useState([
        require('../../assets/logo.png')
    ])
    const [visible, setIsVisible] = useState(false);


    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [nomor, setNomor] = useState(0);
    const [done, setDone] = useState(false);

    const [soal, setSoal] = useState([
        {
            judul: 'Kepala',
            info: 'Kepala merupakan bagian depan tubuh penyu yang berisi otak, mata, mulut, dan hidung. Kepala penyu jantan memiliki ukuran yang lebih kecil daripada kepala penyu betina (Dermawan et al., 2009).',
            jawaban: 1,
            isi: 0,
        },
        {
            judul: 'Karapas',
            info: 'Karapas atau tempurung merupakan cangkang yang terbuat dari zat tanduk dan terdapat di bagian punggung penyu. Fungsi karapas adalah untuk melindungi tubuh penyu (Dermawan et al., 2009).',
            jawaban: 2,
            isi: 0,
        },
        {
            judul: 'Plastron',
            info: 'Plastron adalah penutup bagian dada dan perut penyu (Dermawan et al., 2009).',
            jawaban: 5,
            isi: 0,
        },
        {
            judul: 'Infra marginal',
            info: 'Infra marginal adalah keping yang berfungsi sebagai penghubung bagian pinggir karapas dengan plastron. Bagian ini dapat digunakan sebagai alat untuk mengidentifikasi jenis penyu (Dermawan et al., 2009).',
            jawaban: 6,
            isi: 0,
        },
        {
            judul: 'Tungkai depan',
            info: 'Tungkai depan atau kaki renang merupakan alat gerak bagi penyu. Tungkai depan juga dapat berfungsi sebagai alat dayung (Dermawan et al., 2009).',
            jawaban: 3,
            isi: 0,
        },
        {
            judul: 'Tungkai Belakang',
            info: 'Tungkai belakang atau kaki bagian belakang merupakan alat penggali bagi penyu. Tungkai belakang memiliki nama lain pore fliffer (Dermawan et al., 2009).',
            jawaban: 4,
            isi: 0,
        },
        {
            judul: 'Ekor',
            info: 'Ekor penyu jantan dan penyu betina memiliki perbedaan panjang. Ekor penyu jantan lebih panjang daripada ekor penyu betina karena letak organ reproduksi penyu jantan berada di ekornya (Dermawan et al., 2009).',
            jawaban: 7,
            isi: 0,
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

            {!loading && !done && <View style={{
                padding: 10,
                flex: 1,
            }}>
                <Text style={{
                    fontFamily: fonts.sugar[600]
                }}>Secara umum, tubuh penyu terdiri dari kepala, karapas, plastron, infra marginal, tungkai depan, tungkai belakang, dan ekor.</Text>

                <View style={{
                    flex: 1
                }}>
                    <Text style={{
                        fontFamily: fonts.sugar[600],
                        color: colors.secondary,
                        fontSize: 16,
                        marginLeft: 20,
                        marginTop: 10,
                    }}>{soal[nomor].judul}</Text>
                    <Text style={{
                        fontFamily: fonts.sugar[400],
                        color: colors.black,
                        fontSize: 14,
                        marginLeft: 20,
                        marginTop: 5,
                        marginBottom: 10,
                    }}>{soal[nomor].info}</Text>
                    <TouchableWithoutFeedback onPress={() => {
                        setGambarPilih([require('../../assets/tubuh.png')]);
                        setIsVisible(true);
                    }}>
                        <Image source={require('../../assets/tubuh.png')} style={{
                            width: windowWidth - 100,
                            // height: 200,
                            resizeMode: 'contain',
                            alignSelf: 'center'
                        }} />
                    </TouchableWithoutFeedback>
                    <Text style={{
                        fontFamily: fonts.sugar[400],
                        color: colors.warning,
                        fontSize: 14,
                        marginLeft: 20,
                        marginTop: 5,
                        marginBottom: 10,
                    }}>Bagian tubuh nomor berpakah yang merupakan {soal[nomor].judul} ?</Text>

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <FlatList data={soal} numColumns={4} renderItem={({ item, index }) => {
                            return (
                                <TouchableWithoutFeedback onPress={() => {

                                    let tmp = [...soal];
                                    tmp[nomor].isi = (index + 1);
                                    setSoal(tmp);
                                    console.log(soal[nomor]);

                                    if (soal[nomor].isi == index + 1 && soal[nomor].jawaban == index + 1) {
                                        SoundPlayer.playSoundFile('oke', 'mp3')
                                    } else {
                                        SoundPlayer.playSoundFile('tidak', 'mp3')
                                    }

                                }}>
                                    <View style={{
                                        marginTop: 5,
                                        marginHorizontal: 5,
                                        width: windowWidth / 5,
                                        backgroundColor: soal[nomor].isi == index + 1 && soal[nomor].jawaban == index + 1 ? colors.success : soal[nomor].isi == index + 1 && soal[nomor].jawaban != index + 1 ? colors.danger : colors.secondary,
                                        padding: 10,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: 10,
                                    }}>
                                        <Text style={styles.jwbtxt}>{index + 1}</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            )
                        }} />
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <TouchableWithoutFeedback onPress={() => {
                        if (nomor == 0) {
                            showMessage({
                                message: 'Tidak bisa kembali ini adalah soal pertama'
                            })
                        } else {
                            setNomor(nomor - 1)
                        }
                    }}>
                        <View style={styles.btn}>
                            <Icon type='ionicon' name='arrow-back' size={30} color={colors.white} />
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => {
                        if (nomor == soal.length - 1) {

                            setDone(true)
                        } else {
                            setNomor(nomor + 1)
                        }
                    }}>
                        <View style={styles.btn}>
                            <Icon type='ionicon' name='arrow-forward' size={30} color={colors.white} />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>}

            {done && <View style={{
                flex: 1,
                padding: 20,
            }}>
                <Text style={{
                    fontFamily: fonts.sugar[600],
                    fontSize: 14,
                    color: colors.secondary,
                }}>Hore! Berikut ini adalah gambar yang berisi nama-nama bagian tubuh penyu yang benar.</Text>

                <TouchableWithoutFeedback onPress={() => {
                    setGambarPilih([require('../../assets/tubuh2.png')]);
                    setIsVisible(true);
                }}>
                    <Image source={require('../../assets/tubuh2.png')} style={{
                        width: windowWidth - 20,
                        // height: 200,
                        resizeMode: 'contain',
                        alignSelf: 'center'
                    }} />
                </TouchableWithoutFeedback>
                <Text style={{
                    fontFamily: fonts.sugar[600],
                    fontSize: 14,
                    color: colors.secondary,
                }}>Nah, sekarang kamu sudah mengetahui nama bagian-bagian tubuh penyu secara umum. Sekarang, ayo kita belajar materi berikutnya!</Text>

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

const styles = StyleSheet.create({
    btn: {
        marginBottom: 10,
        padding: 10,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: colors.warning
    },
    jwb: {
        width: 80,
        backgroundColor: colors.secondary,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    }, jwbtxt: { fontFamily: fonts.sugar[600], color: colors.white, fontSize: 15, }
})