import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Linking, ScrollView } from 'react-native'

const MyApp = () => {

  const [Items, setItemStack] = useState(
    [
      { itemName: "Item 1", key: 1 },
      { itemName: "Item 2", key: 2 },
      { itemName: "Item 3", key: 3 },
      { itemName: "Item 4", key: 4 },
      { itemName: "Item 5", key: 5 },
      { itemName: "Item 6", key: 6 },
      { itemName: "Item 7", key: 7 },
      { itemName: "Item 8", key: 8 },
      { itemName: "Item 9", key: 9 },
      { itemName: "Item 10", key: 10 },
      { itemName: "Item 11", key: 11 },
      { itemName: "Item 12", key: 12 },
    ]
  )
  const [number, setNumber] = useState(0);
  const [URL, setWeb] = useState({ name: 'Portfolio', button: 'https://portfolio.ankitjailwal.engineer/', stateBoolen: true })
  const stateHandler = () => {
    setNumber(number + 5)
    if (URL.stateBoolen)
      setWeb({ name: 'LinkedIn', button: 'https://www.linkedin.com/in/ankit-jailwal-776712173/', stateBoolen: false })
    else
      setWeb({ name: 'Portfolio', button: 'https://portfolio.ankitjailwal.engineer/', stateBoolen: true })
  }
  return (
    <View style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
      {
        Items.map((item) => {
          return (
            <View style={styles.box1}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: "center", key:item.key}}>
              <Text style={{
                fontSize: 16, color: 'black', fontWeight: "bold",
              }}>{item.itemName}</Text></View>
          </View>
          )
        }
        )
      }
      
      <View style={{ height: 30 }}></View>
      <TouchableOpacity onPress={() => { Linking.openURL(URL.button) }} >
        <View style={styles.box2}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
            <Text style={{
              fontSize: 16, color: 'black', fontWeight: "bold"
            }}>{URL.name}</Text></View>
        </View>
      </TouchableOpacity>
      <View style={{ height: 30 }}></View>
      <TouchableOpacity onPress={stateHandler}>
        <View style={styles.box3}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
            <Text style={{
              fontSize: 12, color: 'black', fontWeight: "bold"
            }}>Click Me!</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={{ height: 30 }}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  box1: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
    borderRadius: 10,
    borderColor: 'black',
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 10,
    marginBottom:5,
    marginTop:5,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderColor: 'black',
    borderWidth: 5,
    shadowColor: 'orange',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 10
  },
  box2: {
    height: 100,
    width: 100,
    backgroundColor: 'orange',
    borderRadius: 10,
    shadowColor: 'orange',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 10
  },
  box3: {
    height: 100,
    width: 100,
    backgroundColor: 'cyan',
    borderRadius: 50,
    shadowColor: 'cyan',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 10
  }
})
export default MyApp;