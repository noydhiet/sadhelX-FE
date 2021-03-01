import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {
  FeedIcon,
  FeedActiveIcon,
  SearchIcon,
  SearchActiveIcon,
  SafetyIcon,
  SafetyActiveIcon,
  ProfileIcon,
  ProfileActiveIcon,
  CyclingIcon,
} from '../../../assets';

const IconCycling = () => {
  return (
    <View>
      <CyclingIcon width={80} height={80} />
    </View>
  );
};

const Icon = ({label, focus}) => {
  switch (label) {
    case 'Feed':
      return focus ? (
        <View style={styles.icon}>
          <FeedActiveIcon width={30} height={30} />
          <Text style={styles.textIconActive}>{label}</Text>
        </View>
      ) : (
        <View style={styles.icon}>
          <FeedIcon width={30} height={30} />
          <Text style={styles.textIcon}>{label}</Text>
        </View>
      );
    case 'Search':
      return focus ? (
        <View style={styles.icon}>
          <SearchActiveIcon width={30} height={30} />
          <Text style={styles.textIconActive}>{label}</Text>
        </View>
      ) : (
        <View style={styles.icon}>
          <SearchIcon width={30} height={30} />
          <Text style={styles.textIcon}>{label}</Text>
        </View>
      );
    case 'Cycling':
      return focus ? <IconCycling /> : <IconCycling />;
    case 'Safety':
      return focus ? (
        <View style={styles.icon}>
          <SafetyActiveIcon width={30} height={30} />
          <Text style={styles.textIconActive}>{label}</Text>
        </View>
      ) : (
        <View style={styles.icon}>
          <SafetyIcon width={30} height={30} />
          <Text style={styles.textIcon}>{label}</Text>
        </View>
      );
    case 'Profile':
      return focus ? (
        <View style={styles.icon}>
          <ProfileActiveIcon width={30} height={30} />
          <Text style={styles.textIconActive}>{label}</Text>
        </View>
      ) : (
        <View style={styles.icon}>
          <ProfileIcon width={30} height={30} />
          <Text style={styles.textIcon}>{label}</Text>
        </View>
      );
    default:
      return <FeedIcon />;
  }
};

const BottomNavigator = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <View style={styles.wrapper}>
              <Icon label={label} focus={isFocused} />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 17,
    paddingBottom: 13,
    paddingHorizontal: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: '#ffffff',
    elevation: 50,
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    // backgroundColor: 'yellow',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textIcon: {
    color: '#9a9a9a',
    fontSize: 10,
  },
  textIconActive: {
    color: '#0c8eff',
    fontSize: 10,
  },
});
