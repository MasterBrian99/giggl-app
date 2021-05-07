import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import InfoIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import HeartoIcon from 'react-native-vector-icons/Entypo';
import ChevronBackIcon from 'react-native-vector-icons/Ionicons';
const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Feeds</Text>
      <View style={styles.iconView}>
        <HeartoIcon name="heart" size={20} color="#aaaaaa" />
        <InfoIcon
          name="information-outline"
          size={20}
          color="#aaaaaa"
          style={styles.infoIcon}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#242a38',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
  },
  headerText: {
    color: '#aaaaaa',
    fontSize: 20,
    fontFamily: 'Lato-Bold',
  },
  iconView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoIcon: {
    marginLeft: 10,
  },
});

// <View>
//     <ChevronBackIcon
//       name="chevron-back"
//       size={30}
//       color="#900"
//       onPress={() => navigation.goBack()}
//     />
//   </View>
