import React, { useState, useEffect } from 'react';
import { Text, View, Image, FlatList, ActivityIndicator, ScrollView } from 'react-native';

import { loggerInfo } from '../../services/useful';
import api from '../../services/api';
import Styles from './styles';

interface IProps {
    id: string;
    name: string;
}

const ItemPokemon: React.FC<IProps> = ({ route, navigation }) => {
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

    loggerInfo('ItemPokemon','loadPokemonDetails - moves => ', moves);

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
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ flexDirection: 'row', width: '100%',}}>
                <View style={{ width: '50%', height: 150, justifyContent: 'center', alignItems: 'center', borderColor: '#aaa', borderWidth: 1, }}>
                    <Image source={{ uri: image }} resizeMode="contain" style={{ width: '100%', height: '100%'}} />
                </View>
                <View style={{ width: '50%', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: 10, }}>
                    <Text style={{ fontSize: 16, }}>#{id}{' '}</Text>
                    <Text style={{ fontSize: 16, fontWeight: 'bold',        textTransform: 'uppercase' }}>{name}</Text>
                </View>

            </View>
            <View style={{ paddingVertical: 20,}}>
                <Text style={{ fontSize: 22, fontWeight: 'bold', textTransform: 'uppercase', backgroundColor: '#f1f1f1'}}>Slot - Habilidade</Text>
            </View>
            <FlatList
                data={abilities}
                keyExtractor={item => String(id)}
                renderItem={({ item }) => (
                    <View key={id} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{item.slot}{' - '}</Text>
                        <Text style={{ fontSize: 22, }}>{item.ability.name}</Text>
                    </View>
                )}
                ListFooterComponent={() => renderFooter()}
            />
            <View style={{ paddingVertical: 20,}}>
                <Text style={{ fontSize: 22, fontWeight: 'bold', textTransform: 'uppercase', backgroundColor: '#f1f1f1' }}>Moves</Text>
            </View>
            <FlatList
                data={moves}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <View key={id} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 22, }}>{item.move.name}</Text>
                    </View>
                )}
                ListFooterComponent={() => renderFooter()}
            />
            </ScrollView>
        </Styles.Container>
    );
};

export default ItemPokemon;
