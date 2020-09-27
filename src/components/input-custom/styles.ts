import styled from 'styled-components/native';
import IconFeather from 'react-native-vector-icons/Feather';

export default {
    Container: styled.View`
        padding: 0 16px;
        width: 100%;
        height: 60px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 30px;

        shadow-color: rgba(0, 0, 0, 0.2);
        shadow-offset: {
            width: 0,
            height: 2,
        };
        shadow-opacity: 0.25;
        shadow-radius: 3.84px;

        elevation: 5;

        flex-direction: row;
        align-items: center;
    `,

    TextCustomInput: styled.TextInput`
        flex: 1;
        font-size: 16px;
        color: rgba(255, 255, 255, 1)
        margin-left: 10px;
    `,

    Icon: styled(IconFeather)`
        color: #ffffff;
    `,
};
