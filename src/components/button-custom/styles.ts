import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export default {
    Container: styled(RectButton)`
        width: 100%;
        height: 60px;
        background: #444;
        border-radius: 10px;
        margin-top: 20px;

        shadow-color: rgba(4, 4, 4, 0.2);
        shadow-offset: {
            width: 0,
            height: 2,
        };

        shadow-opacity: 0.25;
        shadow-radius: 3.84px;

        elevation: 5;

        justify-content: center;
        align-items: center;
    `,

    ButtonText: styled.Text`
        font-size: 20px;
        color: #fff;
        text-transform: uppercase;
    `,
};
