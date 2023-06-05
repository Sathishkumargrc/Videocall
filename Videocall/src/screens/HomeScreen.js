import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {TextInput} from 'react-native';
import {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [confId, setConfId] = useState('');

  const navigation = useNavigation();

  const navigate = () => {
    navigation.navigate('Conference', {
      userId,
      userName,
      confId,
    });
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <View style={{alignSelf: 'center', marginTop: 20}}>
        <View>
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
            Let's Connect Conference
          </Text>
        </View>
        <View style={{marginTop: 15}}>
          <Text style={{color: 'white', fontSize: 15}}>Conference Id</Text>
          <TextInput
            value={confId}
            onChangeText={text => setConfId(text)}
            style={{
              borderWidth: 0.4,
              borderColor: 'white',
              height: 35,
              borderRadius: 5,
              marginTop: 5,
              color: 'white',
            }}
          />
        </View>
        <View style={{marginTop: 15}}>
          <Text style={{color: 'white', fontSize: 15}}>Username</Text>
          <TextInput
            value={userName}
            onChangeText={text => setUserName(text)}
            style={{
              borderWidth: 0.4,
              borderColor: 'white',
              height: 35,
              borderRadius: 5,
              marginTop: 5,
              color: 'white',
            }}
          />
        </View>
        <View style={{marginTop: 15}}>
          <Text style={{color: 'white', fontSize: 15}}>userId</Text>
          <TextInput
            value={userId}
            onChangeText={text => setUserId(text)}
            style={{
              borderWidth: 0.4,
              borderColor: 'white',
              height: 35,
              borderRadius: 5,
              marginTop: 5,
              color: 'white',
            }}
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            height: 35,
            marginTop: 30,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}
          onPress={navigate}
          >
          <Text style={{color: 'white'}}>Jion Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
