import { ActivityIndicator, FlatList, Image, Linking, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, fonts, windowWidth } from '../../utils';
import { apiURL, api_token, MYAPP, storeData } from '../../utils/localStorage';
import axios from 'axios';
import RenderHtml from 'react-native-render-html';
import SoundPlayer from 'react-native-sound-player'
import { Icon } from 'react-native-elements';
import { showMessage } from 'react-native-flash-message';
import ImageView from "react-native-image-viewing";
export default function Menu3c({ navigation, route }) {
    const [gambarPilih, setGambarPilih] = useState([
        require('../../assets/logo.png')
    ])
    const [visible, setIsVisible] = useState(false);
    const item = route.params;
    const alpa = ['a', 'b', 'c', 'd', 'e', 'f'];
    const [done, setDone] = useState(false)
    const [nomor, setNomor] = useState(0);
    const [data, setData] = useState([
        {
            judul: '1.	Predasi',
            link: '',
            info: '',
            yt: '',
            img: null,
            soal: [
                {
                    tanya: `Contoh interaksi predasi:\n\na.Predasi terhadap penyu\n-Kepiting yang memangsa tukik saat tukik menuju perairan.\n-Hiu dan paus memangsa penyu saat berada di dalam perairan.
                    \nb.	Predasi oleh penyu\nPenyu memangsa ubur-ubur di laut.\n\nBerdasarkan contoh interaksi predasi di atas, manakah yang merupakan pengertian predasi?
                    `,
                    a: 'Predasi adalah hubungan simbiosis mutualisme antara dua spesies yang saling menguntungkan satu sama lain.',
                    b: 'Predasi adalah proses di mana makhluk hidup memperoleh energi dari sinar matahari melalui fotosintesis.',
                    c: 'Predasi adalah bentuk pertahanan diri yang dilakukan oleh makhluk hidup untuk melindungi dirinya dari serangan predator lainnya.',
                    d: 'Predasi adalah interaksi antara suatu makhluk hidup yang memangsa makhluk hidup lainnya.',
                    jawaban: 'd',
                    isi: '',
                    yt: '',
                    img: null,
                    respon: 'Predasi adalah interaksi antara suatu makhluk hidup yang memangsa makhluk hidup lainnya.'
                },

            ]
        },
        {
            judul: '2.	Kompetisi',
            link: '',
            info: '',
            yt: '',
            img: null,
            soal: [
                {
                    tanya: `Contoh interaksi kompetisi:\na.	Penyu bersaing dengan ikan kakatua dalam memakan alga.\nb.	Saat bertelur, penyu dapat bersaing dengan hewan lain seperti burung camar untuk mendapatkan tempat bersarang ataupun tempat peristirahatan.\n\nBerdasarkan contoh interaksi kompetisi di atas, manakah yang merupakan pengertian kompetisi?
                    `,
                    a: 'Kompetisi adalah kerjasama antara organisme-organisme yang saling mendukung satu sama lain untuk bertahan hidup dalam lingkungan yang keras.',
                    b: 'Kompetisi merupakan interaksi ketika organisme-organisme saling bersaing untuk mendapatkan sumber daya yang sama dan memiliki jumlah yang terbatas dan terjadi apabila organisme-organisme tersebut hidup di habitat yang sama dan makan makanan yang sama.',
                    c: 'Kompetisi merupakan proses di mana organisme saling berinteraksi untuk saling menguntungkan satu sama lain dalam mendapatkan sumber daya yang tersedia.',
                    d: 'Kompetisi adalah fenomena di mana organisme saling membantu dan mendukung satu sama lain dalam mencapai tujuan bersama dalam suatu ekosistem.',
                    jawaban: 'b',
                    isi: '',
                    yt: '',
                    img: null,
                    respon: 'Kompetisi merupakan interaksi ketika organisme-organisme saling bersaing untuk mendapatkan sumber daya yang sama dan memiliki jumlah yang terbatas. Kompetisi dapat terjadi apabila terdapat beberapa organisme yang hidup di habitat sama dan memakan makanan yang sama.'
                },

            ]
        },
        {
            judul: '3.	Herbivori',
            link: '',
            info: '',
            yt: '',
            img: null,
            soal: [
                {
                    tanya: `Contoh interaksi herbivori:\na.	Penyu hijau memakan alga di habitat mereka.\nb.	Tukik memakan plankton di laut.\n\nBerdasarkan contoh interaksi herbivori di atas, manakah yang merupakan pengertian herbivori?
                    `,
                    a: 'Herbivori adalah interaksi ketika organisme herbivora memakan tumbuhan.',
                    b: 'Herbivori adalah proses di mana tumbuhan mengonsumsi nutrien dari udara dan air untuk pertumbuhan mereka.',
                    c: 'Herbivori adalah interaksi antar organisme yang bersaing untuk mendapatkan makanan dan habitat yang sama.',
                    d: 'Herbivori adalah interaksi ketika kedua organisme sama-sama mendapatkan keuntungan.',
                    jawaban: 'a',
                    isi: '',
                    yt: '',
                    img: null,
                    respon: 'Herbivori adalah interaksi ketika organisme herbivora memakan tumbuhan.'
                },

            ]
        },
        {
            judul: '4.	Simbiosis',
            link: '',
            info: 'Simbiosis merupakan hubungan antarpopulasi yang menempati habitat sama yang dapat bersifat positif, negatif, atau netral, tergantung pada dampaknya terhadap organisme yang terlibat.',

            img: null,
            soal: [
                {
                    tanya: `a.	Mutualisme\nContoh:\n-Ikan yang membersihkan cangkang dan kulit penyu serta memakan parasit yang menempel pada penyu. Ikan tersebut untung karena mendapatkan makanan sedangkan penyu untung karena cangkang dan kulitnya menjadi bersih.\n\nTontonlah video berikut:\nBerdasarkan contoh interaksi simbiosis mutualisme di bawah, manakah yang merupakan pengertian simbiosis mutualisme?
                    `,
                    a: 'Simbiosis mutualisme merupakan hubungan ketika kedua pihak sama-sama mendapatkan keuntungan.',
                    b: 'Simbiosis mutualisme merupakan hubungan di mana satu pihak mendapatkan manfaat sementara pihak lainnya merugi.',
                    c: 'Simbiosis mutualisme merupakan interaksi di mana satu organisme merugikan organisme lainnya untuk keuntungannya sendiri.',
                    d: 'Simbiosis mutualisme merupakan hubungan di mana satu pihak mendapatkan manfaat sedangkan satu pihak lainnya tidak mendapatkan apa-apa.',
                    jawaban: 'a',
                    isi: '',
                    yt: 'https://youtu.be/ruIu1JajBaU',
                    img: require('../../assets/sim1.png'),
                    respon: 'Simbiosis mutualisme merupakan hubungan ketika kedua pihak yang terlibat sama-sama mendapatkan keuntungan.'
                },
                {
                    tanya: `b.	Komensalisme\nContoh:\n\n - Ikan remora yang bersembunyi di bagian bawah tubuh penyu dan sesekali memakan sedikit makanan yang dibuang penyu. Ikan remora untung karena mendapatkan tempat berlindung sedangkan penyu tidak mendapatkan apa-apa.\n\n-Teripang dan siput yang menempel pada cangkang penyu untuk mendapatkan tumpangan. Teripang dan siput untung karena mendapatkan tumpangan sedangkan penyu tidak mendapat apa-apa.
                    `,
                    a: 'Simbiosis komensalisme adalah hubungan di mana kedua pihak yang terlibat sama-sama mendapatkan keuntungan.',
                    b: 'Simbiosis komensalisme adalah interaksi di mana satu merugikan organisme lainnya untuk keuntungannya sendiri.',
                    c: 'Simbiosis komensalisme adalah hubungan ketika salah satu pihak mendapat keuntungan sedangkan pihak lainnya tidak mendapatkan keuntungan maupun kerugian.',
                    d: 'Simbiosis komensalisme adalah hubungan ketika kedua pihak yang terlibat tidak mendapatkan manfaat apapun.',
                    jawaban: 'c',
                    isi: '',
                    yt: `Gambar teripang menempel di cangkang penyu\nSumber: https://oliveridleyproject-org\n\nBerdasarkan contoh interaksi simbiosis komensalisme di atas, manakah yang merupakan pengertian simbiosis komensalisme?`,
                    img: require('../../assets/sim2.png'),
                    respon: 'Simbiosis komensalisme adalah hubungan ketika salah satu pihak mendapat keuntungan sedangkan pihak lainnya tidak mendapatkan keuntungan maupun kerugian.'
                },
                {
                    tanya: `c.	Parasitisme\nTontonlah video berikut!\nBerdasarkan contoh interaksi simbiosis parasitisme di dibawah, manakah yang merupakan pengertian simbiosis parasitisme?`,
                    a: 'Simbiosis parasitisme adalah hubungan di mana kedua pihak yang terlibat sama-sama mendapatkan keuntungan.',
                    b: 'Simbiosis parasitisme adalah hubungan ketika salah satu pihak mendapat keuntungan sedangkan pihak lainnya tidak mendapatkan keuntungan maupun kerugian.',
                    c: 'Simbiosis parasitisme adalah hubungan ketika salah satu pihak mendapatkan manfaat sedangkan pihak lainnya juga mendapatkan manfaat dalam bentuk lain.',
                    d: 'Simbiosis parasitisme adalah hubungan ketika salah satu pihak mendapatkan keuntungan sedangkan pihak lainnya dirugikan.',
                    jawaban: 'd',
                    isi: '',
                    yt: `https://youtu.be/ebnYaXV33bY?si=I1PDarnerLjvfO_I `,
                    img: require('../../assets/sim3.png'),
                    respon: 'Parasitisme adalah hubungan ketika salah satu pihak mendapatkan keuntungan sedangkan pihak lainnya dirugikan. Pihak yang mendapat keuntungan tersebut dinamakan parasit sedangkan pihak yang dirugikan dinamakan inang.'
                },

            ]
        },

        {
            judul: 'Bacalah artikel berikut!',
            link: 'https://www.bengkulutoday.com/bagian-i-penyu-mati-karena-parasit ',
            info: 'Setelah membaca artikel di atas, jawablah pertanyaan-pertanyaan di bawah ini!',
            yt: '',
            img: require('../../assets/sim4.png'),
            soal: [
                {
                    tanya: `1)	Apa jenis parasit yang mengganggu penyu di dalam artikel tersebut`,
                    a: 'Cacing pita',
                    b: 'Ganggang',
                    c: 'Teritip',
                    d: 'Bakteri',
                    jawaban: 'c',
                    isi: '',
                    yt: '',
                    img: null,
                    respon: 'Teritip'
                },
                {
                    tanya: `2)	Bagaimana ciri-ciri parasit tersebut?`,
                    a: 'Berbentuk pipih, memanjang, dan tubuhnya bersegmen-segmen.',
                    b: 'Struktur tubuhnya berserat, warnanya hijau atau cokelat, memiliki akar yang kuat.',
                    c: 'Berupa kerang, warnanya putih dengan bagian lunak di dalamnya, dan suka menempel ke bagian tubuh organisme lain.',
                    d: 'Berukuran mikroskopis, tidak memiliki membran inti, menimbulkan penyakit.',
                    jawaban: 'c',
                    isi: '',
                    yt: '',
                    img: null,
                    respon: 'Berupa kerang, warnanya putih dengan bagian lunak di dalamnya, dan suka menempel ke bagian tubuh organisme lain.'
                },
                {
                    tanya: `3)	Apa efek yang diakibatkan oleh parasit tersebut kepada penyu?`,
                    a: 'Meningkatkan kecepatan berenang penyu.',
                    b: 'Menyebabkan karapas penyu berlubang dan mengancam kehidupannya.',
                    c: 'Membuat penyu menjadi lebih tahan terhadap perubahan suhu air.',
                    d: 'Membatasi gerak penyu dan menyediakan nutrisi bagi tubuh penyu.',
                    jawaban: 'b',
                    isi: '',
                    yt: '',
                    img: null,
                    respon: 'Berupa kerang, warnanya putih dengan bagian lunak di dalamnya, dan suka menempel ke bagian tubuh organisme lain.'
                },

            ]
        },




    ]);

    const [loading, setLoading] = useState(false);
    const [cek, setCek] = useState('');

    const MYtest = () => {
        return (
            <View>
                <Text>test 123</Text>
            </View>
        )
    }

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
                        fontFamily: fonts.sugar[600],
                        fontSize: 20,
                    }}>{data[nomor].judul}</Text>


                    {data[nomor].img !== null &&
                        <TouchableWithoutFeedback onPress={() => {
                            setGambarPilih([data[nomor].img]);
                            setIsVisible(true)
                        }}>
                            <Image source={data[nomor].img} style={{
                                width: 200,
                                height: 200,
                                resizeMode: 'contain',
                                alignSelf: 'center'
                            }} /></TouchableWithoutFeedback>}

                    {data[nomor].link.length > 0 && <TouchableOpacity onPress={() => Linking.openURL(data[nomor].link)}>
                        <Text style={{
                            fontFamily: fonts.sugar[400],
                            fontSize: 14,
                            textAlign: 'center',
                            marginBottom: 10,
                        }}>{data[nomor].link}</Text></TouchableOpacity>}
                    {data[nomor].info.length > 0 && <Text style={{
                        fontFamily: fonts.sugar[400],
                        fontSize: 14,
                    }}>{data[nomor].info}</Text>}


                    <FlatList data={data[nomor].soal} renderItem={({ item, index }) => {
                        return (
                            <View style={{
                                padding: 10,

                            }}>
                                <Text style={{
                                    fontFamily: fonts.sugar[400],
                                    fontSize: 16,
                                }}>{alpa[index]}) {item.tanya}</Text>

                                {item.img !== null &&

                                    <TouchableWithoutFeedback onPress={() => {
                                        setGambarPilih([item.img]);
                                        setIsVisible(true)
                                    }}>

                                        <Image source={item.img} style={{
                                            width: 200,
                                            height: 120,
                                            alignSelf: 'center',
                                            resizeMode: 'contain'
                                        }} />

                                    </TouchableWithoutFeedback>}

                                {item.yt.length > 0 && <TouchableOpacity onPress={() => Linking.openURL(item.yt)}>
                                    <Text style={{
                                        fontFamily: fonts.sugar[400],
                                        fontSize: 14,
                                        textAlign: 'center',
                                    }}>{item.yt}</Text></TouchableOpacity>}



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

                                {item.isi !== '' && <Text style={{
                                    fontFamily: fonts.sugar[400],
                                    color: colors.white,
                                    backgroundColor: colors.secondary,
                                    padding: 10,
                                    borderRadius: 5,
                                    marginTop: 5,
                                }}>{item.respon}</Text>}

                            </View>
                        )
                    }} />

                </ScrollView>
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
                        if (nomor == data.length - 1) {
                            showMessage({
                                message: 'Tidak bisa lanjut ini adalah soal terakhir'
                            })
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

            <ImageView
                images={gambarPilih}
                imageIndex={0}
                visible={visible}
                onRequestClose={() => setIsVisible(false)}
            />
        </SafeAreaView >
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
})