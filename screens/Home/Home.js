import React, { useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, Dimensions, ScrollView, Text } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { PieChart, BarChart } from 'react-native-chart-kit'; // Import PieChart and BarChart
import globalStyle from '../../assets/styles/globalStyle';
import { gasStationData } from '../MockData/MockGasData';

const screenWidth = Dimensions.get('window').width;

// Pie Chart Data (Profit Distribution)
const pieData = gasStationData.map(station => ({
  name: station.name,
  population: station.profit,
  color: station.profit > 0 ? '#4CAF50' : '#f44336', // Green for profit, red for loss
  legendFontColor: '#7F7F7F',
  legendFontSize: 15,
}));

// Bar Chart Data (Volume Sold)
const volumeData = {
  labels: gasStationData.map(station => station.name),
  datasets: [
    {
      data: gasStationData.map(station => station.volume),
    },
  ],
};

// Dashboard Component
const Home = ({ navigation }) => {
  useEffect(() => {}, []);

  // Calculate totals for summary cards
  const totalRevenue = gasStationData.reduce((sum, station) => sum + station.revenue, 0);
  const totalProfit = gasStationData.reduce((sum, station) => sum + station.profit, 0);
  const totalVolume = gasStationData.reduce((sum, station) => sum + station.volume, 0);

  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header Title */}
        <Card>
          <Card.Content>
            <Title style={styles.titleText}>Gas Station Dashboard</Title>
            <Paragraph>Overview of revenue, profit/loss, and volume</Paragraph>
          </Card.Content>
        </Card>

        {/* Summary Cards */}
        <View style={styles.summaryContainer}>
          <Card style={styles.summaryCard}>
            <Card.Content>
              <Title>Total Revenue</Title>
              <Text style={styles.summaryText}>${totalRevenue}</Text>
            </Card.Content>
          </Card>
          <Card style={styles.summaryCard}>
            <Card.Content>
              <Title>Total Profit</Title>
              <Text style={[styles.summaryText, { color: totalProfit > 0 ? '#4CAF50' : '#f44336' }]}>
                ${totalProfit}
              </Text>
            </Card.Content>
          </Card>
          <Card style={styles.summaryCard}>
            <Card.Content>
              <Title>Total Volume</Title>
              <Text style={styles.summaryText}>{totalVolume} Liters</Text>
            </Card.Content>
          </Card>
        </View>

        {/* Pie Chart (Profit/Loss Breakdown) */}
        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>Profit/Loss Breakdown</Text>
          <PieChart
            data={pieData}
            width={screenWidth - 40}
            height={220}
            chartConfig={chartConfig}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="5"
            absolute
          />
        </View>

        {/* Bar Chart (Volume Sold) */}
        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>Volume Sold per Station</Text>
          <BarChart
            data={volumeData}
            width={screenWidth - 40}
            height={220}
            chartConfig={chartConfig}
            verticalLabelRotation={30}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Chart Config
const chartConfig = {
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#ffffff',
  decimalPlaces: 2,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16,
  },
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  titleText: {
    fontSize: 24,
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  summaryCard: {
    flex: 1,
    marginHorizontal: 5,
  },
  summaryText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  chartContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Home;
