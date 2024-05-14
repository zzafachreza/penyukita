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

export default function Menu5b({ navigation, route }) {
    const item = route.params;

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [nomor, setNomor] = useState(0);
    const [done, setDone] = useState(false);

    const [soal, setSoal] = useState([

        {
            tanya: `Penyu adalah hewan laut yang penting untuk dijaga keberadaannya karena mereka berperan penting dalam menjaga keseimbangan ekosistem laut.`,
            jawaban: 1,
            isi: null
        },
        {
            tanya: `Melakukan perburuan telur dan daging penyu merupakan tindakan yang diperbolehkan karena telur dan daging penyu mengandung protein yang sangat tinggi dan baik untuk tubuh.`,
            jawaban: 0,
            isi: null
        },
        {
            tanya: `Berdagang telur dan daging penyu merupakan mata pencaharian yang sangat menjanjikan dan tidak berpengaruh terhadap kerusakan ekosistem.`,
            jawaban: 0,
            isi: null
        },
        {
            tanya: `Membiarkan sampah plastik berserakan di pantai tidak menimbulkan dampak negatif pada penyu.`,
            jawaban: 0,
            isi: null
        },
        {
            tanya: `Mengganggu penyu yang sedang bertelur di pantai adalah tindakan yang baik karena itu dapat mencegah populasi penyu yang berlebihan.`,
            jawaban: 0,
            isi: null
        },
        {
            tanya: `Benang pancing dan jaring yang digunakan untuk menangkap ikan sebaiknya yang ramah lingkungan agar jika putus dan masuk ke laut dapat lebih mudah terurai.`,
            jawaban: 1,
            isi: null
        },
        {
            tanya: `Pemerintah dan masyarakat seharusnya bekerja sama dalam upaya melestarikan dan menjaga habitat penyu.`,
            jawaban: 1,
            isi: null
        },
        {
            tanya: `Membangun penginapan di pesisir pantai tempat penyu bertelur tidak berdampak negatif terhadap keberadaan populasi penyu.`,
            jawaban: 0,
            isi: null
        },
        {
            tanya: `Pengembangan ekowisata penyu yang berkelanjutan dapat membantu melestarikan penyu dengan mempromosikan kesadaran tentang pentingnya menjaga habitat penyu kepada masyarakat.`,
            jawaban: 1,
            isi: null
        },
        {
            tanya: `Mengambil penyu dari laut dan memeliharanya di rumah merupakan tindakan yang sangat baik untuk melindungi penyu.`,
            jawaban: 0,
            isi: null
        },
        {
            tanya: `Menangkap ikan secara ilegal menggunakan pukat hela tidak akan membuat penyu ikut tertangkap.`,
            jawaban: 0,
            isi: null
        },
        {
            tanya: `Membuang limbah cair bekas deterjen, scrub wajah, minyak, dan sisa makanan ke laut tidak akan merusak ekosistem laut. `,
            jawaban: 0,
            isi: null
        },
        {
            tanya: `Pemberian penerangan yang sangat cerah pada pantai tempat sarang penyu sangat bermanfaat dalam membantu penyu bertelur.`,
            jawaban: 0,
            isi: null
        },
        {
            tanya: `Program konservasi penyu hanyalah membuang-buang waktu, tenaga, dan uang.`,
            jawaban: 0,
            isi: null
        },
        {
            tanya: `Program konservasi penyu seharusnya dilakukan oleh pemerintah dan organisasi lingkungan saja, tidak perlu melibatkan masyarakat umum.`,
            jawaban: 0,
            isi: null
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
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <FlatList data={soal} numColumns={1} renderItem={({ item, index }) => {
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
                                            tmp[index].isi = 1;
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
                                            tmp[index].isi = 0;
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


            </ScrollView>}





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