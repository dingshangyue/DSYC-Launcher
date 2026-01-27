import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card, Switch, List, Divider } from "react-native-paper";

const SettingsScreen = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>设置</Text>
      </View>
      
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.cardTitle}>启动器设置</Text>
          <List.Item
            title="自动检查更新"
            left={() => <List.Icon icon="update" />}
            right={() => <Switch value={true} />}
          />
          <List.Item
            title="启动时自动登录"
            left={() => <List.Icon icon="login" />}
            right={() => <Switch value={false} />}
          />
          <List.Item
            title="显示调试信息"
            left={() => <List.Icon icon="bug" />}
            right={() => <Switch value={false} />}
          />
          <List.Item
            title="语言"
            description="简体中文"
            left={() => <List.Icon icon="translate" />}
          />
        </Card.Content>
      </Card>
      
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.cardTitle}>游戏设置</Text>
          <List.Item
            title="内存分配"
            description="2048 MB"
            left={() => <List.Icon icon="memory" />}
          />
          <List.Item
            title="Java路径"
            description="使用内置Java"
            left={() => <List.Icon icon="coffee" />}
          />
          <List.Item
            title="游戏窗口大小"
            description="800x600"
            left={() => <List.Icon icon="window" />}
          />
        </Card.Content>
      </Card>
      
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.cardTitle}>存储设置</Text>
          <List.Item
            title="游戏目录"
            description="内部存储/DSYCLauncher"
            left={() => <List.Icon icon="folder" />}
          />
          <List.Item
            title="缓存大小"
            description="1024 MB"
            left={() => <List.Icon icon="database" />}
          />
        </Card.Content>
      </Card>
      
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.cardTitle}>关于</Text>
          <List.Item
            title="DSYC Launcher"
            description="版本 0.9.7"
            left={() => <List.Icon icon="information" />}
          />
          <List.Item
            title="开源协议"
            description="GPLv3"
            left={() => <List.Icon icon="file-document" />}
          />
          <List.Item
            title="官方网站"
            description="dsyc.launcher"
            left={() => <List.Icon icon="web" />}
          />
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
});

export default SettingsScreen;
