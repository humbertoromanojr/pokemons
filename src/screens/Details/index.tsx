import React, { useState, useEffect } from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
    const url = `https://pokeapi.co/api/v2/pokemon?limit=11`;
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

    };

    loadPokemons();

  }, []);

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

                <Icon name="arrow-forward" size={30} color="#666" />
            </Styles.RenderPokemonItem>
        </TouchableOpacity>
      )
  }

  return (
        <Styles.Container>
            <Styles.Title>Pokemons list</Styles.Title>
            <Styles.PokemonsList
              data={pokeData}
              keyExtractor={item => item.id}
              renderItem={renderPokemonItem}
              onEndReachedThreshold={1}
            />

            <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{ paddingTop: 10, justifyContent: 'flex-start', alignItems: 'center',}}
            >
                <Icon name="home" size={30} color="#ffffff" />
            </TouchableOpacity>

        </Styles.Container>
  );
};

export default Details;
