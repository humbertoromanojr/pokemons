import React, { useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';

import { loggerInfo } from '../../services/useful';
import Styles from './styles';

interface IProps {
    pokeId: number;
    pokeName: string;
    pokeUrl: string;
}

const ItemPokemon: React.FC<IProps> = ({ route, navigation }) => {
    const { id, name, image } = route.params;
    loggerInfo('ItemPokemon','route => ', route.params);

    const [pokeData, setPokeData] = useState<Pokemons[]>([]);

    useEffect(() => {
        const loadDetailsPokemon = async () => {

            const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
            const res = await fetch(url);
            const poke = await res.json();
            loggerInfo('ItemPokemon','route => ', poke);

        };

        loadDetailsPokemon();
    }, []);



     return (
        <Styles.Container>
            <View style={{ flexDirection: 'row', width: '100%',}}>
                <View style={{ width: '50%', height: 150, justifyContent: 'center', alignItems: 'center', borderColor: '#aaa', borderWidth: 1, }}>
                    <Image source={{ uri: image }} resizeMode="contain" style={{ width: '100%', height: '100%'}} />
                </View>
                <View style={{ width: '50%', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: 10, }}>
                <Text style={{ fontSize: 16, }}>#{id}{' '}</Text>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', textTransform: 'uppercase' }}>{name}</Text>
                </View>

            </View>
            <View style={{ paddingVertical: 20,}}><Text style={{ fontSize: 22, fontWeight: 'bold', textTransform: 'uppercase' }}>Habilidades</Text></View>
            <View style={{  }}>
                <Text>nome da habilidade</Text>
                <Text>nome da habilidade</Text>
                <Text>nome da habilidade</Text>
            </View>
        </Styles.Container>
    );
};

export default ItemPokemon;
