import { ActivityIndicator, FlatList, Image, Linking, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, fonts, windowWidth } from '../../utils';
import { apiURL, api_token, MYAPP, storeData } from '../../utils/localStorage';
import axios from 'axios';
import RenderHtml from 'react-native-render-html';
import SoundPlayer from 'react-native-sound-player'
import { Icon } from 'react-native-elements';
import { showMessage } from 'react-native-flash-message';
export default function Menu4b({ navigation, route }) {
    const item = route.params;

    const [done, setDone] = useState(false)
    const [nomor, setNomor] = useState(2);
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
                        fontFamily: fonts.sugar[400],
                        fontSize: 14,
                    }}>Faktor predasi adalah ancaman yang timbul dari makhluk hidup yang merupakan pemangsa penyu. Berikut adalah contoh predasi yang terjadi pada telur, tukik, dan penyu dewasa.</Text>


                    <View style={{
                        marginTop: 10,
                        flexDirection: 'row'
                    }}>
                        <Text style={{
                            fontFamily: fonts.sugar[400],
                            fontSize: 14,
                        }}>a. </Text>
                        <Text style={{
                            fontFamily: fonts.sugar[400],
                            fontSize: 14,
                        }}>Serangga seperti semut yang mengerumuni telur penyu menyebabkan cangkang telur rusak sehingga mengganggu proses penetasan penyu, mengundang bakteri dan jamur, dan bahkan mengkakibatkan embrio mati. </Text>
                    </View>
                    <View style={{
                        marginTop: 10,
                        flexDirection: 'row'
                    }}>
                        <Text style={{
                            fontFamily: fonts.sugar[400],
                            fontSize: 14,
                        }}>b. </Text>
                        <Text style={{
                            fontFamily: fonts.sugar[400],
                            fontSize: 14,
                        }}>Rakun, kepiting, dan semut yang menyerang telur dan tukik (anakan penyu) yang masih berada di dalam sarang menyebabkan menurunnya populasi penyu. </Text>
                    </View>
                    <View style={{
                        marginTop: 10,
                        flexDirection: 'row'
                    }}>
                        <Text style={{
                            fontFamily: fonts.sugar[400],
                            fontSize: 14,
                        }}>c. </Text>
                        <Text style={{
                            fontFamily: fonts.sugar[400],
                            fontSize: 14,
                        }}>Kepiting, babi liar, biawak, tikus, burung elang, dan anjing yang memangsa tukik saat tukik menuju perairan.
                            {'\n'}Berikut ini video predasi kepiting terhadap tukik.{'\n\n'}
                            <TouchableOpacity onPress={() => Linking.openURL('https://youtube.com/shorts/VFFXUTm0D-k?si=Uip0OLqlmCytIi2s')}>
                                <Text style={{

                                    fontFamily: fonts.sugar[400],
                                    fontSize: 12,
                                    color: colors.secondary,
                                }}>https://youtube.com/shorts/VFFXUTm0D-k?si=Uip0OLqlmCytIi2s </Text>
                            </TouchableOpacity>
                        </Text>
                    </View>
                    <View style={{
                        marginTop: 10,
                        flexDirection: 'row'
                    }}>
                        <Text style={{
                            fontFamily: fonts.sugar[400],
                            fontSize: 14,
                        }}>d. </Text>
                        <Text style={{
                            fontFamily: fonts.sugar[400],
                            fontSize: 14,
                        }}>Ikan cucut memangsa tukik di laut.</Text>
                    </View>
                    <View style={{
                        marginTop: 10,
                        flexDirection: 'row'
                    }}>
                        <Text style={{
                            fontFamily: fonts.sugar[400],
                            fontSize: 14,
                        }}>e. </Text>
                        <Text style={{
                            fontFamily: fonts.sugar[400],
                            fontSize: 14,
                        }}>Jaguar memangsa penyu betina saat penyu betina berada di pantai untuk bertelur. </Text>
                    </View>
                    <View style={{
                        marginTop: 10,
                        flexDirection: 'row'
                    }}>
                        <Text style={{
                            fontFamily: fonts.sugar[400],
                            fontSize: 14,
                        }}>f. </Text>
                        <Text style={{
                            fontFamily: fonts.sugar[400],
                            fontSize: 14,
                        }}>Hiu dan paus memangsa penyu saat berada di dalam perairan.{'\n'}Berikut ini video predasi hiu terhadap penyu.
                            {'\n'}
                            {'\n'}
                            <TouchableOpacity onPress={() => Linking.openURL('https://youtube.com/shorts/g6WeTGGrot4?si=ZC0M_PchkKXEpRYn ')}>
                                <Text style={{

                                    fontFamily: fonts.sugar[400],
                                    fontSize: 12,
                                    color: colors.secondary,
                                }}>https://youtube.com/shorts/g6WeTGGrot4?si=ZC0M_PchkKXEpRYn </Text>
                            </TouchableOpacity>
                        </Text>
                    </View>



                </ScrollView>

            </View >}


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
        padding: 10,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: colors.warning
    },
})