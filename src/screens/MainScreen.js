import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const MainScreen = () => {
  return (
    <View style={{ flex: 1, paddingLeft: 20, paddingRight: 20, borderRadius: 30, backgroundColor: '#EDECF2' }}>
      <View style={{ paddingTop: 60, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 25, color: '#091436' }}>Hi, Monito</Text>
        <Text style={{ paddingTop: 10, fontSize: 15 }}>Lorem Ipsum is simply dummy text</Text>
        <Text style={{ paddingTop: 10, fontSize: 15 }}>of the printing and typesetting</Text>
      </View>

      <View
        style={{
          marginTop: 40,
          backgroundColor: 'white',
          borderRadius: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          shadowColor: '#C6C6C8',
          shadowRadius: 5,
          shadowOffset: { height: 1, width: 0 },
          shadowOpacity: 0.3,
          elevation: 3,
        }}
      >
        <TextInput style={{ height: 52, paddingLeft: 20 }} placeholder="Search here..." />

        <Ionicons
          style={{
            backgroundColor: '#4770ED',
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 5,
            paddingBottom: 5,
            marginRight: 10,
            borderRadius: 5,
          }}
          name="ios-search"
          size={24}
          color="white"
        />
      </View>

      <View style={{ paddingTop: 40, flexDirection: 'row' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#091437' }}>Symptoms</Text>
        <Text style={{ paddingLeft: 180, paddingTop: 5, color: '#C6C6C8' }}>View All</Text>
      </View>

      {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} > */}

      <View style={{ flexDirection: 'row' }}>
        <View
          style={{
            width: '83%',
            height: '95%',
            backgroundColor: 'white',
            borderRadius: 10,
            marginTop: 20,
            flexDirection: 'row',
            marginRight: 10,
            shadowColor: '#C6C6C8',
            shadowRadius: 5,
            shadowOffset: { height: 1, width: 0 },
            shadowOpacity: 0.3,
            elevation: 3,
          }}
        >
          <Image
            source={require('../picture/headache.jpeg')}
            style={{ width: 60, height: 60, marginLeft: 10, marginTop: 20, borderRadius: 50 }}
          />
          <View>
            <Text style={{ paddingLeft: 5, paddingTop: 20, color: '#1F77FE', fontWeight: '500' }}>High Fever</Text>
            <Text style={{ paddingLeft: 5, paddingTop: 5, fontSize: 12, fontWeight: '500' }}>
              Lorem Ipsum is simply
            </Text>
            <Text style={{ paddingLeft: 5, paddingTop: 5, fontSize: 12, fontWeight: '500' }}>
              dummy text of the printing
            </Text>
          </View>
        </View>

        <View
          style={{
            width: '20%',
            height: '95%',
            backgroundColor: 'white',
            borderBottomLeftRadius: 10,
            borderTopLeftRadius: 10,
            marginTop: 20,
            marginRight: 10,
          }}
        >
          <Image
            source={require('../picture/headache.jpeg')}
            style={{ width: 50, height: 60, marginLeft: 10, marginTop: 20, borderRadius: 50 }}
          />
        </View>
      </View>

      {/* </ScrollView> */}

      <View
        style={{
          width: '100%',
          height: '22%',
          backgroundColor: '#4770ED',
          borderRadius: 10,
          marginTop: 50,
          flexDirection: 'row',
        }}
      >
        <View>
          <Text
            style={{ fontSize: 9, paddingTop: 20, paddingLeft: 10, color: 'white', fontSize: 20, fontWeight: '400' }}
          >
            Stay at home to
          </Text>
          <Text
            style={{ fontSize: 9, paddingTop: 5, paddingLeft: 10, color: 'white', fontSize: 20, fontWeight: '400' }}
          >
            Stop corona virus
          </Text>
          <TouchableOpacity
            style={{
              width: 100,
              height: 32,
              backgroundColor: 'white',
              borderRadius: 5,
              marginLeft: 15,
              marginTop: 28,
              backgroundColor: '#3961CF',
            }}
          >
            <Text
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 6, color: 'white' }}
            >
              Know More
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginLeft: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={require('../picture/coveringMouth.jpeg')}
            style={{ width: 125, height: 180, resizeMode: 'contain' }}
          />
        </View>
      </View>

      <View style={{ paddingTop: 40, flexDirection: 'row' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#091437' }}>Requirements</Text>
        <Text style={{ paddingLeft: 140, paddingTop: 5, color: '#C6C6C8', fontWeight: '500' }}>View All</Text>
      </View>

      <View
        style={{
          paddingTop: 20,
          flexDirection: 'row',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image source={require('../picture/nosemask.jpeg')} style={{ width: 60, height: 60, borderRadius: 10 }} />
        <Image
          source={require('../picture/med.jpeg')}
          style={{ width: 60, height: 60, borderRadius: 10, marginLeft: 20 }}
        />
        <Image
          source={require('../picture/Tissue.jpeg')}
          style={{ width: 60, height: 60, borderRadius: 10, marginLeft: 20 }}
        />
        <Image
          source={require('../picture/shaking.jpeg')}
          style={{ width: 60, height: 60, borderRadius: 10, marginLeft: 20 }}
        />
      </View>
    </View>
  );
};

export default MainScreen;
