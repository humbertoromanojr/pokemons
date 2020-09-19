import React, {useState, useEffect} from 'react';
import {FlatList, View, Text} from 'react-native';

import api from '../../services/api';
import Styles from './styles';

export interface Pokemons {
    id: number;
    name: string;
    url: string;
}

const Details: React.FC = ({navigation}) => {
    const [pokeData, setPokeData] = useState<Pokemons[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);

    const loadMore = () => {
        setPage(page + 1);
    };

    useEffect(() => {
        const loadPokemons = async () => {
            setIsLoading(true);

            api.get('pokemon?limit=100&offset=200').then((response) => {
                setPokeData(response.data.results);
            });

            setIsLoading(false);
        };

        loadPokemons();
    }, []);

    return (
        <Styles.Container>
            <Styles.Title>Lista de Pokemons</Styles.Title>
            <Styles.PokemonsList
                data={pokeData}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <Text>{item.name}</Text>}
                onEndReachedThreshold={1}
            />
        </Styles.Container>
    );
};

export default Details;
