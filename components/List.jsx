import React from 'react';
import { StyleSheet, View, Text, FlatList } from "react-native";
import users from "../data/users.json"
import Row from './Row';

const List = () => {
  return (
    <View>
      <FlatList
        ListHeaderComponent={
          <Text style={styles.heading}>Registered Users</Text>
        }
        data={users}
        keyExtractor={(user) => user.uid}
        /* keyExtractor is not necessary in this particular case, let's see why:       
        
How to Use the keyExtractor Prop
By default, the keyExtractor prop checks for properties like key and id (in that order). If either of the two is present in the original data structure, it will be considered a unique key by the FlatList component.
In this case (as in the previous example), you do not have to explicitly use the keyExtractor prop.
If neither of them are provided, the FlatList component will throw a warning "VirtualizedList: missing keys for items ...":
For custom key names (uuid, uniqueKey, userId or something else as primary key), you'll use the keyExtractor prop. It extracts the unique key name and its value and tells the FlatList component to track the items based on that value.
        */
        renderItem={({ item }) =>
          <Row item={item} />
        }
        ListFooterComponent={
          <Text style={styles.footer}>Coded by profe Marce</Text>
        }
        ItemSeparatorComponent={() => <View style={styles.separator} />}

      />
    </View>
  )
}
const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: '500',
    color: 'tomato',
    marginTop: 20,
    marginBottom: 20
  },
  footer: {
    marginTop: 25,
    marginBottom: 55,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginTop: 5,
    marginBottom: 20
  }
})

export default List