import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Page = () => {
	const { chatid } = useLocalSearchParams();
	console.log('chatid:', chatid)
  return (
    <View>
      <Text>Page</Text>
    </View>
  );
};

export default Page