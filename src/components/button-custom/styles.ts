import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export default {
    Container: styled(RectButton)`
        width: 100%;
        height: 60px;
        background: #444;
        border-radius: 10px;
        margin-top: 20px;

        justify-content: center;
        align-items: center;
    `,

    ButtonText: styled.Text`
        font-size: 22px;
        color: #fff;
    `,
};
