import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

const HomeScreen = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#4770ED', borderRadius: 30, padding: 20 }}>
      <View style={{ marginTop: 80 }}>
        <Image source={require('../picture/cold3.jpeg')} style={{ width: '100%', height: 350, resizeMode: 'cover' }} />
      </View>
      <View style={{ paddingTop: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold' }}>COVID-19</Text>
      </View>

      <View style={{ paddingTop: 28 }}>
        <Text
          style={{
            color: '#A8ACF9',
            fontSize: 15,
            fontWeight: '500',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft:11
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and
        </Text>
      </View>

      <View style={{ paddingTop: 8, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#A8ACF9', fontSize: 15, fontWeight: '500' }}>
          typesetting industry. Lorem Ipsum has been the
        </Text>
      </View>

      <View style={{ paddingTop: 8, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#A8ACF9', fontSize: 15, fontWeight: '500' }}>
          industry's standard dummy text ever since the 1500s.
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          props.navigation.push('Main');
        }}
      >
        <View
          style={{
            display:"flex",
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'white',
            flexDirection: 'row',
            width: '100%',
            height: 52,
            borderRadius: 5,
            marginTop: '20%',
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 16, display:"flex", alignItems:"center", justifyContent:"center", marginTop:-40}}>Get Started</Text>
          <Ionicons
            style={{ backgroundColor: '#4770ED', paddingLeft: 10, paddingRight: 10, borderRadius: 5, marginTop:-40 }}
            name="ios-arrow-round-forward"
            size={30}
            color="white"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
