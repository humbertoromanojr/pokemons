import React from 'react';
import {RectButton, RectButtonProperties} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

import Styles from './styles';

interface ButtonProps extends RectButtonProperties {
    children: string;
}

const ButtonCustom: React.FC<ButtonProps> = ({children, ...rest}) => {
    return (
        <Styles.Container {...rest}>
            <Styles.ButtonText>{children}</Styles.ButtonText>
        </Styles.Container>
    );
};

export default React.memo(ButtonCustom);
