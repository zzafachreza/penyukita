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

export default function Menu4a({ navigation, route }) {
    const item = route.params;

    const [gambarPilih, setGambarPilih] = useState([
        require('../../assets/logo.png')
    ])
    const [visible, setIsVisible] = useState(false);



    const [done, setDone] = useState(false)
    const [nomor, setNomor] = useState(0);
    const [data, setData] = useState([
        {
            judul: 'a.	Perubahan suhu',
            link: '',
            info: 'Perubahan suhu dapat disebabkan oleh perubahan iklim. Perubahan suhu dapat mempengaruhi rasio jenis kelamin anakan penyu (tukik) saat masa penetasan (inkubasi) di dalam pasir. \nPerhatikan diagram berikut!\n',
            yt: '',
            img: require('../../assets/fak1.png'),
            soal: [
                {
                    tanya: `Menurut kamu, mengapa perubahan garis pantai yang mempengaruhi kemiringan pantai dapat menjadi salah satu ancaman terhadap populasi penyu?`,
                    a: 'Peningkatan suhu sarang berhubungan dengan peningkatan jumlah tukik jantan yang menetas.',
                    b: 'Penurunan suhu sarang berhubungan dengan peningkatan jumlah tukik betina yang menetas.',
                    c: 'Pada suhu 29, tukik yang menetas lebih dominan berjenis kelamin betina.',
                    d: 'Pada suhu di bawah 29, tukik yang menetas lebih dominan berjenis kelamin jantan.',
                    jawaban: 'd',
                    isi: '',
                    yt: '',
                    img: null,
                    respon: 'Jika suhu penetasan di bawah 29℃, maka tukik yang menetas akan dominan berjenis kelamin jantan sedangkan jika suhu penetasan di atas 29℃, maka tukik yang menetas akan dominan berjenis kelamin betina (Sitorus et al., 2022). '
                },
                {
                    tanya: `Dalam Setiawan et al., (2018), batas kisaran suhu inkubasi untuk perkembangan embrio selama masa penetasan adalah antara 25-27°C dan 33-35°C. Menurut kamu, apa yang akan terjadi pada telur penyu jika suhu penetasan telur A adalah 23°C dan telur B adalah 40°C?`,
                    a: 'Pada suhu penetasan 23°C, perkembangan embrio telur A akan lebih cepat.  Pada suhu penetasan 40°C, embrio pada telur B akan mengalami kerusakan.',
                    b: 'Pada suhu penetasan 23°C, perkembangan embrio telur A akan berjalan lambat.  Pada suhu penetasan 40°C, embrio pada telur B akan mengalami kerusakan.',
                    c: 'Pada suhu penetasan 23°C, perkembangan embrio telur A akan berjalan lambat.  Pada suhu penetasan 40°C, perkembangan embrio pada telur B akan lebih cepat.',
                    d: 'Pada suhu penetasan 23°C, perkembangan embrio telur A akan lebih cepat.  Pada suhu penetasan 40°C, perkembangan embrio pada telur B akan lebih cepat.',
                    jawaban: 'b',
                    isi: '',
                    yt: '',
                    img: null,
                    respon: 'Suhu yang terlalu tinggi dapat membuat telur penyu rusak sehingga embrio di dalamnya akan mati. Sedangkan suhu yang terlalu rendah dapat menyebabkan embrio lambat berkembang dan bahkan gagal berkembang hingga mati. Oleh karena itu, suhu berpengaruh terhadap populasi penyu'
                },

            ]
        },
        {
            judul: 'b.	Perubahan garis pantai terhadap habitat penyu',
            link: '',
            info: 'Menurut penelitian Rupilu et al., (2019), perubahan garis pantai dapat mempengaruhi kemiringan pantai. ',
            yt: '',
            img: null,
            soal: [
                {
                    tanya: `Menurut kamu, mengapa perubahan garis pantai yang mempengaruhi kemiringan pantai dapat menjadi salah satu ancaman terhadap populasi penyu?`,
                    a: 'Perubahan garis pantai dapat berpengaruh pada masuk atau tidaknya air ke dalam sarang. Air yang masuk sarang dapat meningkatkan kelembaban dan menyebabkan pertumbuhan jamur yang berpotensi merusak telur penyu.',
                    b: 'Perubahan garis pantai menyebabkan kemiringan pantai yang tidak sesuai dengan kriteria peneluran penyu karena ruang peneluran yang tersedia semakin banyak.',
                    c: 'Perubahan garis pantai yang terlalu curam mempermudah aksesibilitas induk dalam mencari tempat bertelur dan mempermudah tukik keluar dari sarang untuk menuju ke air laut.',
                    d: 'Perubahan garis pantai akibat dari erosi pantai secara terus-menerus dapat membantu mengubur telur penyu menjadi lebih dalam sehingga telur penyu dapat lebih cepat menetas.',
                    jawaban: 'a',
                    isi: '',
                    yt: '',
                    img: null,
                    respon: `Jadi, kemiringan pantai dapat berpengaruh pada masuk atau tidaknya air ke dalam sarang. Air yang masuk ke sarang dapat meningkatkan kelembaban sehingga memunculkan jamur pada telur. Selain itu, Semakin terjal garis pantai, semakin besar energi yang dibutuhkan oleh penyu untuk mencapai area supratidal untuk bertelur. Kesulitan ini juga bertambah karena penghilatan penyu terhadap melihat objek di depannya bersifat terbatas, hal ini terjadi karena kemampuan visual penyu hanya efektif pada sudut pandang tidak lebih dari 150° (Yusuf, 2000; Setiawan et al., 2018).
                    Lebar dan kemiringan pantai tidak sesuai kriteria habitat bertelur penyu akan menjadi penghambat penyu untuk bertelur. Perubahan kemiringan pantai tersebut dapat disebabkan oleh perubahan iklim yang menyebabkan permukaan air laut naik dan pengikisan air laut. 
                    `
                },


            ]
        },
        {
            judul: 'c.	Gangguan kesehatan',
            link: 'https://youtu.be/oBgsyw0SyAA?si=HVgEqJenubqfbmRp',
            info: `Gangguan kesehatan penyu dapat disebabkan oleh berbagai faktor seperti virus, bakteri, jamur, dan parasit yang dapat mempengaruhi kemampuan penyu dalam mencari makan, menghindari predator, dan bahkan menyebabkan kematian.\n\nTontonlah video berikut!
            `,
            yt: 'https://youtu.be/oBgsyw0SyAA?si=HVgEqJenubqfbmRp',
            img: require('../../assets/fak2.png'),
            soal: [
                {
                    tanya: `Berdasarkan video tersebut,\n\n1)	Gangguan kesehatan jenis apa yang terjadi pada penyu tersebut dan apa penyebabnya?
                    `,
                    a: 'Infeksi bakteri karena pencemaran laut. ',
                    b: 'Tumor fibropapillomatosis karena infeksi virus. ',
                    c: 'Gangguan pencernaan karena sampah plastik.',
                    d: 'Kanker karena mutasi gen. ',
                    jawaban: 'b',
                    isi: '',
                    yt: '',
                    img: null,
                    respon: `Tumor fibropapillomatosis karena infeksi virus. `
                },
                {
                    tanya: `2)	Bagaimana dampaknya terhadap penyu tersebut`,
                    a: 'Tidak berpengaruh secara signifikan terhadap penyu.  ',
                    b: 'Dapat menghalangi penglihatan, membuat susah bergerak dan mencari makan, bahkan kematian.',
                    c: 'Dapat membuat tubuh penyu semakin besar, lebih agresif, dan aktif. ',
                    d: 'Dapat mempercepat kemampuan penyu dalam berenang dan mencari makan. ',
                    jawaban: 'b',
                    isi: '',
                    yt: '',
                    img: null,
                    respon: `Dapat menghalangi penglihatan, membuat susah bergerak dan mencari makan, bahkan kematian.`
                },
                {
                    tanya: `3)	Diketahui bahwa penyakit tersebut dapat menular ke penyu lain, bagaimana cara pencegahan penularannya?`,
                    a: 'Memusnahkan penyu yang terinfeksi agar tidak menular ke penyu lainnya. ',
                    b: 'Memisahkan penyu yang terinfeksi dengan penyu yang tidak terinfeksi serta memberikan perawatan medis yang tepat. ',
                    c: 'Tidak ada cara untuk mencegah penularan penyakit tersebut.',
                    d: 'Melepas semua penyu dari balai konservasi baik yang terinfeksi maupun yang tidak ke alam liar agar sembuh dengan sendirinya.',
                    jawaban: 'b',
                    isi: '',
                    yt: '',
                    img: null,
                    respon: `Memisahkan penyu yang terinfeksi dengan penyu yang tidak terinfeksi serta memberikan perawatan medis yang tepat. `
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





                    {data[nomor].info.length > 0 && <Text style={{
                        fontFamily: fonts.sugar[400],
                        fontSize: 14,
                    }}>{data[nomor].info}</Text>}

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
                            }} />
                        </TouchableWithoutFeedback>
                    }
                    {data[nomor].link.length > 0 && <TouchableOpacity onPress={() => Linking.openURL(data[nomor].link)}>
                        <Text style={{
                            fontFamily: fonts.sugar[400],
                            fontSize: 14,
                            textAlign: 'center',
                            marginBottom: 10,
                        }}>{data[nomor].link}</Text></TouchableOpacity>}


                    <FlatList data={data[nomor].soal} renderItem={({ item, index }) => {
                        return (
                            <View style={{
                                padding: 10,

                            }}>
                                <Text style={{
                                    fontFamily: fonts.sugar[400],
                                    fontSize: 16,
                                }}>{item.tanya}</Text>

                                {item.img !== null && <TouchableWithoutFeedback onPress={() => {
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