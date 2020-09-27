import React, {useState} from 'react';

import Styles from './styles';

interface PropsType {
    name: string;
    icon: string;
    placeholder: string;
    eye?: boolean;
    havePassword?: boolean;
}

const InputCustom: React.FC<PropsType> = (props: PropsType) => {
    const [iconPassword, setIconPassword] = useState('eye');
    const [hidePassword, setHidePassword] = useState(true);

    const _changeIcon = () => {
        iconPassword === 'eye'
            ? (setIconPassword('eye-off'), setHidePassword(true))
            : (setIconPassword('eye'), setHidePassword(false));
    };

    const renderInputsDefault = () => {
        return (
            <Styles.Container>
                <Styles.Icon name={props.icon} size={30} />
                <Styles.TextCustomInput
                    placeholderTextColor="#ffffff"
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
                    <Styles.Icon name={props.icon} size={30} />
                    <Styles.TextCustomInput
                        placeholderTextColor="#ffffff"
                        placeholder={props.placeholder}
                        keyboardAppearance="dark"
                        secureTextEntry={hidePassword}
                    />
                </>
                {props.eye && (
                    <Styles.Icon
                        name={iconPassword}
                        onPress={() => _changeIcon()}
                        size={30}
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
