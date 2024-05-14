import { ActivityIndicator, FlatList, Image, Linking, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, fonts, windowWidth } from '../../utils';
import { apiURL, api_token, MYAPP, storeData } from '../../utils/localStorage';
import axios from 'axios';
import RenderHtml from 'react-native-render-html';
import SoundPlayer from 'react-native-sound-player'
import { Icon } from 'react-native-elements';
import { showMessage } from 'react-native-flash-message';
export default function Menu4c({ navigation, route }) {
    const item = route.params;

    const [done, setDone] = useState(false)
    const [nomor, setNomor] = useState(0);
    const [data, setData] = useState([
        {
            judul: 'a.	Perburuan oleh manusia',
            link: 'https://www.detik.com/bali/hukum-dan-kriminal/d-6918554/polda-bali-soroti-warga-sering-buru-penyu-untuk-konsumsi ',
            info: 'Bacalah artikel di bawah ini: ',
            yt: '',
            img: null,
            soal: [
                {
                    tanya: `Setelah itu, jawablah pertanyaan-pertanyaan berikut!\n1)	Apa isi artikel di atas?`,
                    a: 'Polisi menyoroti tindakan warga yang masih sering memburu penyu maupun telurnya untuk dijual dan dikonsumsi.',
                    b: 'Polisi mendukung tindakan warga yang masih sering memburu penyu maupun telurnya untuk dijual dan dikonsumsi.',
                    c: 'Ajakan Polisi kepada masyarakat Pulau Dewata untuk memanfaatkan daging penyu belimbing yang singgah di pantai untuk bertelur.',
                    d: 'Polisi melarang warga untuk memburu penyu belimbing yang singgah di pantai karena penyu dapat merusak ekosistem laut.',
                    jawaban: 'a',
                    isi: '',
                    yt: '',
                    img: null,
                    respon: 'Polisi menyoroti tindakan warga yang masih sering memburu penyu maupun telurnya untuk dijual dan dikonsumsi.'
                },
                {
                    tanya: `Grafik hasil perbandingan kadar asam amino esensial berupa metionin, leusin, isoleusin, dan lisin pada telur penyu dan telur bebek
                    \nSumber: (Ginting et al., 2017)
                    \nAsam amino esensial merupakan nutrisi yang sangat penting untuk tubuh. Beberapa contoh asam amino esensial adalah metionin, leusin, isoleusin, dan lisin. Berdasarkan grafik di atas, manakah pernyataan di bawah ini yang paling sesuai?`,
                    a: 'Kandungan isoleusin pada telur bebek lebih tinggi daripada kandungan leusinnya.',
                    b: 'Kandungan lisin pada telur penyu lebih tinggi daripada kandungan leusinnya.',
                    c: 'Kandungan leusin, lisin, dan isoleusin pada telur bebek lebih tinggi daripada telur penyu.',
                    d: 'Kandungan leusin, lisin, dan isoleusin pada telur penyu lebih tinggi daripada telur bebek',
                    jawaban: 'd',
                    isi: '',
                    yt: '',
                    img: require('../../assets/fak3.png'),
                    respon: 'Kandungan leusin, lisin, dan isoleusin pada telur penyu lebih tinggi daripada telur bebek'
                },
                {
                    tanya: `3)	Dalam beberapa dekade terakhir, laut sudah menjadi sangat tercemar oleh berbagai limbah terutama limbah yang dihasilkan oleh aktivitas manusia seperti limbah industri, limbah rumah tangga, dan sebagainya. Menurutmu, apakah aman jika mengonsumsi telur penyu saat ini mengingat tempat tinggal penyu sudah dicemari berbagai limbah?`,
                    a: 'Kandungan asam amino telur dan daging penyu memang besar tetapi selain itu, telur dan daging penyu juga mengandung limbah seperti logam berbahaya yang dapat menyebabkan keracunan.',
                    b: 'Kandungan asam amino dan arsenik yang terdapat pada daging dan telur penyu sangat aman untuk dikonsumsi manusia. ',
                    c: 'Telur dan daging penyu sangat aman dikonsumsi karena tidak mengandung kolestrol seperti telur ayam. ',
                    d: 'Kandungan logam merkuri dan arsenik pada telur penyu sangat aman dikonsumsi tetapi daging penyu mengandung merkuri dengan kadar sangat besar yang tidak aman dikonsumsi.',
                    jawaban: 'a',
                    isi: '',
                    yt: '',
                    img: null,
                    respon: 'Kandungan asam amino telur dan daging penyu memang besar tetapi selain itu, telur dan daging penyu juga mengandung limbah seperti logam berbahaya yang dapat menyebabkan keracunan.'
                },
                {
                    tanya: `4)	Bagian tubuh penyu yang mana saja yang biasa diincar untuk diburu?`,
                    a: 'Cangkang, telur, dan daging.',
                    b: 'Daging, teritip, dan kuku.',
                    c: 'Kulit, cangkang, dan telur.',
                    d: 'Kulit, daging, dan gigi.',
                    jawaban: 'a',
                    isi: '',
                    yt: '',
                    img: null,
                    respon: 'Cangkang, telur, dan daging.'
                },
                {
                    tanya: `5)	Apa efek yang terjadi setelah maraknya perburuan telur dan daging penyu?`,
                    a: 'Penurunan jumlah penyu yang membuat ekosistem menjadi seimbang.',
                    b: 'Penurunan jumlah penyu yang dapat mengganggu keseimbangan ekosistem laut.',
                    c: 'Bertambahnya keanekaragaman hayati di Indonesia yang menstabilkan ekosistem.',
                    d: 'Bertambahnya populasi penyu di seluruh dunia yang mengganggu keseimbangan ekosistem.',
                    jawaban: 'b',
                    isi: '',
                    yt: '',
                    img: null,
                    respon: 'Penurunan jumlah penyu yang dapat mengganggu keseimbangan ekosistem laut.'
                },

            ]
        },
        {
            judul: 'b.	Penangkapan penyu secara tidak sengaja',
            link: 'https://images.app.goo.gl/Bh8qctQXvhyYoxW28',
            info: 'Manusia sering sekali menggunakan alat seperti jaring apung, jaring insang, jaring pukat udang, tombak, dan rawai saat melakukan aktivitas perikanan. Alat-alat tersebut sering membuat penyu tidak sengaja tertangkap dan bahkan juga melukai tubuh penyu. Hal itu tentunya menjadi ancaman yang dapat mengganggu penyu.\n\nGambar penyu yang terjerat jaring',
            yt: '',
            img: require('../../assets/fak4.png'),
            soal: [
                {
                    tanya: `Menurutmu, apa solusi yang dapat digunakan untuk menangani banyaknya kasus tertangkapnya penyu secara tidak sengaja saat manusia melakukan aktivitas perikanan?`,
                    a: 'Mengabaikan penyu yang tidak sengaja tertangkap karena memang pada awalnya tidak ingin menangkap penyu.',
                    b: 'Menyerahkan solusinya kepada pemerintah yang berwenang.',
                    c: 'Melakukan aktivitas perikanan menggunakan alat yang meminimalisir kemungkinan tertangkapnya penyu seperti circle hook.',
                    d: 'Menangkap ikan menggunakan pukat harimau agar lebih aman.',
                    jawaban: 'c',
                    isi: '',
                    yt: '',
                    img: null,
                    respon: `Melakukan aktivitas perikanan menggunakan alat yang meminimalisir kemungkinan tertangkapnya penyu seperti circle hook.`
                },


            ]
        },
        {
            judul: 'c.	Pencemaran lingkungan',
            link: 'https://sampahlaut.id/2022/07/03/makin-mengerikan-tiap-tahun-1-000-penyu-mati-akibat-sampah-plastik/',
            info: `Sampah sisa benang pancing dan jaring ikan di laut sering menyebabkan penyu terjerat sehingga lama-kelamaan akan mati. Benang pancing dan jaring ikan juga dapat menyebabkan gesekan yang keras pada kulit penyu yang dapat menyebabkan penyu terluka.\nBacalah artikel berikut!`,
            yt: '',
            img: require('../../assets/fak5.png'),
            soal: [
                {
                    tanya: `Selanjutnya, jawablah pertanyaan-pertanyaan di bawah ini!\n\n1)	Pada artikel tersebut, apa bahan pencemar yang menyebabkan penyu mati?
                    `,
                    a: 'Sampah plastik',
                    b: 'Limbah deterjen',
                    c: 'Tumpahan minyak',
                    d: 'Sampah organik',
                    jawaban: 'a',
                    isi: '',
                    yt: '',
                    img: null,
                    respon: `Sampah plastik`
                },
                {
                    tanya: `2)	Menurut kamu bagaimana solusi yang tepat untuk mengatasi permasalahan pada artikel tersebut?`,
                    a: 'Membuang lebih banyak sampah plastik ke laut untuk mempercepat proses penguraian alami.',
                    b: 'Meningkatkan kesadaran publik dan pendidikan tentang dampak negatif sampah plastik pada ekosistem laut.',
                    c: 'Mengurangi penggunaan kendaraan bermotor untuk mengurangi emisi gas buang yang berkontribusi pada pencemaran laut.',
                    d: 'Membiarkan hewan laut beradaptasi secara alami dengan keberadaan sampah plastik di laut.',
                    jawaban: 'b',
                    isi: '',
                    yt: '',
                    img: null,
                    respon: `Meningkatkan kesadaran publik dan pendidikan tentang dampak negatif sampah plastik pada ekosistem laut.`
                },


            ]
        },
        {
            judul: 'd.	Pembangunan di pesisir',
            link: '',
            info: `Pilihlah jawaban yang benar dari pertanyaan-pertanyaan berikut ini!`,
            yt: '',
            img: null,
            soal: [
                {
                    tanya: `1)	Apa hubungan pembangunan pesisir yang berlebihan dengan penyu?`,
                    a: 'Pembangunan pesisir yang berlebihan dapat menarik populasi penyu untuk bertelur.',
                    b: 'Pembangunan pesisir berlebihan mengurangi daya tarik wisatawan untuk membeli penyu.',
                    c: 'Pembangunan pesisir berlebihan dapat menambah ruang peneluran penyu.',
                    d: 'Pembangunan pesisir yang berlebihan dapat mengurangi kawasan peneluran penyu.',
                    jawaban: 'd',
                    isi: '',
                    yt: '',
                    img: null,
                    respon: `Pembangunan pesisir yang berlebihan dapat mengurangi kawasan peneluran penyu.`
                },
                {
                    tanya: `2)	Jika dilihat dari aspek ekonomi dan sosial, berikut ini manfaat pembangunan pesisir bagi masyarakat, kecuali… `,
                    a: 'Dengan pembangunan ekowisata berbasis edukasi, akan ada peluang untuk meningkatkan kesadaran lingkungan pada masyarakat.',
                    b: 'Pembangunan pesisir seperti hotel dan resort dapat menciptakan peluang kerja bagi penduduk setempat.',
                    c: 'Dengan pembangunan pesisir, kehidupan masyarakat daerah pesisir menjadi semakin terbelakang.',
                    d: 'Pembangunan infrastuktur di pesisir seperti air bersih, listrik, dan jembatan dapat meningkatkan kualitas hidup masyarakat. ',
                    jawaban: 'c',
                    isi: '',
                    yt: '',
                    img: null,
                    respon: `Dengan pembangunan pesisir, kehidupan masyarakat daerah pesisir menjadi semakin terbelakang.`
                },
                {
                    tanya: `3)	Apa saja contoh pembangunan pesisir yang dapat mengganggu habitat penyu?`,
                    a: 'Perluasan kawasan peneluran yang nyaman untuk penyu.',
                    b: 'Penghijauan kembali hutan bakau yang rusak.',
                    c: 'Pembuatan taman nasional laut untuk melindungi penyu.',
                    d: 'Pembangunan hotel dan resort di seluruh wilayah tepi pantai.',
                    jawaban: 'd',
                    isi: '',
                    yt: '',
                    img: null,
                    respon: `Pembangunan hotel dan resort di seluruh wilayah tepi pantai.`
                },
                {
                    tanya: `4)	Menurut kamu, apakah memberikan penerangan yang sangat cerah di pesisir dapat membantu aktivitas penyu?`,
                    a: 'Ya, penerangan yang sangat cerah membantu penyu menemukan jalan kembali ke laut.',
                    b: 'Tidak, penerangan yang sangat cerah dapat mengganggu induk penyu yang akan bertelur.',
                    c: 'Ya, penerangan yang cerah mendorong pertumbuhan tanaman pantai yang menjadi makanan penyu.',
                    d: 'Tidak, penerangan yang cerah meningkatkan suhu pasir dan mempercepat perkembangan embrio telur penyu.',
                    jawaban: 'b',
                    isi: '',
                    yt: '',
                    img: null,
                    respon: `Tidak, penerangan yang sangat cerah dapat mengganggu induk penyu yang akan bertelur.`
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
                    }}>
                        Faktor antropogenik merupakan faktor yang disebabkan oleh ulah manusia. Kesadaran dan pengetahuan masyarakat terhadap pentingnya perlindungan penyu yang masih kurang menyebabkan kemunculan faktor-faktor berikut
                    </Text>

                    <Text style={{
                        fontFamily: fonts.sugar[600],
                        fontSize: 20,
                    }}>{data[nomor].judul}</Text>





                    {data[nomor].info.length > 0 && <Text style={{
                        fontFamily: fonts.sugar[400],
                        fontSize: 14,
                    }}>{data[nomor].info}</Text>}

                    {data[nomor].img !== null && <View>

                        <Image source={data[nomor].img} style={{
                            width: 200,
                            height: 200,
                            resizeMode: 'contain',
                            alignSelf: 'center'
                        }} />
                    </View>}
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

                                {item.img !== null &&
                                    <View>
                                        <Text style={{
                                            textAlign: 'center',
                                            fontFamily: fonts.sugar[400],
                                            marginBottom: 10,
                                            fontSize: 12,
                                        }}>Perhatikan gambar berikut ini</Text>
                                        <Image source={item.img} style={{
                                            width: 200,
                                            height: 120,
                                            alignSelf: 'center',
                                            resizeMode: 'contain'
                                        }} />
                                    </View>
                                }
                                <Text style={{
                                    fontFamily: fonts.sugar[400],
                                    fontSize: 16,
                                }}>{item.tanya}</Text>



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