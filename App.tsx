import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {

  constructor(props)
  {
    super(props)
    this.state = {
      response: "Waiting...",
      error: ""
    }
  }
  async getRequest()
  {
      return fetch("https://srucab-dev.okd.ucab.edu.ve/api/v1/Externs/username:leo93", {
          method: "GET",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin':'*',
              'Access-Control-Allow-Methods':'DELETE, POST, GET, OPTIONS',
              'Access-Control-Allow-Headers':'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
              },
          })
          .then((response) => response)
          .catch((error) => {
              console.log(error);
              this.setState({error: JSON.stringify(error)})
          });
  }

  async componentDidMount()
  {
    let response = await this.getRequest();
    if(response !== undefined)
    {
      if(response.status === 200)
      {
        response = JSON.stringify(response);
      }
      else
      {
        response = response.statusText
      }
    }
    else
    {
      response = "Sin Respuesta"
    }
    this.setState({response})
  }

  render ()
  {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>{this.state.response}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
