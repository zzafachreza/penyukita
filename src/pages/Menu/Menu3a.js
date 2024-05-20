import { ActivityIndicator, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { apiURL, api_token, MYAPP, storeData } from '../../utils/localStorage';
import axios from 'axios';
import RenderHtml from 'react-native-render-html';
import SoundPlayer from 'react-native-sound-player'
import Pdf from 'react-native-pdf';
export default function Menu3a({ navigation, route }) {
    const item = route.params;


    const [loading, setLoading] = useState(true);
    const [cek, setCek] = useState('');

    const [data, setData] = useState({});

    useEffect(() => {
        axios.post(apiURL + 'artkel_pdf', {
            judul: route.params.label
        }).then(res => {
            console.log(res.data);
            setData(res.data[0])
        }).finally(() => {
            setLoading(false)
        })
    }, []);

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
                        fontSize: 16
                    }}>Apa itu ekosistem? Ekosistem adalah suatu sistem ekologi yang terbentuk oleh hubungan timbal balik antara makhluk hidup dengan lingkungannya yang tidak terpisahkan. Terdapat dua komponen yang saling berinteraksi dalam ekosistem, yaitu komponen biotik dan komponen abiotik. Contoh komponen biotik adalah ikan, penyu, dan cumi-cumi sedangkan contoh komponen abiotik adalah air, batu, dan pasir.</Text>

                    <Text style={{
                        marginVertical: 10,
                        fontFamily: fonts.sugar[400],
                        fontSize: 16,
                        color: colors.warning
                    }}>Komponen biotik merupakan komponen…sedangkan komponen abiotik merupakan komponen... </Text>


                    <View style={{
                        marginBottom: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-around'
                    }}>
                        <TouchableOpacity onPress={() => {
                            setCek(0);
                            SoundPlayer.playSoundFile('oke', 'mp3')
                        }} style={{
                            width: windowWidth / 2.5,
                            padding: 10,
                            borderWidth: 1,
                            borderRadius: 10,
                            backgroundColor: cek == 0 && cek !== '' ? colors.success : colors.primary
                        }}>
                            <Text style={{
                                textAlign: 'center',
                                fontFamily: fonts.sugar[400],
                                fontSize: 16,
                                color: cek == 0 && cek !== '' ? colors.white : colors.black
                            }}>hidup, tak hidup</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            setCek(1);
                            SoundPlayer.playSoundFile('tidak', 'mp3')
                        }} style={{
                            width: windowWidth / 2.5,
                            padding: 10,
                            borderWidth: 1,
                            borderRadius: 10,
                            backgroundColor: cek == 1 && cek !== '' ? colors.danger : colors.primary
                        }}>
                            <Text style={{
                                textAlign: 'center',
                                fontFamily: fonts.sugar[400],
                                fontSize: 16,
                                color: cek == 1 && cek !== '' ? colors.white : colors.black
                            }}>tak hidup, hidup</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{
                        fontFamily: fonts.sugar[400],
                        fontSize: 16,
                        marginBottom: 30,
                    }}>Ekosistem air laut merupakan ekosistem yang menjadi tempat tinggal penyu. Wulandari (2009) menyatakan ekosistem lautan, pantai, estuari, terumbu karang, dan padang lamun merupakan bagian dari ekosistem air laut. </Text>

                    <Text style={{
                        fontFamily: fonts.sugar[600],
                        fontSize: 16,
                        color: colors.secondary
                    }}>1. Ekosistem lautan</Text>
                    <Text style={{
                        fontFamily: fonts.sugar[400],
                        fontSize: 16,
                        color: colors.black,
                        textAlign: 'justify'
                    }}>Menurut Wulandari (2009), habitat laut dapat dibedakan berdasarkan
                        kedalamannya (yaitu litoral, neritik, batial, dan abisal) dan berdasarkan
                        wilayah permukaannya secara horizontal (epipelagik, mesopelagik,
                        batiopelagik, abisalpelagik, dan hadalpelagik). Berikut adalah contoh
                        komponen biotik dan abiotik yang menyusun ekosistem lautan
                        (Wulandari, 2009{'\n'}{'\n'}
                        - Komponen biotik: hiu, gurita, lele laut, ikan, lobster, alga, plankton.{'\n'}
                        - Komponen abiotik: salinitas, tekanan osmosis air laut, kedalaman air,
                        intensitas cahaya, dan suhu.
                    </Text>
                    <Text style={{
                        marginTop: 20,
                        fontFamily: fonts.sugar[600],
                        fontSize: 16,
                        color: colors.secondary
                    }}>2. Ekosistem pantai</Text>
                    <Text style={{
                        fontFamily: fonts.sugar[400],
                        fontSize: 16,
                        color: colors.black,
                        textAlign: 'justify'
                    }}>Ekosistem pantai terletak berbatasan dengan ekosistem darat, laut,
                        dan daerah pasang surut serta dipengaruhi siklus harian pasang surut
                        air laut (Wulandari, 2009). Berikut adalah contoh komponen biotik dan
                        abiotik yang menyusun ekosistem pantai (Wulandari, 2009).{'\n'}{'\n'}
                        - Komponen biotik: ganggang, moluska, remis, kepiting, burung pantai,
                        anemon laut, kerang, siput, landak laut,bintang laut, ikan-ikan kecil,
                        rumput laut, pandan, babakoan, bakau, dan tumbuhan mangrove.{'\n'}
                        - Komponen abiotik: pasang surut air laut, gelombang, angin, serasah
                        mangrove, unsur hara, dan substrat.
                    </Text>

                    <Text style={{
                        marginTop: 20,
                        fontFamily: fonts.sugar[600],
                        fontSize: 16,
                        color: colors.secondary
                    }}>3. Ekosistem estuari</Text>
                    <Text style={{
                        fontFamily: fonts.sugar[400],
                        fontSize: 16,
                        color: colors.black,
                        textAlign: 'justify'
                    }}>Ekosistem estuari atau yang dikenal lain dengan sebutan muara
                        merupakan tempat bersatunya laut dengan sungai (Wulandari, 2009).
                        Berikut adalah contoh komponen biotik dan abiotik yang menyusun
                        ekosistem estuari (Wulandari, 2009).{'\n'}{'\n'}
                        - Komponen biotik: rumput rawa, ganggang, fitoplankton, cacing,
                        kerang, kepiting, larva ikan, ikan sidat, ikan salmon, dan lamun.{'\n'}
                        - Komponen abiotik: nutrien air, salinitas, pasang surut air, besar
                        kecilnya aliran air sungai, bentuk garis pantai, dan substrat.
                    </Text>
                    <Text style={{
                        fontFamily: fonts.sugar[600],
                        fontSize: 16,
                        color: colors.secondary
                    }}>4. Ekosistem terumbu karang</Text>
                    <Text style={{
                        fontFamily: fonts.sugar[400],
                        fontSize: 16,
                        color: colors.black,
                        textAlign: 'justify'
                    }}>Dalam Wulandari (2009), karang merupakan organisme bertanggung
                        jawab dalam pembentukan endapan kapur kalsium karbonat yang
                        menyusun ekosistem terumbu karang. Berikut adalah contoh komponen
                        abiotik dan biotik yang menyusun ekosistem terumbu karang.{'\n'}{'\n'}
                        Komponen biotik:{'\n'}{'\n'}
                        - siput, landak laut, ikan, gurita, bintang laut, ikan, alga, penyu,
                        udang, kelompok anemon, kelompok kipas laut (Wulandari, 2009){'\n'}
                        - koloni karang batu, karang lunak, spons, alga, echinodermata
                        (seperti bintang laut, bulu babi, dan teripang), moluska (seperti siput dan
                        gurita) (Sangaji, 2017).
                        Komponen abiotik:{'\n'}{'\n'}
                        - Sinar matahari, substrat, suhu, gelombang, arus, salinitas,
                        kedalaman air, kebersihan air (Wulandari, 2009).{'\n'}
                        - Pasir, puing, lanau, air, batu (Sahetapy et al., 2017)
                    </Text>

                    <Text style={{
                        marginTop: 20,
                        fontFamily: fonts.sugar[600],
                        fontSize: 16,
                        color: colors.secondary
                    }}>5. Ekosistem padang lamun</Text>
                    <Text style={{
                        fontFamily: fonts.sugar[400],
                        fontSize: 16,
                        color: colors.black,
                        textAlign: 'justify'
                    }}>Padang lamun adalah ekosistem yang terdiri dari tumbuhan lamun dan
                        menjadi tempat tinggal berbagai jenis organisme laut seperti bintang
                        laut, teripang, rumput laut, dan berbagai jenis ikan (Wulandari, 2009).
                        Berikut adalah contoh komponen abiotik dan biotik yang menyusun
                        ekosistem padang lamun.{'\n'}{'\n'}
                        Komponen biotik:{'\n'}
                        - Dugong, penyu, ikan, lamun, alga, teripang, sapi laut, bintang
                        laut, udang, siput laut, keong laut (Wulandari, 2009).{'\n'}
                        - Ikan samandar, taripang, kepiting, bintang laut, spons
                        (Ayorbaba et al., 2021).{'\n'}{'\n'}
                        Komponen abiotik:{'\n'}
                        - Intensitas cahaya, suhu, substrat, kecepatan arus, surutnya air
                        (Wulandari, 2009).{'\n'}
                        - Air, tanah, udara, dan cahaya matahari (Ayorbaba et al., 2021).
                        Pengaruh komponen abiotik dalam ekosistem terhadap kelangsungan
                        hidup penyu{'\n'}{'\n'}
                        Dalam (Sao Miguel et al., 2022), dijelaskan beberapa faktor penting
                        seperti suhu, salinitas air laut, dan pasang surut air laut yang dapat
                        mempengaruhi keberlangsungan hidup penyu. Perubahan suhu, salinitas
                        air, dan pasang surut air laut tersebut dapat terjadi karena perubahan
                        iklim.{'\n'}{'\n'}
                        a. Suhu{'\n'}
                        Suhu dapat mempengaruhi tingkat keberhasilan penetasan telur
                        penyu dan rasio jenis kelamin penyu. Suhu yang ekstrem, baik
                        terlalu tinggi maupun terlalu rendah daripada suhu optimal
                        penetasan bisa mengganggu proses inkubasi telur penyu sehingga
                        mengurangi kesuksesan penetasan.{'\n'}{'\n'}
                        b. Salinitas air laut{'\n'}
                        Perubahan signifikan dalam salinitas air dapat mengganggu
                        keseimbangan elektrolit dalam tubuh penyu, mempengaruhi
                        habitat, dan sumber makanan penyu.{'\n'}{'\n'}
                        c. Pasang surut air laut{'\n'}
                        Pasang surut air laut yang ekstrem dapat mengubah kondisi
                        geografis pantai yang berpengaruh terhadap aksesibilitas penyu ke
                        lokasi peneluran. Selain itu, masuknya air laut ke dalam sarang
                        dapat meningkatkan kelembaban sarang sehingga dapat
                        memunculkan jamur yang merusak telur penyu.
                    </Text>


                    {/* <Pdf
                        style={{
                            flex: 1,
                            width: '100%',
                            height: windowHeight * 3,
                            backgroundColor: colors.primary,

                        }}
                        // minScale={1.0}
                        // maxScale={3.0}
                        // scale={1.0}
                        spacing={0}

                        trustAllCerts={false}
                        // source={{ uri: webURL + data.foto_pdf, cache: true }}
                        source={{
                            uri: data.pdf, cache: true
                        }}
                        onLoadComplete={(numberOfPages, filePath) => {
                            console.log(`Number of pages: ${numberOfPages}`);
                        }}
                        onPageChanged={(page, numberOfPages) => {
                            console.log(`Current page: ${page}`);
                        }}
                        onError={(error) => {
                            console.log(error);
                        }}
                        onPressLink={(uri) => {
                            Linking.openURL(uri)
                        }}
                    /> */}
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