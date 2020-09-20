import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { loggerInfo } from '../../services/useful';
import api from '../../services/api';
import Styles from './styles';

export interface Pokemons {
    id: number;
    name: string;
    url: string;
    sprites: string;
    item: string;
}

const Details: React.FC = ({ navigation }) => {
  const [pokeData, setPokeData] = useState<Pokemons[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadPokemons = () => {
      setIsLoading(true);

      api.get(`pokemon?offset=0&limit=20&page=${page}`)
        .then(response => {
          setPokeData(response.data.results);
          loggerInfo('Details','loadPokemons => ', response.data.results);
        })

      setIsLoading(false);
    };

    loadPokemons();
  }, []);

  /* const renderItemList = ({ item }: string) => {
        <TouchableOpacity
          onPress={() => navigation.navigate('ItemPokemon', {
                pokeId: item.id,
                pokeName: item.name,
                    pokeUrl: item.url,
              })
            }
        >
            <View
              key={item.name}
              style={{
                height: 50,
                marginBottom: 5,
                padding: 10px,
                backgroundColor: '#f1f1f1',
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomColor: '#aaa',
                borderBottomWidth: 1,
                borderStyle: 'dotted'

                }}
            >
                <View
                  style={{
                      flexDirection: 'row',
                        justifyContent: 'center',
                      alignItems: 'center',
                    }}
                >
                    <Text
                      style={{
                          backgroundColor: '#0f0',
                          width: 30,
                            height: 30,
                            borderRadius: 25,
                          marginRight: 10,
                        }}
                    >
                        {item.id}
                    </Text>
                    <Text>{item.name}</Text>
                </View>

                <Icon name="arrow-forward" size={30} color="#666" />
            </View>
        </TouchableOpacity>;
  }; */

  const loadMore = () => {
    setPage(page + 1);
  };

  return (
        <Styles.Container>
            <Styles.Title>Lista de Pokemons</Styles.Title>
            <Styles.PokemonsList
              data={pokeData}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('ItemPokemon', {
                            pokeId: item.id,
                            pokeName: item.name,
                            pokeUrl: item.url,
                          })
                        }
                    >
                        <View
                          key={item.name}
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
                                <Text
                                  style={{
                                      backgroundColor: '#0f0',
                                      width: 30,
                                      height: 30,
                                      borderRadius: 25,
                                      marginRight: 10,
                                    }}
                                >
                                    {item.id}
                                </Text>
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
