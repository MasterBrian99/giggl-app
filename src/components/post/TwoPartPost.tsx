import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Like1Icon from 'react-native-vector-icons/AntDesign';
import ShareICon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Prop {
  category: string;
  setup: string;
  delivery: string;
  name: string;
  color: string;
  likes: number;
}

const TwoPartPost = ({category, setup, delivery, name, color, likes}: Prop) => {
  const [likeColor, setLikeColor] = useState(color);

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
          <Text style={styles.profileName}>{name}</Text>
          <Text style={styles.postTime}>{category}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.postText}>{setup}</Text>
        <Text style={styles.postDeliveryText}>{delivery}</Text>
      </View>
      <View style={styles.hr} />
      <View style={styles.actionView}>
        <TouchableOpacity
          onPress={() => {
            likeColor === '#aaaaaa'
              ? setLikeColor('#f55263')
              : setLikeColor('#aaaaaa');
          }}>
          <View style={styles.actionLikeView}>
            <Like1Icon
              name="like1"
              size={20}
              color={likeColor}
              style={styles.actionIcon}
            />
            <Text style={styles.actionLikeText}>{likes} likes</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.actionShareView}>
            <ShareICon
              name="share"
              size={20}
              color="#f55263"
              style={styles.actionIcon}
            />
            <Text style={styles.actionShareText}>Share</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TwoPartPost;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4e596f',
    marginHorizontal: 9,
    borderRadius: 5,
    marginVertical: 5,
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
    fontSize: 17,
    paddingHorizontal: 2,
    paddingBottom: 5,
  },
  postDeliveryText: {
    color: '#e9e9e9',
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 14,
    paddingHorizontal: 2,
    paddingBottom: 6,
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
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingBottom: 10,
    marginBottom: 2,
  },
  actionLikeView: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
  actionLikeText: {
    color: '#fff',
    marginTop: 3,
    paddingHorizontal: 2,
    fontSize: 14,
    fontFamily: 'SourceSansPro-Regular',
  },
  actionShareText: {
    color: '#fff',
    paddingHorizontal: 2,
    fontSize: 14,
    fontFamily: 'SourceSansPro-Regular',
  },
  actionShareView: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingTop: 3,
  },
  actionIcon: {},
});
