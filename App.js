/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, ToastAndroid,ScrollView } from "react-native";
class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users', {method:'GET'}).then((response) => response.json())
      .then((responseData) => {
          console.log("responseData : " +responseData);
          this.setState({
            data:responseData
          })
      }).catch((error) => {
          console.log("error : " +error);
      });
  }

  render(){
  return (
    <View style={styles.container}>
      <ScrollView> 
    { this.state.data.map((item, key)=>(
      <>
         <Text> id: {item.id }</Text>
         <Text>name:{item.name}</Text>
         <Text>username :{item.username}</Text>
         <Text>email :{item.email}</Text>
         </>
         )
         )}
         </ScrollView>
    </View>

    );
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

export default App;
