import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native'
import { connect } from 'react-redux'
import DocumentPicker from 'react-native-document-picker'



@connect()
class Home extends Component {
  static navigationOptions = {
    tabBarLabel: '测试中心',
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
        source={require('../images/house.png')}
      />
    )
  }

  constructor(props) {
    super(props)
    this.state = {
      fileUri: '',
      fileType: '',
      fileName: '',
      fileSize: '',
    }
  }

  handleChange = async () => {
    // Opening Document Picker
    try {
      const res = await DocumentPicker.pick(
        {
          type: DocumentPicker.types.allFiles
        })
        console.log(
          res.uri,
          res.type, // mime type
          res.name,
          res.size
        )
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw error
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{ alignItems: 'center' }}
          onPress={this.handleChange}>
          <Image
            source={{
              uri:
                'https://aboutreact.com/wp-content/uploads/2018/09/clips.png',
            }}
            style={styles.ImageIconStyle}
          />
          <Text style={{ marginTop: 10 }}>Add Attachment</Text>
        </TouchableOpacity>
        <Text style={styles.text}>
          {this.state.fileUri ? `URI\n${  this.state.fileUri}` : ''}
        </Text>
        <Text style={styles.text}>
          {this.state.fileType ? `Type\n${  this.state.fileType}` : ''}
        </Text>
        <Text style={styles.text}>
          {this.state.fileName ? `File Name\n${  this.state.fileName}` : ''}
        </Text>
        <Text style={styles.text}>
          {this.state.fileSize ? `File Size\n${  this.state.fileSize}` : ''}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  text: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 16,
    color: 'black',
  },
  ImageIconStyle: {
    height: 80,
    width: 80,
    resizeMode: 'stretch',
  },
})

export default Home
