import { Alert, StyleSheet, Text, View, Image, FlatList, ActivityIndicator, Dimensions, ImageBackground, TouchableWithoutFeedback, TouchableNativeFeedback, Linking } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiURL, getData, MYAPP, storeData } from '../../utils/localStorage';
import { MyDimensi, colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { NavigationRouteContext, useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import 'intl';
import 'intl/locale-data/jsonp/en';
import moment from 'moment';
import 'moment/locale/id';
import MyCarouser from '../../components/MyCarouser';
import { Rating } from 'react-native-ratings';
import { MyGap, MyHeader } from '../../components';


export default function Home({ navigation, route }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    getData('user').then(res => {
      setUser(res)
    })
  }, []);

  const MyMenu = ({ img = require('../../assets/krisis.png'), label = 'krisis Penyu', target }) => {
    return (
      <TouchableWithoutFeedback onPress={() => navigation.navigate(target, {
        img: img,
        label: label
      })}>
        <View style={{
          marginVertical: 5,
          marginHorizontal: 5,
          padding: 2,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Image source={img} style={{
            width: windowWidth / 5,
            height: windowWidth / 5,
            resizeMode: 'contain'
          }} />
          <Text style={{
            marginTop: 5,
            fontFamily: fonts.sugar[600],
            fontSize: 16,
            color: colors.secondary
          }}>{label}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: colors.primary,
      padding: 10,
    }}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',

      }}>

        <Image source={require("../../assets/logo.png")} style={{
          width: 100,
          height: 100,
        }} />

        <Text style={{
          flex: 1,
          fontFamily: fonts.sugar[600],
          fontSize: 25,
          textAlign: 'center',
          marginLeft: 10,
          color: colors.warning,
          textShadowColor: colors.black,

        }}>Mari Kita Belajar !</Text>

      </View>

      <View style={{
        flex: 1,
        justifyContent: 'center',

      }}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <MyMenu target='Menu1' img={require('../../assets/krisis.png')} label='Krisis Penyu' />
          <MyMenu target='Menu2' img={require('../../assets/tentang.png')} label='Tentang Penyu' />
        </View>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <MyMenu target='Menu3' img={require('../../assets/interaksi.png')} label='Interaksi' />
          <MyMenu target='Menu4' img={require('../../assets/ancaman.png')} label='Ancaman' />
        </View>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <MyMenu target='Menu5' img={require('../../assets/pelestarian.png')} label='Upaya Pelestarian' />
          <MyMenu target='Menu6' img={require('../../assets/glosarium.png')} label='Glosarium' />
        </View>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <MyMenu target='Menu7' img={require('../../assets/referensi.png')} label='Referensi' />
          <MyMenu target='Menu8' img={require('../../assets/informasi.png')} label='Informasi' />
        </View>
      </View>

      <TouchableWithoutFeedback onPress={() => {
        Alert.alert(MYAPP, 'Apakah kamu yakin akan keluar aplikasi ?', [
          {
            text: 'TIDAK'
          },
          {
            text: 'Keluar',
            onPress: () => {
              storeData('user', null);
              navigation.reset({
                index: 0,
                routes: [{ name: 'Splash' }],
              });
            }
          }
        ])
      }}>
        <View style={{
          width: windowWidth / 2,
          marginVertical: 5,
          marginHorizontal: 5,
          padding: 2,
          justifyContent: 'center',
          alignItems: 'flex-start'
        }}>
          <Image source={require('../../assets/back.png')} style={{
            width: windowWidth / 7,
            height: windowWidth / 7,
            resizeMode: 'contain'
          }} />

        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  tulisan: {
    fontSize: 14,
    marginBottom: 10,
    fontFamily: fonts.secondary[600],
    color: colors.black,
    textAlign: 'justify'
  },
  tulisanJudul: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: fonts.secondary[800],
    color: colors.black,
    textAlign: 'justify'
  }
})