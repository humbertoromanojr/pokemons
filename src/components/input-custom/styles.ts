import styled from 'styled-components/native';

export default {
    Container: styled.View`
        padding: 0 16px;
        width: 100%;
        height: 60px;
        background: #f1f1f1f1;
        border-radius: 10px;

        flex-direction: row;
        align-items: center;
    `,

    TextInput: styled.TextInput`
        flex: 1;
        font-size: 16px;
        color: #222;
        margin-left: 10px;
    `,
};
