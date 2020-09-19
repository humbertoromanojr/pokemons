import React from 'react';
import { TextInputProps } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

import Styles from './styles';

function InputCustom: React.FC = () => {
    return (
        <Styles.Container >
            {icon && (
                <Icon name={icon} size={20} color="rgba(255, 255, 255, 0.6)" />
            )}
            <Styles.TInput  />
        </Styles.Container>
    );
}

export default forwardRef(InputCustom);
