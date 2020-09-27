import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import IconMaterialUi from 'react-native-vector-icons/MaterialIcons';

import {Pokemons} from './index';

export default {
    Container: styled.View`
        flex: 1;
        justify-content: center;
        align-items: center;
        background: #ee4035;

        padding: 10px 10px;
    `,

    Title: styled.Text`
        font-size: 26px;
        color: rgba(255, 255, 255, 1);
        padding-top: 10px;
        padding-bottom: 20px;
        text-transform: uppercase;
        font-weight: bold;
    `,

    PokemonsList: styled(FlatList as new () => FlatList<Pokemons>)`
        width: 100%;
    `,

    RenderPokemonItem: styled.View`
        height: 50px;
        margin-bottom: 10px;
        padding: 10px;
        background-color: #f1f1f1;
        flex-direction: row;
        justify-content: space-between;
        border-bottom-color: #aaaaaa;
        border-bottom-width: 1px;
        border-style: dotted;
        border-radius: 30px;

        shadow-color: rgba(4, 4, 4, 0.2);
        shadow-offset: {
            width: 0,
            height: 2,
        };
        shadow-opacity: 0.25;
        shadow-radius: 3.84px;

        elevation: 3;
    `,

    PokemonName: styled.View`
        flex-direction: row;
        justify-content: center;
        align-items: center;
    `,

    PokemonImage: styled.Image`
        width: 50px;
        height: 50px;
        border-radius: 25px;
        margin-right: 10px;
    `,

    ClickToSeePokemon: styled.TouchableOpacity`
        padding-top: 10px;
        justify-content: flex-start;
        align-items: center;
    `,

    Icon: styled(IconMaterialUi)`
        color: #ffffff;
    `,

    IconArrow: styled(IconMaterialUi)`
        color: #666666;
    `,

    ContainerFooter: styled.View`
        padding: 10px;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    `,
};
