import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, ActivityIndicator, ScrollView, SafeAreaView } from 'react-native';

import { loggerInfo } from '../../services/useful';
import api from '../../services/api';
import Styles from './styles';

type Props = {
    id: string;
    name: string;
}

const ItemPokemon: React.FC<Props> = ({ route }) => {
    const { id ,name, image } = route.params;
    loggerInfo('ItemPokemon','routes => ', route.params);

    const [abilities, setAbilities] = useState([]);
    const [moves, setMoves] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        async function loadPokemonDetails() {

        const response = await api.get(
            `pokemon/${id}`
        );

        const data = response.data.abilities.map(abilitie => ({
            ...abilitie,
        }));

        const data2 = response.data.moves.map(move => ({
            ...move,
        }));

        setAbilities(data);
        setMoves(data2)

        }

        setIsLoading(false);
        loadPokemonDetails();
    }, []);

    /* loggerInfo('ItemPokemon','loadPokemonDetails - abilities => ', abilities); */
    loggerInfo('ItemPokemon','moves => ', moves);

    const renderAbilitiesItems = ({ item }) => {
        return (
            <Styles.AbilitiesItem key={item.ability.name}>
                <Styles.IdSlotAbilities>{item.slot}{' - '}</Styles.IdSlotAbilities>
                <Styles.NamesAbilities>{
                item.ability.name}</Styles.NamesAbilities>
            </Styles.AbilitiesItem>
        )
    }

    const renderMovesItems = ({ item }) => {

        /* TODO - ficou faltando fazer
            const mov = item.move.name;
            const nameMove = mov.split('-', item.move.name)
            loggerInfo('ItemPokemon','nameMove => ', nameMove.data);
        */

        return (
            <Styles.MovesItem key={id}>
                <Styles.NamesMoves><Styles.Dote />{' '}{item.move.name}</Styles.NamesMoves>
            </Styles.MovesItem>
        )
    }

    function renderFooter() {
        if (!isLoading) return null;
        return (
          <View>
            <ActivityIndicator size="small" />
          </View>
        );
      }

    return (
        <Styles.Container>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent', width: '100%' }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <Styles.ContainerImageAndName>
                    <Styles.ContainerImage>
                        <Styles.PokemonImage source={{ uri: image }} resizeMode="contain"/>
                    </Styles.ContainerImage>
                    <Styles.ContainerIdAndName>
                        <Text>#{id}{' '}</Text>
                        <Styles.Name>{name}</Styles.Name>
                    </Styles.ContainerIdAndName>
                </Styles.ContainerImageAndName>

                <Styles.ContainerCategories>
                    <Styles.Title>Slot - Abilities</Styles.Title>
                </Styles.ContainerCategories>
                <FlatList
                    data={abilities}
                    keyExtractor={item => String(item.id)}
                    renderItem={renderAbilitiesItems}
                    ListFooterComponent={() => renderFooter()}
                />
                <Styles.ContainerCategories>
                    <Styles.Title>Moves</Styles.Title>
                </Styles.ContainerCategories>

                <FlatList
                    data={moves}
                    numColumns={2}
                    keyExtractor={item => String(item.id)}
                    renderItem={renderMovesItems}
                    ListFooterComponent={() => renderFooter()}
                />
                </ScrollView>
            </SafeAreaView>
        </Styles.Container>
    );
};

export default ItemPokemon;
