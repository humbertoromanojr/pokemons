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

    RenderPokemonItem: styled.View`
        height: 50px;
        margin-bottom: 5px;
        padding: 10px;
        background-color: #f1f1f1;
        flex-direction: row;
        justify-content: space-between;
        border-bottom-color: #aaaaaa;
        border-bottom-width: 1px;
        border-style: dotted;
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
};
