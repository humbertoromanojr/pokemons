import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

import api2 from '../../services/api2';
import Styles from './styles';

interface IProps {
    pokeId: number;
    pokeName: string;
    pokeUrl: string;
}

const ItemPokemon: React.FC<IProps> = ({ route, navigation }) => {
    const { pokeId, pokeName, pokeUrl } = route.params;

    const [pokeData, setPokeData] = useState<Pokemons[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadImagesPokemons = () => {
      setIsLoading(true);

      api2.get(`images/pokemon/1.png`)
        .then(response => {
          setPokeData(response.data);
          console.log('ItemPokemon','loadImagesPokemons => ', response.data);
        })

      setIsLoading(false);
    };

    loadImagesPokemons();
  }, []);

     return (
        <Styles.Container>
            <View style={{ flexDirection: 'row', width: '100%',}}>
                <View style={{ width: '50%', height: 150, justifyContent: 'center', alignItems: 'center', backgroundColor: '#aaa' }}>
                    <Text>imagem</Text>
                </View>
                <View style={{ width: '50%', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: 10}}>
                     <Text style={{ fontSize: 16, fontWeight: 'bold', textTransform: 'uppercase' }}>{pokeName}</Text>
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
