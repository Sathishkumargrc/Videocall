import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import ZegoUIKIT from '@zegocloud/zego-uikit-prebuilt-video-conference-rn';

const ConferenceScreen = () => {
  const route = useRoute();
  const {userId, userName, confId} = route.params;
  const navigation = useNavigation();

  console.log('>?>?>? id pass', userId, userName, confId);

  return (
    <View style = {{flex: 1}}>
      <ZegoUIKIT
        appID={2004554502}
        appSign={`f52e33548b7364ab8ad66cb8a1a43d4fd015ee7ad60d389eaaeaa3b0d50b4f89`}
        userID={userId}
        userName={userName}
        conferenceID={confId}
        config={{
          onLeave: () => {
            navigation.navigate('Home');
          },
        }}
      />
    </View>
  );
};

export default ConferenceScreen;

const styles = StyleSheet.create({});
