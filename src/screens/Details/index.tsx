import React, { useState, useEffect, useCallback } from 'react';
import { Text, TouchableOpacity, SafeAreaView } from 'react-native';

import { loggerInfo } from '../../services/useful';
import Styles from './styles';

export interface Pokemons {
    id: string;
    name: string;
    url: string;
    sprites: string;
    item: string;
    image: string;
}

const Details: React.FC<Pokemons> = ({ navigation }) => {
  const [pokeData, setPokeData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadPokemons = async () => {
    setIsLoading(true)
    const url = `https://pokeapi.co/api/v2/pokemon?page=${page}&perPage=20`;
    const res = await fetch(url);
    const data = await res.json();

    const pokeData = data.results.map((result: string, index: string) =>
    ({
        ...result,
        id: index + 1,
        name: result.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`

    }))
    /* loggerInfo('Details','loadPokemons => ', pokeData); */

    setPokeData(pokeData);
    setIsLoading(false)
    };

    loadPokemons();

  }, [])


  const renderPokemonItem = ({ item }) => {
      return (
        <TouchableOpacity
            onPress={() => navigation.navigate('ItemPokemon', {
                id: item.id,
                name: item.name,
                image: item.image,
                })
            }
        >
            <Styles.RenderPokemonItem
                key={item.id}
            >
                <Styles.PokemonName>
                    <Styles.PokemonImage source={{ uri: item.image}} />
                    <Text>{item.name}</Text>
                </Styles.PokemonName>

                <Styles.IconArrow name="arrow-forward" size={30} />
            </Styles.RenderPokemonItem>
        </TouchableOpacity>
      )
  }

  return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent', width: '100%' }}>
            <Styles.Container>
                <Styles.Title>Pokemons list</Styles.Title>
                <Styles.PokemonsList
                data={pokeData}
                keyExtractor={item => item.id}
                renderItem={renderPokemonItem}
                onEndReachedThreshold={1}
                />

                <Styles.ClickToSeePokemon
                onPress={() => navigation.navigate('Home')}
                >
                    <Styles.Icon name="home" size={30} />
                </Styles.ClickToSeePokemon>
            </Styles.Container>
        </SafeAreaView>
  );
};

export default Details;
