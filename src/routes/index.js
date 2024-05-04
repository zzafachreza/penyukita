import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Splash,
  Home,
  Login,
  Register,
  Account,
  AccountEdit,
  Konten,
  TanyaJawab,
  Notifikasi,
  Artikel,
  ArtikelDetail,
  Video,
  VideoDetail,
  Resep,
  ResepDetail,
  AsupanMpasi,
  AsupanAsi,
  StatusGizi,
  StatusGiziHasil,
  KursionerVark,
  GayaBelajarVisual,
  GayaBelajarAudio,
  GayaBelajarReading,


  GayaBelajarKinaesthetic,
  Diagnosa2,
  Periksagigimu,
  Gigilubang,
  TumpatanGigi,
  PaketUmrah,
  Pendaftaran,
  UpdateSeat,
  Pembayaran,
  Saldoku,
  DataJamaah,
  DataJamaah2,
  Royalti,
  MakananBalita,
  ResepMakananBalita,
  MakananIbuhamil,
  ResepMakananIbuHamil,
  konsultasionline,
  ProfileAplikasi,
  Menu1,
  Menu8,
  Menu7,
  Menu6,
  Menu5,
  Menu4,
  Menu3,
  Menu2,
  Menu1a,
  Menu1b,
  Menu1c,
  Menu8a,
  Menu5a,
  Menu1c1,
  Menu1c2,
  Menu2a,
  Menu3a,
  Menu4a,


} from '../pages';
import { colors } from '../utils';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';
import Diagnosa from '../pages/Diagnosa';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator initialRouteName='Produk' tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default function Router() {
  return (
    <Stack.Navigator initialRouteName=''>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />



      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          // headerTitle: 'Detail',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />



      <Stack.Screen
        name="Menu1"
        component={Menu1}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Menu1a"
        component={Menu1a}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Menu1b"
        component={Menu1b}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Menu1c"
        component={Menu1c}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Menu1c1"
        component={Menu1c1}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Menu1c2"
        component={Menu1c2}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Menu2"
        component={Menu2}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Menu2a"
        component={Menu2a}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Menu3"
        component={Menu3}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Menu3a"
        component={Menu3a}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Menu4"
        component={Menu4}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Menu4a"
        component={Menu4a}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Menu5"
        component={Menu5}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Menu5a"
        component={Menu5a}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Menu6"
        component={Menu6}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Menu7"
        component={Menu7}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Menu8"
        component={Menu8}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Menu8a"
        component={Menu8a}
        options={{
          headerShown: false,
        }}
      />

      {/* SAMPAI SINI */}
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
          headerTitle: 'Daftar Pengguna',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="MakananBalita"
        component={MakananBalita}
        options={{
          headerShown: false,

        }}
      />



      <Stack.Screen
        name="ResepMakananBalita"
        component={ResepMakananBalita}
        options={{
          headerShown: false,

        }}
      />


      <Stack.Screen
        name="Makananibuhamil"
        component={MakananIbuhamil}
        options={{
          headerShown: false,

        }}
      />

      <Stack.Screen
        name="ResepMakananIbuHamil"
        component={ResepMakananIbuHamil}
        options={{
          headerShown: false,

        }}
      />

      <Stack.Screen
        name="KonsultasiOnline"
        component={konsultasionline}
        options={{
          headerShown: false,

        }}
      />



      <Stack.Screen
        name="ProfileAplikasi"
        component={ProfileAplikasi}
        options={{
          headerShown: false,

        }}
      />

      <Stack.Screen
        name="DataJamaahDetail"
        component={DataJamaah2}
        options={{
          headerShown: false,

        }}
      />



      <Stack.Screen
        name="BelajarVisualAudio"
        component={GayaBelajarAudio}
        options={{
          headerShown: false,

        }}
      />



      <Stack.Screen
        name="BelajarReading"
        component={GayaBelajarReading}
        options={{
          headerShown: false,

        }}
      />





      <Stack.Screen
        name="BelajarKinaesthetic"
        component={GayaBelajarKinaesthetic}
        options={{
          headerShown: false,

        }}
      />




      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,

        }}
      />
      <Stack.Screen
        name="AccountEdit"
        component={AccountEdit}
        options={{
          headerShown: false,
          headerTitle: 'Edit Profile',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: '#000',
        }}
      />


      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Royalti"
        component={Royalti}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ArtikelDetail"
        component={ArtikelDetail}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Video"
        component={Video}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="VideoDetail"
        component={VideoDetail}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Resep"
        component={Resep}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="ResepDetail"
        component={ResepDetail}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="AsupanMpasi"
        component={AsupanMpasi}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="AsupanAsi"
        component={AsupanAsi}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="StatusGizi"
        component={StatusGizi}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="StatusGiziHasil"
        component={StatusGiziHasil}
        options={{
          headerShown: false,
        }}
      />















    </Stack.Navigator>
  );
}
