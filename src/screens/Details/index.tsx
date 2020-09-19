import React from 'react';
import {Text, Button} from 'react-native';

import Styles from './styles';

const Details: React.FC = ({navigation}) => {
    return (
        <Styles.Container>
            <Text>Details</Text>
            <Button
                title="Go to Details... again"
                onPress={() => navigation.navigate('Home')}
            />
        </Styles.Container>
    );
};

export default Details;
