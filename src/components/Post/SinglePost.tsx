import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Like1Icon from 'react-native-vector-icons/AntDesign';
import ShareICon from 'react-native-vector-icons/FontAwesome';
const SinglePost = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileView}>
        <View style={styles.profileImageView}>
          <Image
            source={require('../../assets/img/profile.webp')}
            style={styles.profileImage}
          />
        </View>
        <View>
          <Text style={styles.profileName}>Mahinda Rajapaksha</Text>
          <Text style={styles.postTime}>4 minutes ago</Text>
        </View>
      </View>
      <View>
        <Text style={styles.postText}>
          Eight bytes walk into a bar.The bartender asks, Can I get you
          anything? Yeah, reply the bytes.Make us a double.
        </Text>
      </View>
      <View style={styles.hr} />
      <View style={styles.actionView}>
        <View style={styles.actionLikeView}>
          <Like1Icon name="like1" size={20} color="#ff0000" />
          <Text>31 likes</Text>
        </View>
        <View style={styles.actionShareView}>
          <ShareICon name="share" size={20} color="#ff0000" />
          <Text>Share</Text>
        </View>
      </View>
    </View>
  );
};

export default SinglePost;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4e596f',
    marginHorizontal: 9,
    borderRadius: 5,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  profileView: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 5,
    height: 45,
  },

  profileImageView: {
    height: 60,
  },

  profileImage: {
    height: 25,
    width: 25,
    marginTop: 5,
  },
  profileName: {
    fontFamily: 'SourceSansPro-Regular',
    color: '#e9e9e9',
    paddingHorizontal: 10,
  },
  postTime: {
    paddingHorizontal: 10,
    color: '#ffffff',
    fontSize: 10,
    fontFamily: 'Lato-Regular',
  },
  postText: {
    color: '#fff',
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    paddingHorizontal: 2,
    paddingBottom: 10,
  },
  hr: {
    borderBottomColor: '#e9e9e9',
    borderBottomWidth: 0.5,
    marginBottom: 5,
  },
  actionView: {
    display: 'flex',
    flexDirection: 'row',
    height: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  actionLikeView: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
  actionShareView: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
});
