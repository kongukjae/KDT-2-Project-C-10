import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import TodayPillMenu from '../pages/TodayPillMenu';
import ViewAllMenu from '../pages/ViewAllMenu';
import SearchMenu from '../pages/SearchMenu';
import SettingMenu from '../pages/SettingMenu';

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState('TodayPillMenu');

  const tabs = [
    { id: 'TodayPillMenu', label: '오늘의약' },
    { id: 'ViewAllMenu', label: '전체보기' },
    { id: 'SearchMenu', label: '검색' },
    { id: 'SettingMenu', label: '설정' },
  ];

  const renderScreen = () => {
    switch (activeTab) {
      case 'TodayPillMenu':
        return <TodayPillMenu />;
      case 'ViewAllMenu':
        return <ViewAllMenu />;
      case 'SearchMenu':
        return <SearchMenu />;
      case 'SettingMenu':
        return <SettingMenu />;
      default:
        return null;
    }
  };

  const handleTabPress = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.id}
            onPress={() => handleTabPress(tab.id)}
            style={[
              styles.tabButton,
              activeTab === tab.id && styles.activeTabButton,
            ]}
          >
            <Text style={[styles.tabButtonText, activeTab === tab.id && styles.activeTabButtonText]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.screenContainer}>{renderScreen()}</View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    paddingTop: 25,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#55B0AA',
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  activeTabButton: {
    backgroundColor: '#336B66',
  },
  tabButtonText: {
    color: 'white',
  },
  activeTabButtonText: {
    fontWeight: 'bold',
  },
  screenContainer: {
    flex: 1,
  },
};

// const styles = {
//   container: {
//     flex: 1,
//     paddingTop: 25,
//   },
//   tabContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',

//   }
// }

export default TabNavigation;