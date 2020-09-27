import styled from "styled-components/native";

export default {
    Container: styled.View`
        flex: 1;
        justify-content: flex-start;
        align-items: center;
        background: rgba(255, 255, 255, 1);
        padding: 10px 10px;
    `,

    ContainerImageAndName: styled.View`
        flex-direction: row;
        width: 100%;
    `,

    Title: styled.Text`
        font-size: 22px;
        color: rgba(46, 34, 34, 1);
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 5px;
        font-weight: bold;
        text-transform: uppercase;
        background-color: #f1f1f1;
    `,

    Name: styled.Text`
        font-size: 26px;
        font-weight: bold;
        text-transform: uppercase;
    `,

    ContainerImage: styled.View`
        width: 50%;
        height: 150px;
        justify-content: center;
        align-items: center;
        border-color: #aaaaaa;
        border-width: 1px;
    `,

    PokemonImage: styled.Image`
        width: 100%;
        height: 100%;
    `,

    ContainerIdAndName: styled.View`
        width: 50%;
        paddingLeft: 10px;
        justifyContent: center;
        alignItems: center;
    `,

    ContainerCategories: styled.View`
        padding-vertical: 20px;
        width: 100%;
    `,

    AbilitiesItem: styled.View`
        flex-direction: row;
    `,

    IdSlotAbilities: styled.Text`
        font-size: 22px;
        font-weight: bold;
    `,

    MovesItem: styled.View`
        flex-direction: row;
    `,

    NamesAbilities: styled.Text`
        font-size: 18px;
        text-transform: capitalize;
    `,

    NamesMoves: styled.Text`
        font-size: 18px;
        text-transform: capitalize;
        width: 170px
    `,

    Dote: styled.View`
        width: 6px;
        height: 6px;
        border-radius: 4px;
        background-color: #444444;
    `,
};
