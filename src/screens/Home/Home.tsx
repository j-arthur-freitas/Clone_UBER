import React from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from './Home.styles';
import { Card } from '../../components/Card/Card';
import { TabBar } from '../../components/TabBar/TabBar';

type Sugestao = { icone: string; titulo: string };
const sugestoesViagem: Sugestao[] = [
  { icone: 'Viagem', titulo: 'Viagem' },
  { icone: 'Reserve', titulo: 'Reserve' },
  { icone: 'Seniors', titulo: 'Senhores' },
  { icone: 'Teens', titulo: 'Crianças' },
];

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerSpacer} />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity style={styles.inputContainer}>
          <TextInput
            placeholder="Informe o local de partida"
            style={styles.input}
            editable={false}
          />
        </TouchableOpacity>

        <View style={styles.bannerContainer}>
          <View style={styles.bannerLeft}>
            <Text style={styles.bannerTitle}>Quer melhorar suas viagens?</Text>
            <TouchableOpacity style={styles.bannerButton}>
              <Text style={styles.bannerButtonText}>Enviar localização</Text>
            </TouchableOpacity>
          </View>
          
        </View>

        <View style={styles.sugestoesHeader}>
          <Text style={styles.sectionTitle}>Sugestões</Text>
          <TouchableOpacity><Text style={styles.verTudoText}>Ver tudo</Text></TouchableOpacity>
        </View>

        <View style={styles.sugestoesGrid}>
          {sugestoesViagem.map((sugestao, index) => (
            <Card key={index} titulo={sugestao.titulo} icone={sugestao.icone} />
          ))}
        </View>

      <View style={styles.bannerInferiorContainer}>
          <View style={styles.bannerInferiorLeft}>
            <Text style={styles.bannerInferiorTitle}>Apoie pais em movimento</Text>
            <TouchableOpacity style={styles.bannerInferiorButton}>
              <Text style={styles.bannerInferiorButtonText}>Configurar agora</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>

      <TabBar />
    </View>
  );
};