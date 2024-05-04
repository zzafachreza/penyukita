import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Animated, View, Image, ScrollView, ActivityIndicator, TouchableOpacity, BackHandler, Alert, Linking, ImageBackground } from 'react-native';
import { fonts, windowWidth, colors, windowHeight, MyDimensi } from '../../utils';
import { MyInput, MyGap, MyButton } from '../../components';
import axios from 'axios';
import { apiURL, api_token, MYAPP, storeData } from '../../utils/localStorage';
import { showMessage } from 'react-native-flash-message';
import { TouchableNativeFeedback } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import SweetAlert from 'react-native-sweet-alert';
import { color } from 'react-native-reanimated';

export default function Login({ navigation }) {

  const [kirim, setKirim] = useState({
    api_token: api_token,
    nama_lengkap: null,
  });
  const [loading, setLoading] = useState(false);

  const [comp, setComp] = useState({});

  const card = new Animated.Value(-30);
  const img = new Animated.Value(-20);




  const masuk = () => {


    if (kirim.nama_lengkap == null) {
      showMessage({
        type: 'danger',
        message: 'Nama lengkap tidak boleh kosong !'
      })

    } else {


      setLoading(true);
      console.log(kirim);

      storeData('user', kirim);
      navigation.replace('Home')



    }




  }

  useEffect(() => {
    Animated.timing(card, {
      toValue: 1,
      duration: 850,
      useNativeDriver: false,
    }).start();
    Animated.timing(img, {
      toValue: 0,
      duration: 850,
      useNativeDriver: false,
    }).start();
    axios.post(apiURL + 'company').then(res => {
      setComp(res.data.data);
    })

  }, []);

  return (

    <ScrollView style={{ flex: 1, backgroundColor: colors.primary, position: "relative" }}>




      <View style={{
        justifyContent: 'center',
        alignItems: 'center',



      }}>
      </View>

      <ScrollView style={{ flex: 1, position: 'relative' }}>
        <Animated.View style={{
          padding: 20,
          flex: 1, margin: 10,
          bottom: card,
          borderRadius: 0,

        }}>

          <Image source={require('../../assets/logo.png')} style={{
            height: 250, width: 250,
            alignItems: 'center',
            alignSelf: "center",
          }} />

          <Text style={{
            textAlign: 'center',
            fontFamily: fonts.primary[600],
            fontSize: MyDimensi / 2.5,
          }}>
            SILAHKAN MASUKAN NAMA
          </Text>


          {/* USERNAME INPUT */}


          <MyGap jarak={40} />

          <MyInput label="Nama Lengkap" onChangeText={x => {
            setKirim({
              ...kirim,
              nama_lengkap: x
            })
          }} iconname="person-outline" placeholder="Masukan nama lengkap kamu" />





          <MyGap jarak={30} />
          {!loading &&





            <MyButton
              onPress={masuk}
              title="Masuk Aplikasi"
              warna={colors.secondary}

              Icons="log-in-outline"
            />


          }


        </Animated.View>

      </ScrollView>




      {loading && <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <ActivityIndicator color={colors.secondary} size="large" />
      </View>}
    </ScrollView>




  );
}

const styles = StyleSheet.create({});
