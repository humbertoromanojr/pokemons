import React from 'react';
import {Text} from 'react-native';

import ButtonCustom from '../../components/button-custom';
import InputCustom from '../../components/input-custom';
import LogoNusa from '../../assets/images/logowp.png';
import Styles from './styles';

const Home: React.FC = ({navigation}) => {
    return (
        <Styles.Container>
            <Styles.LogoContainer>
                <Styles.Logo source={LogoNusa} />
            </Styles.LogoContainer>
            <Styles.Title>Login</Styles.Title>

            <Styles.ContainerEmail>
                {/*  <InputCustom /> */}
            </Styles.ContainerEmail>

            <Styles.ContainerPassword>
                {/*  <InputCustom /> */}
            </Styles.ContainerPassword>

            <ButtonCustom
                onPress={() => console.log('Chama function para logar')}>
                Logar
            </ButtonCustom>
        </Styles.Container>
    );
};

export default Home;
