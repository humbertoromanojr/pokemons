import styled from 'styled-components/native';

export default {
    Container: styled.View`
        padding: 0 16px;
        width: 100%;
        height: 60px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 30px;

        shadow-color: rgba(0, 0, 0, 0.2);
        shadowOffset: {
            width: 0,
            height: 2,
        };
        shadowOpacity: 0.25;
        shadowRadius: 3.84;

        elevation: 5;

        flex-direction: row;
        align-items: center;
    `,

    TextInput: styled.TextInput`
        flex: 1;
        font-size: 16px;
        color: rgba(255, 255, 255, 1)
        margin-left: 10px;
    `,
};
