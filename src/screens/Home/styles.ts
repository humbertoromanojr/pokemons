import styled from 'styled-components/native';

type Props = {
    inputBorderColor: string;
    inputColor: string;
};

export default {
    Container: styled.View`
        flex: 1;
        justify-content: center;
        align-items: center;
        background: rgba(255, 255, 255, 1);

        padding: 10px 10px;
    `,

    LogoContainer: styled.View`
        display: flex;
    `,
    Logo: styled.Image`
        width: 250px;
        height: 170px;
    `,

    Title: styled.Text`
        font-size: 22px;
        color: rgba(46, 34, 34, 1);
        padding-top: 20px;
        padding-bottom: 20px;
    `,

    ContainerEmail: styled.View`
        margin-bottom: 16px;
    `,
    InputText: styled.TextInput`
        font-size: 22px;
        border-bottom-color: ${(props: Props) => `${props.inputBorderColor}`};
        color: ${(props: Props) => `${props.inputColor}`};
        border-bottom-width: 2px;
        height: 36px;
        width: 90%;
        padding-top: 2px;
    `,

    ContainerPassword: styled.View`
        margin-bottom: 16px;
        flex-direction: row;
    `,

    ContainerButtonLogged: styled.TouchableOpacity`
        font-size: 22px;
        background-color: rgba(46, 34, 34, 1);
        border-radius: 25px;
        padding-left: 16px;
        padding-right: 16px;
        padding-bottom: 8px;
    `,

    ButtonLogged: styled.Text`
        font-size: 22px;
        color: rgba(252, 251, 251, 1);
    `,
};
