import 'react-native-gesture-handler';
import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity, Image, TextInput
} from "react-native";
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource: [],
      search: '',
    };
    
  }
  componentDidMount() {
    fetch("https://run.mocky.io/v3/e6daf7f7-9ec2-42cf-b221-ef64f1c0c6a5")
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({
          loading: false,
          dataSource: responseJson
        })
      })
      .catch(error => console.log(error)) 
  }
  
  FlatListItemSeparator = () => {
    return (
      <View style={{
        height: 1,
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.07)",
      }}
      />
    );
  }
  
  renderItem = (data) =>
    <TouchableOpacity style={styles.list} onPress={() => {this.props.navigation.navigate('Inner', {data: data })}}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          style={{ width: 70, height: 70, borderRadius: 400 / 2 }}
        //   source={{ uri: 'http://placehold.it/32x32' }}
        source={require('../images/face.png')}
        />
        <View style={{ flexDirection: 'column', paddingLeft: 10 }}>
            <View style={{flexDirection:'row'}}>
          <Text style={styles.lightText}>{data.item.firstname}</Text>
          <Text style={{flex:1,alignSelf:'flex-end'}}>v</Text>
          </View>
          <Text style={styles.light}>{data.item.email}</Text>
          <Text style={styles.light}>{data.item.company}</Text>
        </View>
      </View>
    </TouchableOpacity>
    onChangeText = (search) => {
      this.setState({ search });
    };
  render() {
    const { navigate } = this.props.navigation;
    const { search } = this.state;
    return (
      <SafeAreaView style={styles.container}>
         <TextInput
      style={{  borderColor: '#9c9a9421', borderWidth: 1, padding:15, backgroundColor:'#9c9a9421' }}
      placeholder="Search"
      />
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={item => this.renderItem(item)}
        keyExtractor= {item=>item.email}
        
        />
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding:1
  },

  list: {
    padding: 4,
    margin: 5,
    backgroundColor: "#fffffd"
  },
  lightText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#676767'
  },
  light: {
    fontSize: 12,
    color: '#8d8f8e'
  }
});