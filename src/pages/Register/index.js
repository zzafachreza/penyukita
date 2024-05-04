import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    Button,
    View,
    Image,
    ScrollView,
    ImageBackground,
    Dimensions,
    Switch,
    SafeAreaView,
    TouchableOpacity,
    ActivityIndicator,
    Alert,
} from 'react-native';
import { colors } from '../../utils/colors';
import { MyDimensi, fonts, windowWidth } from '../../utils/fonts';
import { MyInput, MyGap, MyButton, MyPicker, MyCalendar, MyCalendarSecond, MyHeader } from '../../components';
import axios from 'axios';
import { showMessage } from 'react-native-flash-message';
import { apiURL, api_token, MYAPP } from '../../utils/localStorage';
import DatePicker from 'react-native-datepicker'
import moment from 'moment';
import { Icon } from 'react-native-elements';
import SweetAlert from 'react-native-sweet-alert';
import { color } from 'react-native-reanimated';

export default function Register({ navigation }) {
    const backPage = () => {
        navigation.goBack();
    }




    const [loading, setLoading] = useState(false);
    const [sama, setSama] = useState(true)
    const [data, setData] = useState({
        api_token: api_token,
        telepon: '',
        nama_ibu: '',
        nama_ayah: '',
        nama_anak: '',
        kelurahan: '',
        alamat: '',
        password: '',
        repassword: '',


    });

    const simpan = () => {


        console.log(data);
        if (
            data.nama_ibu.length === 0 &&
            data.telepon.length === 0 &&
            data.password.length === 0

        ) {
            showMessage({
                message: 'Formulir pendaftaran tidak boleh kosong !',
            });
        } else if (data.nama_ibu.length === 0) {
            showMessage({
                message: 'Masukan nama lengkap ibu',
            });
        }

        else if (data.telepon.length === 0) {
            showMessage({
                message: 'Masukan nomor telepon',
            });
        }
        else if (data.password.length === 0) {
            showMessage({
                message: 'Masukan kata sandi kamu',
            });
        } else if (data.repassword.length === 0) {
            showMessage({
                message: 'Ulangi kata sandi kamu',
            });
        } else {



            setLoading(true);
            axios
                .post(apiURL + 'register', data)
                .then(res => {
                    console.warn(res.data);
                    setLoading(false);
                    if (res.data.status == 404) {
                        SweetAlert.showAlertWithOptions({
                            title: MYAPP,
                            subTitle: res.data.message,
                            style: 'error',
                            cancellable: true
                        },
                            callback => navigation.navigate('Login'));

                    } else {
                        SweetAlert.showAlertWithOptions({
                            title: MYAPP,
                            subTitle: res.data.message,
                            style: 'success',
                            cancellable: true
                        },
                            callback => navigation.navigate('Login'));

                    }


                });
        }
    };



    return (

        <View
            style={{
                flex: 1,
                backgroundColor: colors.white,

                position: 'relative',


            }}>

            <MyHeader judul="Registrasi" onPress={backPage} />



            {/* <Switch onValueChange={toggleSwitch} value={isEnabled} /> */}
            <ScrollView showsVerticalScrollIndicator={false} style={styles.page}>




                <View style={{
                    paddingHorizontal: 0,
                }}>
                    {/* <Text style={{
                            fontSize: MyDimensi / 2.5,
                            fontFamily: fonts.primary[600],
                            color: colors.black,
                            textAlign:'center',
                            marginBottom:'10%',
                            marginTop:0
                        }}>REGISTRASI</Text> */}
                    {/* <Text style={{
                            fontSize: MyDimensi / 4,
                            fontFamily: fonts.primary[400],
                            color: colors.primary,
                            marginBottom: 10,
                        }}>Silahkan daftar agar bisa login</Text> */}

                    {/* NAMA LENGKAP IBU */}
                    <MyInput label='Nama Lengkap Ibu' onChangeText={x => {
                        setData({
                            ...data,
                            nama_ibu: x
                        })
                    }} placeholder='Masukan Nama Lengkap Ibu' />
                    <MyGap jarak={20} />

                    {/* NAMA LENGKAP AYAH */}
                    <MyInput label='Nama Lengkap Ayah' onChangeText={x => {
                        setData({
                            ...data,
                            nama_ayah: x
                        })
                    }} placeholder='Masukan Nama Lengkap Ayah' />
                    <MyGap jarak={20} />

                    {/* NAMA LENGKAP ANAK */}
                    <MyInput onChangeText={x => {
                        setData({
                            ...data,
                            nama_anak: x
                        })
                    }} label='Nama Lengkap Anak (Opsional)' placeholder='Masukan Nama Lengkap Anak' />
                    <MyGap jarak={20} />


                    {/* NOMOR TELEPON */}
                    <MyInput keyboardType='phone-pad' onChangeText={x => {
                        setData({
                            ...data,
                            telepon: x
                        })
                    }} label='Nomor Telepon' placeholder='Masukan Nomor Telepon' />
                    <MyGap jarak={20} />


                    {/* NOMOR TELEPON */}
                    <MyInput onChangeText={x => {
                        setData({
                            ...data,
                            kelurahan: x
                        })
                    }} label='Kelurahan' placeholder='Masukan Kelurahan' />
                    <MyGap jarak={20} />



                    {/* NOMOR TELEPON */}
                    <MyInput onChangeText={x => {
                        setData({
                            ...data,
                            alamat: x
                        })
                    }} label='Alamat / RT' placeholder='Masukan Alamat' />
                    <MyGap jarak={20} />



                    {/*INPUT KATA SANDI */}
                    <MyInput
                        placeholder="Kata Sandi"
                        label="Kata Sandi"
                        value={data.password}
                        secureTextEntry={true}
                        onChangeText={value =>
                            setData({
                                ...data,
                                password: value,
                            })
                        }
                    />


                    {/* INPUT KATA SANDI ULANG */}
                    <MyGap jarak={20} />
                    <MyInput
                        borderColor={sama ? colors.primary : colors.danger}
                        borderWidth={sama ? 1 : 1}
                        placeholder="Masukan ulang kata sandi"
                        label="Masukan ulang kata sandi"
                        iconname="lock-closed"
                        secureTextEntry
                        onChangeText={value => {

                            if (value !== data.password) {
                                setSama(false)
                            } else {
                                setSama(true)
                            }

                            setData({
                                ...data,
                                repassword: value,
                            })
                        }

                        }
                    />
                </View>
                <MyGap jarak={20} />




                {!loading &&
                    <>
                        <MyButton


                            title="Daftar"
                            Icons="log-in"
                            onPress={simpan}
                        />

                    </>
                }

                <MyGap jarak={30} />
                {loading && <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <ActivityIndicator color={colors.primary} size="large" />
                </View>}
            </ScrollView>

        </View>

    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 10,
        position: 'relative',
        backgroundColor: colors.white,


    },
    image: {
        width: 620 / 4,
        height: 160 / 4,
    },
});
