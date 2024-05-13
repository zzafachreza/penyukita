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
import { MyPicker } from '../../components';

export default function Menu2d({ navigation, route }) {
    const item = route.params;

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [nomor, setNomor] = useState(0);
    const [done, setDone] = useState(false);

    const [soal, setSoal] = useState([
        {
            jenis: 'Penyu hijau dewasa',
            golongan: 'herbivora',
            makanan: 'alga, lamun, tumbuhan mangrove, rumput laut',
            isi: '',
        },
        {
            jenis: 'Penyu belimbing',
            golongan: 'karnivora',
            makanan: 'ubur-ubur dan invertebrata bertubuh lunak seperti tunikata dan sea squirt',
            isi: '',
        },
        {
            jenis: 'Penyu kempi',
            golongan: 'karnivora',
            makanan: 'kepiting, ikan, ubur-ubur, udang, kerang, siput, cumi-cumi ',
            isi: '',
        },
        {
            jenis: 'Penyu tempayan',
            golongan: 'karnivora',
            makanan: 'kepiting, keong, siput',
            isi: '',
        },
        {
            jenis: 'Penyu hijau muda',
            golongan: 'omnivora',
            makanan: 'udang, kepiting, ubur-ubur, rumput laut, dan alga',
            isi: '',
        },
        {
            jenis: 'Penyu lekang',
            golongan: 'omnivora',
            makanan: 'kepiting, udang, lobster, bulu babi, ubur-ubur, alga, dan ikan',
            isi: '',
        },
        {
            jenis: 'Penyu pipih',
            golongan: 'omnivora',
            makanan: 'teripang, ubur-ubur, karang, udang, kepiting, kerang, siput, cumi-cumi, ikan, dan rumput laut',
            isi: '',
        },
        {
            jenis: 'Penyu sisik',
            golongan: 'karnivora',
            makanan: 'dominan memakan spons laut',
            isi: '',
        },

    ])

    useEffect(() => {
        __GetTransaction();
    }, [])

    const __GetTransaction = () => {

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
                <ScrollView>
                    <Text style={{
                        fontFamily: fonts.sugar[400],
                        fontSize: 14,
                    }}>Penyu dapat digolongkan berdasarkan jenis makanannya, yaitu golongan herbivora (pemakan tumbuh-tumbuhan), karnivora (pemakan daging), dan omnivora (pemakan segala baik tumbuhan maupun hewan).
                    </Text>
                    <Text style={{
                        marginTop: 10,
                        fontFamily: fonts.sugar[400],
                        fontSize: 14,
                        color: colors.warning
                    }}>
                        Di bawah ini terdapat tabel jenis penyu dan makanannya. Isilah titik-titik pada kolom golongan (apakah herbivora, karnivora, atau omnivora) berdasarkan informasi jenis makanan yang ada di tabel!
                    </Text>

                    <View style={{
                        flex: 1
                    }}>
                        <FlatList data={soal} renderItem={({ item, index }) => {
                            return (
                                <View style={{
                                    borderWidth: 1,
                                    borderRadius: 10,
                                    borderColor: colors.secondary,
                                    padding: 10,
                                    marginVertical: 5,
                                    flexDirection: 'row'
                                }}>
                                    <View style={{
                                        flex: 1,
                                    }}>
                                        <Text style={{
                                            fontFamily: fonts.sugar[600],
                                            fontSize: 16
                                        }}>Jenis Penyu</Text>
                                        <Text style={{
                                            fontFamily: fonts.sugar[400],
                                            fontSize: 16,
                                            color: colors.secondary,
                                        }}>{item.jenis}</Text>
                                        <Text style={{
                                            fontFamily: fonts.sugar[600],
                                            fontSize: 16
                                        }}>Jenis Makanan</Text>
                                        <Text style={{
                                            fontFamily: fonts.sugar[400],
                                            fontSize: 16,
                                            color: colors.secondary,
                                        }}>{item.makanan}</Text>
                                    </View>
                                    <View style={{
                                        flex: 0.8,
                                    }}>
                                        <MyPicker onValueChange={x => {

                                            if (index == soal.length - 1) {
                                                setDone(true)
                                            }

                                            let tmp = [...soal];
                                            tmp[index].isi = x;
                                            setSoal(tmp);

                                            if (soal[index].isi == soal[index].golongan && soal[index].isi != '') {
                                                SoundPlayer.playSoundFile('oke', 'mp3')
                                            } else {
                                                SoundPlayer.playSoundFile('tidak', 'mp3')
                                            }

                                        }} backgroundColor={soal[index].isi == soal[index].golongan && soal[index].isi != '' ? colors.success : soal[index].isi != soal[index].golongan && soal[index].isi != '' ? colors.danger : colors.white} textColor={colors.black} label="Golongan" data={[
                                            {
                                                label: 'pilih jawaban',

                                            },
                                            {
                                                label: 'herbivora',
                                                value: 'herbivora'
                                            },
                                            {
                                                label: 'karnivora',
                                                value: 'karnivora'
                                            },
                                            {
                                                label: 'omnivora',
                                                value: 'omnivora'
                                            },

                                        ]} />
                                    </View>
                                </View>
                            )
                        }} />
                    </View>
                    {done && <View style={{
                        flex: 1,
                        padding: 10,
                    }}>
                        <Text style={{
                            fontFamily: fonts.sugar[400],
                            fontSize: 14,
                            color: colors.black,
                        }}>Penyu pipih dan penyu lekang ketika dewasa bersifat omnivora, penyu hijau dewasa bersifat herbivora, penyu tempayan dan penyu kempi bersifat karnivora, penyu belimbing memakan ubur-ubur dan invertebrata bertubuh lunak seperti tunikata dan sea squirt, serta penyu sisik paling dominan memakan spons laut (Volunteer Coordinator STPS, 2021). Pada penyu hijau, terjadi perubahan perilaku makan dari muda ke dewasa yaitu dari omnivora menjadi herbivora dominan (Arthur et al., 2008; Isdianto et al., 2022). Menurut Bahera et al., (2014) dalam Isdianto et al., (2022), penyu belimbing, penyu kempi, penyu tempayan, dan penyu sisik merupakan jenis-jenis penyu yang utamanya dikenal bersifat karnivora.</Text>

                        <Text style={{
                            marginTop: 10,
                            fontFamily: fonts.sugar[600],
                            fontSize: 14,
                            color: colors.secondary,
                        }}>Yeay! Sekarang ayo pelajari habitat penyu!</Text>

                    </View>}
                </ScrollView>

            </View>}




            {loading && <View style={{
                padding: 20,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ActivityIndicator color={colors.secondary} size="large" />
            </View>}

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    btn: {
        marginBottom: 10,
        marginRight: 10,
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