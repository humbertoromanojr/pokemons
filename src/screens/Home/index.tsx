import React from 'react';

import ButtonCustom from '../../components/button-custom';
import InputCustom from '../../components/input-custom';

import LogoNusa from '../../assets/images/logowp.png';
import Styles from './styles';

const Home: React.FC = () => {
    return (
        <Styles.Container>
            <Styles.LogoContainer>
                <Styles.Logo source={LogoNusa} />
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

            <ButtonCustom
                onPress={() => console.log('Chama function para logar')}>
                Logar
            </ButtonCustom>
        </Styles.Container>
    );
};

export default Home;
