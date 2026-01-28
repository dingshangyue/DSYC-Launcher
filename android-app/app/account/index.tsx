import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card, Button, List, Divider } from "react-native-paper";

const AccountScreen = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>账户管理</Text>
      </View>
      
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.cardTitle}>当前账户</Text>
          <List.Item
            title="未登录"
            description="点击登录或创建账户"
            left={() => <List.Icon icon="account" />}
          />
          <Divider />
          <Button mode="contained" style={styles.loginButton}>
            Microsoft登录
          </Button>
          <Button mode="outlined" style={styles.loginButton}>
            第三方登录
          </Button>
          <Button mode="outlined" style={styles.loginButton}>
            离线模式
          </Button>
        </Card.Content>
      </Card>
      
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.cardTitle}>账户列表</Text>
          <List.Item
            title="离线账户"
            description="Offline Mode"
            left={() => <List.Icon icon="account" />}
          />
          <List.Item
            title="第三方账户"
            description="Third-Party"
            left={() => <List.Icon icon="account" />}
          />
        </Card.Content>
      </Card>
      
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.cardTitle}>账户设置</Text>
          <List.Item
            title="自动登录"
            description="启动时自动登录"
            left={() => <List.Icon icon="login" />}
          />
          <List.Item
            title="刷新令牌"
            description="更新登录状态"
            left={() => <List.Icon icon="refresh" />}
          />
          <List.Item
            title="注销"
            description="退出当前账户"
            left={() => <List.Icon icon="logout" />}
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
  loginButton: {
    marginVertical: 4,
  },
});

export default AccountScreen;
