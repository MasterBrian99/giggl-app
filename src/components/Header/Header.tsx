import React from 'react';
import {StyleSheet, Text, View, LayoutChangeEvent} from 'react-native';
import InfoIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CategoryIcon from 'react-native-vector-icons/MaterialIcons';
interface Prop {
  children: string | undefined;
  onLayout: (e: LayoutChangeEvent) => void;
  allowFontScaling?: boolean | undefined;
  tintColor?: string | undefined;
  style?: false | undefined;
}

const Header = prop => {
  console.log(prop);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{prop.children}</Text>
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
