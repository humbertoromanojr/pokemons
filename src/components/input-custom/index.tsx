import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';

import Styles from './styles';

interface PropsType {
    name: string;
    icon: string;
    placeholder: string;
    eye?: boolean;
    havePassword?: boolean;
}

const InputCustom: React.FC<PropsType> = (props: PropsType) => {
    const [iconPassword, setIconPassword] = useState('eye-off');
    const [hidePassword, setHidePassword] = useState(true);

    const _changeIcon = () => {
        iconPassword !== 'eye-off'
            ? (setIconPassword('eye-off'), setHidePassword(false))
            : (setIconPassword('eye'), setHidePassword(true));
    };

    const renderInputsDefault = () => {
        return (
            <Styles.Container>
                <Icon name={props.icon} size={30} color="#666" />
                <Styles.TextInput
                    placeholderTextColor="#666"
                    placeholder={props.placeholder}
                    keyboardAppearance="dark"
                />
            </Styles.Container>
        );
    };

    const renderInputPassword = () => {
        return (
            <Styles.Container>
                <>
                    <Icon name={props.icon} size={30} color="#666" />
                    <Styles.TextInput
                        placeholderTextColor="#666"
                        placeholder={props.placeholder}
                        keyboardAppearance="dark"
                        secureTextEntry={hidePassword}
                    />
                </>
                {props.eye && (
                    <Icon
                        name={iconPassword}
                        onPress={() => _changeIcon()}
                        size={30}
                        color="#666"
                    />
                )}
            </Styles.Container>
        );
    };

    return (
        <>
            {props.havePassword ? renderInputPassword() : renderInputsDefault()}
        </>
    );
};

export default InputCustom;
