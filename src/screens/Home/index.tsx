import React from 'react';

import ButtonCustom from '../../components/button-custom';
import InputCustom from '../../components/input-custom';

import Logopoke from '../../assets/images/logopoke.png';
import Styles from './styles';

const Home: React.FC = ({navigation}) => {
    return (
        <Styles.Container>
            <Styles.LogoContainer>
                <Styles.Logo source={ Logopoke } resizeMode="contain" />
            </Styles.LogoContainer>
            <Styles.Title>Login</Styles.Title>

            <Styles.ContainerEmail>
                <InputCustom name="email" icon="mail" placeholder="Email" />
            </Styles.ContainerEmail>

            <Styles.ContainerPassword>
                <InputCustom
                    name="password"
                    icon="lock"
                    type="password"
                    placeholder="Senha"
                    havePassword
                    eye
                />
            </Styles.ContainerPassword>

            <ButtonCustom onPress={() => navigation.navigate('Details')}>
                Logar
            </ButtonCustom>
        </Styles.Container>
    );
};

export default Home;
