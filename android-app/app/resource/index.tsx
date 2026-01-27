import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card, Button, List, Divider } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const ResourceScreen = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>资源管理</Text>
      </View>
      
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.cardTitle}>资源包</Text>
          <List.Item
            title="Faithful 32x"
            description="32x分辨率"
            left={() => <List.Icon icon="image" />}
            right={() => <Ionicons name="chevron-forward" size={20} color="#999" />}
          />
          <List.Item
            title="Vanilla"
            description="默认资源包"
            left={() => <List.Icon icon="image" />}
            right={() => <Ionicons name="chevron-forward" size={20} color="#999" />}
          />
          <Button mode="contained" style={styles.addButton}>
            安装资源包
          </Button>
        </Card.Content>
      </Card>
      
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.cardTitle}>材质包</Text>
          <List.Item
            title="Sildur's Vibrant Shaders"
            description="光影材质"
            left={() => <List.Icon icon="image" />}
            right={() => <Ionicons name="chevron-forward" size={20} color="#999" />}
          />
          <Button mode="contained" style={styles.addButton}>
            安装材质包
          </Button>
        </Card.Content>
      </Card>
      
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.cardTitle}>声音包</Text>
          <List.Item
            title="Vanilla"
            description="默认声音"
            left={() => <List.Icon icon="volume-high" />}
            right={() => <Ionicons name="chevron-forward" size={20} color="#999" />}
          />
          <Button mode="contained" style={styles.addButton}>
            安装声音包
          </Button>
        </Card.Content>
      </Card>
      
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.cardTitle}>资源操作</Text>
          <View style={styles.actionGrid}>
            <Button mode="outlined" style={styles.actionButton}>
              从CurseForge下载
            </Button>
            <Button mode="outlined" style={styles.actionButton}>
              从Modrinth下载
            </Button>
            <Button mode="outlined" style={styles.actionButton}>
              导入资源文件
            </Button>
            <Button mode="outlined" style={styles.actionButton}>
              导出资源配置
            </Button>
          </View>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 32,
  },
  header: {
    marginVertical: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#007AFF",
  },
  card: {
    marginBottom: 16,
    borderRadius: 12,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  addButton: {
    marginTop: 16,
  },
  actionGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 8,
  },
  actionButton: {
    width: "48%",
    marginBottom: 12,
  },
});

export default ResourceScreen;
