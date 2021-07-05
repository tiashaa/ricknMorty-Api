import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button'
import { Card } from 'react-native-elements/dist/card/Card'

function Welcome(props) {
    return (
        <Card>
        <Text>
        Welcome
        </Text>
        <Button
        title="Click here to get surprised"
                    onPress={function (){props.navigation.navigate("Base");}}
                    color="green"
        />
        
        </Card>
    )
}

export default Welcome
