import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

/**
 * Steps
 * featured image
 * block
 * floor
 * apartment
 *
 * Components
 * - Image Info
 * - Update Info
 * - Activities List (with Load more items)
 */
const users = [
  {
    name: 'Jang Trinh vừa giới thiệu 1 khách hàng cho dự án Central Premium.',
    // avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    avatar: 'https://avatars3.githubusercontent.com/u/23715737?s=460&v=4'
  },
  {
    name : 'Đan Trường vừa chốt 1 hợp đồng với khách hàng. Hãy chúc mừng anh ấy.',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  }
];

class MostPopularProject extends React.Component {

  render() {
    return (
      <View style={{
        // padding : 16, // TODO: Update later.
        // backgroundColor : 'red'
      }}>
        <Text style={{
          fontSize : 14,
          letterSpacing : -0.34,
          color : '#5f5f5f',
          fontWeight : 'bold',
          marginBottom : 5,
          paddingHorizontal: 16
        }}>Dự án hoạt động sôi nổi</Text>
        <View
          style={{padding: 0}}
        >
          {
            users.map((u, i) => {
              console.log(u)
              return (
                <ListItem
                  style={{
                    // borderTopStyle : 'dotted',
                    // borderStyle : 'dotted'
                    // paddingLeft : 0,
                    // paddingRight : 0,
                  }}
                  containerStyle={{
                    // backgroundColor: 'red',
                    // paddingLeft : 0,
                    // paddingRight : 0,
                    // borderTopStyle : 'dotted',
                    // borderTopWidth
                    // borderStyle : 'dashed',
                    // borderWidth: 10,
                    // borderRadius: 0.5,
                    // borderStyle: 'dotted',
                    // borderColor: 'red',
                    // borderTopColor : 'red'
                  }}
                  contentContainerStyle={{
                    // backgroundColor: 'red',
                    // borderTopStyle : 'dotted',
                  }}
                  key={i}
                  roundAvatar
                  title={u.name}
                  titleStyle={{
                    fontSize : 14,
                    // letterSpacing : -0.34,
                    color : '#333333',
                    fontWeight : 'normal',
                    marginBottom : 5
                  }}
                  subtitle={'52 giây trước'}
                  subtitleStyle={{
                    fontSize : 12,
                    letterSpacing : -0.29,
                    color : '#cacaca',
                    fontWeight : 'normal',
                  }}
                  leftAvatar={{uri:u.avatar}}
                  // imageStyle={{
                  //   // backgroundColor: 'red'
                  // }}
                  topDivider={true}
                  onPress={() => {
                    alert(u.name);
                  }}
                />
              );
            })
          }
        </View>
      </View>
    );
  }
}

export default MostPopularProject;
