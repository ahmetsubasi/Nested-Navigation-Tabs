import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'

const MemberDetail = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hi This Is MemberDetail Page</Text>
      <Text style={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
      Eius, dignissimos eligendi blanditiis veritatis voluptate reprehenderit vel. 
      Earum placeat blanditiis iusto eos, in dolorem fugiat deleniti quia non ad ipsam maiores! 
      Aliquid unde eius quae praesentium pariatur at vero, aliquam dolor molestiae quod doloribus accusamus. 
      Provident veniam mollitia ab velit quas.</Text>
      <Button title="Go To UpdatePage" onPress={() => navigation.navigate('MemberUpdateScreen')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  header:{
    padding:15,
    fontSize:26,
    fontWeight:'bold',
    textAlign:'center'
  },
  text:{
    padding:5,
    margin:5,
    textAlign:'center',
    fontSize:15,
    fontFamily:'Cochin'
  }
})


export default MemberDetail