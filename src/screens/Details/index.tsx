import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { loggerInfo } from '../../services/useful';
import api from '../../services/api';
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
    loggerInfo('Details','loadPokemons => ', pokeData);

    setPokeData(pokeData);

    };

    loadPokemons();

  }, []);

  return (
        <Styles.Container>
            <Styles.Title>Lista de Pokemons</Styles.Title>
            <Styles.PokemonsList
              data={pokeData}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('ItemPokemon', {
                            id: item.id,
                            name: item.name,
                            image: item.image,
                          })
                        }
                    >
                        <View
                          key={item.id}
                          style={{
                              height: 50,
                              marginBottom: 5,
                              padding: 10,
                              backgroundColor: '#f1f1f1',
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              borderBottomColor: '#aaa',
                              borderBottomWidth: 1,
                              borderStyle: 'dotted',
                            }}
                        >
                            <View
                              style={{
                                  flexDirection: 'row',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                }}
                            >
                                <Image source={{ uri: item.image}} style={{
                                      width: 50,
                                      height: 50,
                                      borderRadius: 25,
                                      marginRight: 10,
                                    }} />
                                <Text>{item.name}</Text>
                            </View>

                            <Icon name="arrow-forward" size={30} color="#666" />
                        </View>
                    </TouchableOpacity>
                )}
              onEndReachedThreshold={1}
            />

            <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{ paddingTop: 10, justifyContent: 'flex-start', alignItems: 'center',}}
            >
                <Icon name="home" size={30} color="#666" />
            </TouchableOpacity>

        </Styles.Container>
  );
};

export default Details;
