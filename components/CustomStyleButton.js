import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function CustomStyleButton() {

    const [styleTitle, setTitle] = useState("default");
    const [styleButton, setStyleButton] = useState([
        {
            color: 'white',
            borderColor: '#f9c2ff',
            backgroundColor: '#f9c2ff',
            disabled: false,
        }

    ]);
    useEffect(() => {

    });

    function ChangeButton(item) {
        setTitle(item.title);
        setStyleButton(item.style);
    }

    const dataButton = [
        {
            id: '0',
            title: 'Default',
            style: {
                color: 'black',
                borderColor: '#f9c2ff',
                backgroundColor: '#f9c2ff',
                disabled: false,
                icon: '',
                size: 100
            }
        },
        {
            id: '1',
            title: 'Outline',
            style: {
                color: 'blue',
                borderColor: 'blue',
                backgroundColor: '',
                disabled: false,
                icon: '',
                size: 100

            }
        },
        {
            id: '2',
            title: 'Text',
            style: {
                color: 'blue',
                borderColor: 'blue',
                backgroundColor: '',
                disabled: false,
                icon: '',
                size: 100
            }
        },
        {
            id: '3',
            title: 'Disable shadow',
            style: {
                color: 'white',
                borderColor: 'blue',
                backgroundColor: 'blue',
                disabled: false,
                icon: '',
                size: 100
            }
        },
        {
            id: '4',
            title: 'Disable',
            style: {
                color: '#ffffff',
                borderColor: 'blue',
                backgroundColor: 'gray',
                disabled: true,
                icon: '',
                size: 100
            }
        },
        {
            id: '5',
            title: 'Icon store in start',
            style: {
                color: 'white',
                borderColor: 'blue',
                backgroundColor: 'blue',
                disabled: false,
                icon: 'rocket',
                size: 300
            }
        },
        {
            id: '6',
            title: 'Icon store in end',
            style: {
                color: 'white',
                borderColor: 'blue',
                backgroundColor: 'blue',
                disabled: true,
                icon: 'rocket',
                size: 300
            }
        },
        {
            id: '7',
            title: 'Size sm',
            style: {
                color: 'white',
                borderColor: 'blue',
                backgroundColor: 'blue',
                disabled: false,
                icon: '',
                size: 100
            }
        },
        {
            id: '8',
            title: 'Size md',
            style: {
                color: 'white',
                borderColor: 'blue',
                backgroundColor: 'blue',
                disabled: false,
                icon: '',
                size: 200
            }
        },
        {
            id: '9',
            title: 'Size lg',
            style: {
                color: 'white',
                borderColor: 'blue',
                backgroundColor: 'blue',
                disabled: false,
                icon: '',
                size: 500
            }
        },
        {
            id: '10',
            title: 'Color default',
        },
        {
            id: '11',
            title: 'Color primary',
        },
        {
            id: '12',
            title: 'Color secondary',
        },
        {
            id: '13',
            title: 'Color danger',
            style: {
                color: 'white',
                borderColor: 'red',
                backgroundColor: 'red',
                disabled: false,
                icon: '',
                size: 200
            }
        },

    ];
    const CustomButton = ({ styleCustom }) => (
        <View style={[{ width: "30%", margin: 10, marginBottom: 30 }]}>
            <TouchableOpacity style={{
                borderWidth: 1,
                borderColor: styleButton.borderColor,
                alignItems: 'center',
                justifyContent: 'center',
                width: styleButton.size,
                height: 30,
                backgroundColor: styleButton.backgroundColor,
                borderRadius: 50,

            }} disabled= {styleButton.disabled}>
                <Text style={{
                    fontSize: 12,
                    textAlign: 'center',
                    color: styleButton.color
                }}>{styleTitle}</Text>
                <Icon name={styleButton.icon} />
                

            </TouchableOpacity>
        </View>
    );
    return (
        <SafeAreaView style={styles.container}>
            <CustomButton />
            <FlatList
                data={dataButton}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => ChangeButton(item)}>
                        <View>
                            <Text style={styles.title}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                )}

                numColumns={3}
                keyExtractor={(item, index) => index}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        flexDirection: 'column',
    },
    item: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f9c2ff',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 12,
        textAlign: 'center',
        color: 'green'
    },
});

export default CustomStyleButton;