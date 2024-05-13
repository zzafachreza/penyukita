import { ActivityIndicator, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, fonts, windowWidth } from '../../utils';
import { apiURL, api_token, MYAPP, storeData } from '../../utils/localStorage';
import axios from 'axios';
import RenderHtml from 'react-native-render-html';
import SoundPlayer from 'react-native-sound-player'
export default function Menu3b({ navigation, route }) {
    const item = route.params;
    const alpa = ['a', 'b', 'c', 'd', 'e', 'f']

    const [data, setData] = useState([
        {
            judul: '1.	Ekosistem pantai',
            img: require('../../assets/rantai1.png'),
            soal: [
                {
                    tanya: 'Apabila populasi rumput laut tiba-tiba menurun sangat drastis, bagaimana pengaruhnya terhadap ikan-ikan kecil? ',
                    a: 'Populasi ikan kecil akan bertambah banyak karena tidak ada lagi rumput laut.',
                    b: 'Ikan kecil akan langsung beradaptasi dengan mengubah perilaku makan secara instan.',
                    c: 'Ikan kecil akan kehilangan sumber makanan dan tempat berlindung.',
                    d: 'Populasi ikan kecil akan tetap stabil karena tidak terpengaruh oleh rumput laut.',
                    jawaban: 'c',
                    isi: '',
                },
                {
                    tanya: 'Setelah penyu mati dan diuraikan oleh bakteri, apa yang akan terjadi?',
                    a: 'Nutrien dalam penyu akan hilang dan tidak mempengaruhi ekosistem.',
                    b: 'Ekosistem akan mengalami peningkatan keanekaragaman hayati.',
                    c: 'Nutrien dari penyu akan tersedia untuk organisme lain dalam ',
                    d: 'Proses dekomposisi tidak akan berpengaruh pada ekosistem.',
                    jawaban: 'c',
                    isi: '',
                }
            ]
        },
        {
            judul: '2.	Ekosistem estuari',
            img: require('../../assets/rantai2.png'),
            soal: [
                {
                    tanya: 'Apabila populasi ikan kecil tiba-tiba menurun sangat drastis, bagaimana pengaruhnya terhadap kepiting?',
                    a: 'Kepiting akan berkurang jumlahnya karena kurangnya makanan.',
                    b: 'Populasi kepiting tetap stabil karena tidak terpengaruh oleh keberadaan ikan kecil.',
                    c: 'Populasi kepiting akan berkembang biak secara besar-besaran karena tidak ada saingan.',
                    d: 'Kepiting akan mengubah perilaku makan secara instan.',
                    jawaban: 'a',
                    isi: '',
                },
                {
                    tanya: 'Apabila populasi fitoplankton sangat sedikit sedangkan populasi cacing laut sangat banyak, apa yang akan terjadi?',
                    a: 'Populasi cacing laut akan berkembang pesat karena makanan yang melimpah.',
                    b: 'Ekosistem akan menjadi lebih stabil karena keberagaman fitoplankton.',
                    c: 'Cacing laut akan mengalami kelaparan karena makanan yang tersedia terbatas jumlahnya.',
                    d: 'Populasi cacing laut akan menambah keanekaragaman hayati ekosistem.',
                    jawaban: 'c',
                    isi: '',
                }
            ]
        },
        {
            judul: '3.	Ekosistem terumbu karang',
            img: require('../../assets/rantai3.png'),
            soal: [
                {
                    tanya: 'Apabila populasi gurita tiba-tiba menurun sangat drastis, bagaimana pengaruhnya terhadap penyu?',
                    a: 'Populasi penyu akan meningkat karena tidak ada lagi predator.',
                    b: 'Populasi penyu akan tetap stabil karena tidak bergantung pada gurita.',
                    c: 'Penyu akan mengalami penurunan populasi karena kehilangan mangsa.',
                    d: 'Penyu akan memangsa bakteri.',
                    jawaban: 'c',
                    isi: '',
                },
                {
                    tanya: 'Apa yang terjadi pada rantai makanan tersebut apabila populasi penyu sangat sedikit?',
                    a: 'Populasi bakteri akan meningkat karena tidak ada lagi predator penyu yang memakan sisa-sisa makanan.',
                    b: 'Populasi gurita akan meningkat karena kurangnya predasi dari penyu.',
                    c: 'Rantai makanan pada ekosistem tersebut menjadi seimbang.',
                    d: 'Populasi gurita akan semakin sedikit karena banyaknya predasi dari penyu.',
                    jawaban: 'b',
                    isi: '',
                },
            ]
        },
        {
            judul: '4.	Ekosistem padang lamun',
            img: require('../../assets/rantai4.png'),
            soal: [
                {
                    tanya: 'Apabila populasi lamun tiba-tiba menurun sangat drastis, bagaimana pengaruhnya terhadap udang kecil?',
                    a: 'Udang kecil akan berkembang biak lebih cepat karena kurangnya persaingan.',
                    b: 'Udang kecil akan mengalami penurunan populasi karena kehilangan makanan.',
                    c: 'Populasi udang kecil akan tetap stabil karena dapat langsung beradaptasi dengan habitat baru.',
                    d: 'Ikan kecil akan bertambah banyak karena udang kecil semakin banyak.',
                    jawaban: 'b',
                    isi: '',
                },
                {
                    tanya: 'Selain bakteri, apa saja organisme yang dapat menjadi dekomposer?',
                    a: 'Ikan dan mamalia laut.',
                    b: 'Hewan herbivora seperti kepiting.',
                    c: 'Tumbuhan laut seperti rumput laut.',
                    d: 'Fungi dan beberapa jenis cacing.',
                    jawaban: 'd',
                    isi: '',
                },
            ]
        }


    ]);
    const [nomor, setNomor] = useState(0);
    const [loading, setLoading] = useState(false);
    const [cek, setCek] = useState('');

    const IsiData = (x, idx) => {
        let tmp = [...data];
        tmp[nomor].soal[idx].isi = x;
        setData(tmp);

        if (data[nomor].soal[idx].jawaban == data[nomor].soal[idx].isi && data[nomor].soal[idx].isi == x && data[nomor].soal[idx].isi !== '') {
            SoundPlayer.playSoundFile('oke', 'mp3')
        } else {
            SoundPlayer.playSoundFile('tidak', 'mp3')
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

            {!loading && <View style={{
                padding: 10,
                flex: 1,
            }}>
                <ScrollView showsVerticalScrollIndicator={false} style={{
                }}>
                    <Text style={{
                        fontFamily: fonts.sugar[400],
                        fontSize: 16
                    }}>Rantai makanan adalah proses perpindahan energi dari satu organisme ke organisme lainnya melalui peristiwa makan dan dimakan. Berikut adalah contoh rantai makanan pada beberapa ekosistem.</Text>

                    <Text style={{
                        marginVertical: 10,
                        fontFamily: fonts.sugar[400],
                        fontSize: 16,
                        color: colors.warning
                    }}>Komponen biotik merupakan komponen…sedangkan komponen abiotik merupakan komponen... </Text>

                    <Text style={{
                        fontFamily: fonts.sugar[600],
                        fontSize: 20,
                    }}>{data[nomor].judul}</Text>
                    <Image source={data[nomor].img} style={{
                        width: windowWidth,
                        marginTop: 10,
                        borderRadius: 5,
                        alignSelf: 'center',
                        height: windowWidth / 1.5,
                        resizeMode: 'contain'
                    }} />

                    <FlatList data={data[nomor].soal} renderItem={({ item, index }) => {
                        return (
                            <View style={{
                                padding: 10,

                            }}>
                                <Text style={{
                                    fontFamily: fonts.sugar[400],
                                    fontSize: 16,
                                }}>{alpa[index]}) {item.tanya}</Text>

                                <TouchableOpacity onPress={() => IsiData('a', index)} style={{
                                    backgroundColor: item.jawaban == item.isi && item.isi == 'a' && item.isi !== '' ? colors.success : item.jawaban !== item.isi && item.isi == 'a' && item.isi !== '' ? colors.danger : colors.primary,
                                    marginVertical: 5,
                                    borderWidth: 1,
                                    borderRadius: 10,
                                    padding: 5,
                                }}>
                                    <Text style={{
                                        fontFamily: fonts.sugar[400],
                                        fontSize: 14,
                                    }}>{item.a}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => IsiData('b', index)} style={{
                                    marginVertical: 5,
                                    borderWidth: 1,
                                    borderRadius: 10,
                                    backgroundColor: item.jawaban == item.isi && item.isi == 'b' && item.isi !== '' ? colors.success : item.jawaban !== item.isi && item.isi == 'b' && item.isi !== '' ? colors.danger : colors.primary,
                                    padding: 5,
                                }}>
                                    <Text style={{
                                        fontFamily: fonts.sugar[400],
                                        fontSize: 14,
                                    }}>{item.b}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => IsiData('c', index)} style={{
                                    backgroundColor: item.jawaban == item.isi && item.isi == 'c' && item.isi !== '' ? colors.success : item.jawaban !== item.isi && item.isi == 'c' && item.isi !== '' ? colors.danger : colors.primary,
                                    marginVertical: 5,
                                    borderWidth: 1,
                                    borderRadius: 10,
                                    padding: 5,
                                }}>
                                    <Text style={{
                                        fontFamily: fonts.sugar[400],
                                        fontSize: 14,
                                    }}>{item.c}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => IsiData('d', index)} style={{
                                    marginVertical: 5,
                                    borderWidth: 1,
                                    backgroundColor: item.jawaban == item.isi && item.isi == 'd' && item.isi !== '' ? colors.success : item.jawaban !== item.isi && item.isi == 'd' && item.isi !== '' ? colors.danger : colors.primary,
                                    borderRadius: 10,
                                    padding: 5,
                                }}>
                                    <Text style={{
                                        fontFamily: fonts.sugar[400],
                                        fontSize: 14,
                                    }}>{item.d}</Text>
                                </TouchableOpacity>

                            </View>
                        )
                    }} />

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