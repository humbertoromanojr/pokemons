import styled from 'styled-components/native';
import {FlatList} from 'react-native';

import {Pokemons} from './index';

export default {
    Container: styled.View`
        flex: 1;
        justify-content: center;
        align-items: center;
        background: rgba(255, 255, 255, 1);

        padding: 10px 10px;
    `,

    Title: styled.Text`
        font-size: 26px;
        color: rgba(46, 34, 34, 1);
        padding-top: 10px;
        padding-bottom: 20px;
        text-transform: uppercase;
        font-weight: bold;
    `,

    PokemonsList: styled(FlatList as new () => FlatList<Pokemons>)`
        width: 100%;
    `,
};
