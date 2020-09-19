import styled from 'styled-components/native';
import {FlatList} from 'react-native';

import {Pokemons} from './index';

export default {
    Container: styled.View`
        flex: 1;
        justify-content: center;
        align-items: center;
        background: rgba(255, 255, 255, 1);

        padding: 0 30px;
        padding-bottom: 30px;
    `,

    Title: styled.Text`
        font-size: 26px;
        color: rgba(46, 34, 34, 1);
        padding-top: 20;
        padding-bottom: 20;
    `,

    PokemonsList: styled(FlatList as new () => FlatList<Pokemons>)`
        width: 100%;
    `,
};
