import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, LayoutAnimation, Platform, UIManager, ScrollView, SafeAreaView } from "react-native";
import Navbar from "../components/Navbar";
import global from "../theme/styles";
import SectionTitle from "../components/SectionTitle";

if (Platform.OS === "android") {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const projetosAcademicos = [
  {
    title: "Dashboard Grafana - APS Negócios Digitais",
    period: "2025",
    institution: "Lunio",
    details:
      "Desenvolvimento de dashboards para monitoramento de infraestrutura em Grafana com ECharts. Inclui métricas de Tráfego de Rede (Bits Sent/Received), Utilização de CPU e Memória, e Espaço em Disco Usado. Tema escuro, tooltips detalhados, cores neon e ondas estilizadas para visualização clara e moderna de indicadores.",
  },
  {
    title: "Programa de Iniciação Científica",
    period: "2023 - 2024",
    institution: "Universidade Católica de Pernambuco",
    details:
      "Criação de simulação 3D em Blender para avaliação de risco geotécnico e aplicação de estruturas em aço leve com placas solares. Projeto voltado à estabilidade de encostas e uso de energia limpa, com foco técnico e impacto social.",
  },
  {
    title: "Detecção de Fraudes com Machine Learning e Autoencoder",
    period: "2024 - 2025",
    institution: "Universidade Católica de Pernambuco",
    details:
      "Projeto aplicado em base real de transações financeiras, comparando modelos supervisionados (Naive Bayes, Regressão Logística, Árvore de Decisão) com Autoencoder não supervisionado. Utilizou SMOTE para balanceamento, validação cruzada estratificada e avaliação com AUC, F1-score e curvas ROC.",
  },
];

export default function ProjetosScreen() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <SafeAreaView style={global.container}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 100 }}>
        <SectionTitle>Projetos Acadêmicos e Profissionais</SectionTitle>

        {projetosAcademicos.map((proj, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => toggleExpand(index)}
            style={[styles.card, expandedIndex === index && styles.cardExpanded]}
            activeOpacity={0.8}
          >
            <Text style={styles.title}>{proj.title}</Text>
            <Text style={styles.subtitle}>{proj.period} • {proj.institution}</Text>
            {expandedIndex === index && <Text style={styles.details}>{proj.details}</Text>}
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Navbar fixa */}
      <View style={styles.navbarContainer}>
        <Navbar />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1e1e1e",
    padding: 20,
    marginHorizontal: 20,
    marginTop: 15,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 5,
  },
  cardExpanded: {
    backgroundColor: "#2a2a2a",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 14,
    color: "#bbb",
    marginTop: 5,
  },
  details: {
    marginTop: 10,
    fontSize: 14,
    color: "#ddd",
    lineHeight: 20,
  },
  navbarContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});
