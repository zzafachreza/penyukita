import { ActivityIndicator, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, fonts, windowWidth } from '../../utils';
import { apiURL, api_token, MYAPP, storeData } from '../../utils/localStorage';
import axios from 'axios';
import RenderHtml from 'react-native-render-html';
import { Icon } from 'react-native-elements';

export default function Menu6({ navigation, route }) {
    const item = route.params;

    const [data, setData] = useState([]);
    const [key, setKey] = useState('');
    const [TMP, setTMP] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        __GetTransaction();
    }, [])

    const __GetTransaction = () => {
        setLoading(true);
        axios.post(apiURL + 'glosarium', {
            judul: 'Referensi'
        }).then(res => {
            console.log(res.data)
            setData(res.data);
            setTMP(res.data);
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
                <Image source={item.img} style={{
                    width: 60,
                    height: 60
                }} />
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
                flex: 1,
                paddingHorizontal: 20,
            }}>
                <View style={{
                    position: 'relative'
                }}>
                    {key.length > 0 &&

                        <TouchableWithoutFeedback onPress={() => {
                            setKey(''); setData(TMP);
                        }}>
                            <View style={{
                                position: 'absolute',
                                zIndex: 99,
                                top: 10,
                                right: 10,
                            }}>
                                <Icon type='ionicon' name='close' color={colors.secondary} />
                            </View>
                        </TouchableWithoutFeedback>}
                    <View style={{
                        position: 'absolute',
                        top: 10,
                        left: 10,
                    }}>
                        <Icon type='ionicon' name='search' color={colors.secondary} />
                    </View>
                    <TextInput value={key} onChangeText={x => {
                        setKey(x);
                        if (x.length > 0) {
                            let TMPSrc = data.filter(i => i.nama.toLowerCase().indexOf(x.toLowerCase()) > -1);
                            if (TMPSrc.length > 0) {
                                setData(TMPSrc);
                            }
                        } else {
                            setData(TMP);
                        }
                    }} placeholder='Pencarian . . .' style={{
                        height: 45,
                        borderWidth: 1,
                        marginBottom: 10,
                        borderRadius: 30,
                        paddingLeft: 40,
                        borderColor: colors.secondary,
                        fontFamily: fonts.secondary[600],
                        fontSize: 15
                    }} />
                </View>
                <FlatList data={data} numColumns={1} showsVerticalScrollIndicator={false} renderItem={({ item }) => {
                    return (
                        <View style={{
                            padding: 10,
                            borderWidth: 1,
                            borderRadius: 10,
                            borderColor: colors.secondary,
                            marginVertical: 5,
                        }}>
                            <Text style={{
                                fontFamily: fonts.sugar[600],
                                fontSize: 18,
                                color: colors.secondary
                            }}>{item.nama}</Text>
                            <Text style={{
                                fontFamily: fonts.sugar[400],
                                fontSize: 16,
                                color: colors.secondary
                            }}>{item.arti}</Text>
                        </View>
                    )
                }} />

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

const styles = StyleSheet.create({})