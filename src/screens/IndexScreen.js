import React, { useContext } from 'react';
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { FontAwesome5 } from '@expo/vector-icons';
import ShowScreen from './ShowScreen';

const IndexScreen = ({ navigation }) => {
    const { state, deleteBlogPost } = useContext(Context);
    
    return (
    <View>
        
 
        <FlatList 
        data={state}
        keyExtractor={(blogPosts) => blogPosts.title}
        renderItem={({ item }) => {
            return (
                <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
                    <View style={styles.row}>
                        <Text style={styles.title}>{item.title} - {item.id}</Text>
                        <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                            <FontAwesome5 style={styles.icon} name="trash" />
                        </TouchableOpacity>               
                    </View>
                </TouchableOpacity>
            )
        }}
        />
    </View>
    );
};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <FontAwesome5 name="plus" size={24} color="black" />
        </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    }, 
    icon: {
        fontSize :20
    }
});

export default IndexScreen;