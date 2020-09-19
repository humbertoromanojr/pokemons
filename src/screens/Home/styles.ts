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
        padding: 0 30px;
    `,

    LogoContainer: styled.View`
        display: flex;
    `,

    Logo: styled.Image`
        width: 250;
        height: 70;
    `,

    Title: styled.Text`
        font-size: 22px;
        color: rgba(46, 34, 34, 1);
        padding-top: 20;
        padding-bottom: 20;
    `,

    ContainerEmail: styled.View`
        margin-bottom: 16;
    `,
    InputText: styled.TextInput`
        font-size: 22;
        border-bottom-color: ${(props: Props) => `${props.inputBorderColor}`};
        color: ${(props: Props) => `${props.inputColor}`};
        border-bottom-width: 2px;
        height: 36;
        width: 90%;
        padding-top: 2px;
    `,

    ContainerPassword: styled.View`
        margin-bottom: 16;
    `,

    ContainerButtonLogged: styled.TouchableOpacity`
        font-size: 22px;
        background-color: rgba(46, 34, 34, 1);
        border-radius: 25px;
        padding-left: 16;
        padding-right: 16;
        padding-bottom: 8;
    `,

    ButtonLogged: styled.Text`
        font-size: 22px;
        color: rgba(252, 251, 251, 1);
    `,
};
