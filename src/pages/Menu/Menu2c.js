import { ActivityIndicator, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, fonts, windowWidth } from '../../utils';
import { apiURL, api_token, MYAPP, storeData } from '../../utils/localStorage';
import axios from 'axios';
import RenderHtml from 'react-native-render-html';
import { Icon } from 'react-native-elements';
import { showMessage } from 'react-native-flash-message';
import SweetAlert from 'react-native-sweet-alert';
import SoundPlayer from 'react-native-sound-player'

export default function Menu2c({ navigation, route }) {
    const item = route.params;

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [nomor, setNomor] = useState(0);
    const [done, setDone] = useState(false);

    const [soal, setSoal] = useState([
        {
            judul: 'Peta Persebaran Penyu di Pulau Sumatera dan Sekitarnya',
            peta: require('../../assets/peta0.png'),
            tabel: require('../../assets/petat0.png'),
            soal: [
                {
                    tanya: 'Jenis penyu yang dapat ditemukan di Pulau Sumatera dan sekitarnya adalah sebanyak 6 jenis.',
                    jawaban: 0,
                    isi: null,
                },
                {
                    tanya: 'Penyu belimbing dapat ditemukan di perairan Samudera Hindia.',
                    jawaban: 1,
                    isi: null,
                },
                {
                    tanya: 'Penyu sisik merupakan spesies yang tersebar di Perairan Aceh.',
                    jawaban: 0,
                    isi: null,
                },
                {
                    tanya: 'Penyu hijau tidak dapat ditemukan di perairan Sumatera Barat.',
                    jawaban: 0,
                    isi: null,
                }
            ]
        },
        {
            judul: 'Peta Persebaran Penyu di Pulau Jawa, Bali, dan Sekitarnya',
            peta: require('../../assets/peta1.png'),
            tabel: require('../../assets/petat1.png'),
            soal: [
                {
                    tanya: 'Penyu yang tersebar di perairan Pulau Jawa, Bali, dan sekitarnya adalah sebanyak 4 ',
                    jawaban: 1,
                    isi: null,
                },
                {
                    tanya: 'Penyu sisik terebar di Laut Jawa dan Perairan Bali.',
                    jawaban: 1,
                    isi: null,
                },
                {
                    tanya: 'Penyu belimbing dan penyu lekang dapat ditemukan di Perairan Bali.',
                    jawaban: 0,
                    isi: null,
                },
                {
                    tanya: 'Penyu hijau tersebar di perairan Kepulauan Seribu, Karimun Jawa, Perairan Jawa Barat, Jawa Timur, dan Bali.',
                    jawaban: 1,
                    isi: null,
                }
            ]
        },
        {
            judul: 'Peta Persebaran Penyu di Kalimantan dan Sekitarnya',
            peta: require('../../assets/peta2.png'),
            tabel: require('../../assets/petat2.png'),
            soal: [
                {
                    tanya: 'Penyu yang tersebar di perairan Kalimantan dan sekitarnya adalah sebanyak 5 jenis.',
                    jawaban: 1,
                    isi: null,
                },
                {
                    tanya: 'Penyu hijau tersebar di Selat Karimata dan Selat Makassar.',
                    jawaban: 0,
                    isi: null,
                },
                {
                    tanya: 'Di perairan Kalimantan Timur dan Kalimantan Barat dapat ditemukan penyu hijau.',
                    jawaban: 1,
                    isi: null,
                },
                {
                    tanya: 'Di perairan Laut Cina Selatan dapat ditemukan penyu belimbing.',
                    jawaban: 1,
                    isi: null,
                }
            ]
        },
        {
            judul: 'Peta Persebaran Penyu di Nusa Tenggara dan Sekitarnya',
            peta: require('../../assets/peta3.png'),
            tabel: require('../../assets/petat3.png'),
            soal: [
                {
                    tanya: 'Penyu yang tersebar di perairan Nusa Tenggara dan sekitarnya adalah sebanyak 5 jenis.',
                    jawaban: 1,
                    isi: null,
                },
                {
                    tanya: 'Penyu yang tersebar di perairan Nusa Tenggara dan sekitarnya adalah sebanyak 5 jenis.',
                    jawaban: 0,
                    isi: null,
                },
                {
                    tanya: 'Di perairan Nusa Tenggara Barat dan Nusa Tenggara Timur dapat ditemukan penyu hijau.',
                    jawaban: 1,
                    isi: null,
                },
                {
                    tanya: 'Di Laut Flores dapat ditemukan penyu sisik.',
                    jawaban: 1,
                    isi: null,
                },
                {
                    tanya: 'Penyu tempayan dapat ditemukan di perairan Nusa Tenggara Timur atau Maluku yang berbatasan dengan perairan utara Australia',
                    jawaban: 0,
                    isi: null,
                },
                {
                    tanya: 'Penyu pipih dapat ditemukan di perairan Nusa Tenggara Timur atau Maluku yang berbatasan dengan perairan utara Australia.',
                    jawaban: 1,
                    isi: null,
                }
            ]
        },
        {
            judul: 'Peta Persebaran Penyu di Pulau Sulawesi, Maluku, dan Sekitarnya',
            peta: require('../../assets/peta4.png'),
            tabel: require('../../assets/petat4.png'),
            soal: [
                {
                    tanya: 'Penyu yang tersebar di perairan Pulau Sulawesi, Maluku, dan sekitarnya adalah sebanyak 5 jenis.',
                    jawaban: 1,
                    isi: null,
                },
                {
                    tanya: 'Penyu belimbing tersebar di Perairan Sulawesi.',
                    jawaban: 0,
                    isi: null,
                },
                {
                    tanya: 'Di Selat Makassar dapat ditemukan penyu sisik.',
                    jawaban: 1,
                    isi: null,
                },
                {
                    tanya: 'Di Perairan Nusa Tenggara Timur atau Maluku yang berbatasan dengan perairan utara Australia dapat ditemukan penyu pipih.',
                    jawaban: 1,
                    isi: null,
                },
                {
                    tanya: 'Penyu hijau hanya dapat ditemukan di perairan Maluku. ',
                    jawaban: 0,
                    isi: null,
                },
                {
                    tanya: 'Penyu tempayan dapat ditemukan di Pulau Banggai.',
                    jawaban: 1,
                    isi: null,
                }
            ]
        },
        {
            judul: 'Peta Persebaran Penyu di Papua dan Sekitarnya',
            peta: require('../../assets/peta5.png'),
            tabel: require('../../assets/petat5.png'),
            soal: [
                {
                    tanya: 'Penyu hijau dapat ditemukan di Samudera Pasifik.',
                    jawaban: 0,
                    isi: null,
                },
                {
                    tanya: 'Di perairan Papua dan sekitarnya, terdapat 5 jenis penyu yang dapat ditemukan.',
                    jawaban: 0,
                    isi: null,
                },
                {
                    tanya: 'Penyu lekang dan penyu hijau dapat ditemukan di seluruh perairan Papua.',
                    jawaban: 1,
                    isi: null,
                },
                {
                    tanya: 'Jenis-jenis penyu yang tersebar di perairam Papua dan sekitarnya berdasarkan peta tersebut adalah penyu hijau, penyu belimbing, dan penyu tempayan.',
                    jawaban: 0,
                    isi: null,
                },
                {
                    tanya: 'Penyu belimbing dapat ditemukan di Samudera Pasifik.',
                    jawaban: 1,
                    isi: null,
                },

            ]
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

            {!loading && !done && <ScrollView>
                <View style={{
                    padding: 10,
                    flex: 1,
                }}>

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

                        <Image source={soal[nomor].peta} style={{
                            width: windowWidth,
                            height: windowWidth / 1.5,
                            resizeMode: 'contain',
                            alignSelf: 'center'
                        }} />


                        <Text style={{
                            fontFamily: fonts.sugar[400],
                            color: colors.warning,
                            fontSize: 14,
                            marginLeft: 20,
                            marginTop: 5,
                            marginBottom: 10,
                        }}>Berdasarkan data pada peta di atas, tentukan apakah pernyataan-pernyataan berikut benar atau salah!</Text>

                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <FlatList data={soal[nomor].soal} numColumns={1} renderItem={({ item, index }) => {
                                return (
                                    <View style={{
                                        marginVertical: 10,

                                    }}>

                                        <View style={{
                                            flexDirection: 'row'
                                        }}>
                                            <Text style={{
                                                fontFamily: fonts.sugar[400],
                                                fontSize: 14,
                                            }}>{index + 1}. </Text>

                                            <Text style={{
                                                fontFamily: fonts.sugar[400],
                                                fontSize: 14,
                                            }}>{item.tanya}</Text>
                                        </View>


                                        <View style={{
                                            marginTop: 10,
                                            alignItems: 'center',
                                            flexDirection: 'row',
                                            justifyContent: 'space-around'
                                        }}>
                                            <TouchableOpacity onPress={() => {

                                                let tmp = [...soal];
                                                tmp[nomor].soal[index].isi = 1;
                                                setSoal(tmp);


                                                if (item.isi == item.jawaban && item.jawaban == 1) {
                                                    SoundPlayer.playSoundFile('oke', 'mp3')
                                                } else {
                                                    SoundPlayer.playSoundFile('tidak', 'mp3')
                                                }



                                            }} style={{
                                                width: 100,
                                                borderRadius: 10,
                                                height: 40,
                                                backgroundColor: item.isi == item.jawaban && item.jawaban == 1 ? colors.success : item.isi != null && item.isi != item.jawaban && item.jawaban != 1 ? colors.danger : colors.white,
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                                <Text style={{
                                                    fontFamily: fonts.sugar[600],
                                                    color: colors.black,
                                                    fontSize: 16,
                                                }}>Benar</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => {

                                                let tmp = [...soal];
                                                tmp[nomor].soal[index].isi = 0;
                                                setSoal(tmp);

                                                if (item.isi == item.jawaban && item.jawaban == 0) {
                                                    SoundPlayer.playSoundFile('oke', 'mp3')
                                                } else {
                                                    SoundPlayer.playSoundFile('tidak', 'mp3')
                                                }

                                            }} style={{
                                                width: 100,
                                                borderRadius: 10,
                                                height: 40,
                                                backgroundColor: item.isi == item.jawaban && item.jawaban == 0 ? colors.success : item.isi != null && item.isi != item.jawaban && item.jawaban != 0 ? colors.danger : colors.white,
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                                <Text style={{
                                                    fontFamily: fonts.sugar[600],
                                                    color: colors.black,
                                                    fontSize: 16,
                                                }}>Salah</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )
                            }} />
                        </View>
                    </View>

                </View>

                {
                    soal[nomor].soal[(soal[nomor].soal.length) - 1].isi !== null && <View style={{
                        flex: 1,
                        padding: 20,
                    }}>
                        <Image source={soal[nomor].tabel} style={{
                            width: windowWidth - 20,
                            // height: 200,
                            resizeMode: 'contain',
                            alignSelf: 'center'
                        }} />

                    </View>
                }

            </ScrollView>}



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

                        showMessage({
                            message: 'Kuis ini adalah nomor yang terakhir !'
                        })
                    } else {
                        setNomor(nomor + 1)
                    }
                }}>
                    <View style={styles.btn}>
                        <Icon type='ionicon' name='arrow-forward' size={30} color={colors.white} />
                    </View>
                </TouchableWithoutFeedback>
            </View>


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

const styles = StyleSheet.create({
    btn: {
        marginBottom: 10,
        marginHorizontal: 10,
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