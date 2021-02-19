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
  CyclingIcon,
} from '../../../assets';

const Cycling = () => {
  return (
    <View style={styles.cycling}>
      <CyclingIcon />
    </View>
  );
};

const Icon = ({label, focus}) => {
  switch (label) {
    case 'Feed':
      return focus ? (
        <View>
          <FeedActiveIcon />
          <Text style={styles.textIconActive}>{label}</Text>
        </View>
      ) : (
        <View>
          <FeedIcon />
          <Text style={styles.textIcon}>{label}</Text>
        </View>
      );
    case 'Search':
      return focus ? (
        <View>
          <SearchActiveIcon />
          <Text style={styles.textIconActive}>{label}</Text>
        </View>
      ) : (
        <View>
          <SearchIcon />
          <Text style={styles.textIcon}>{label}</Text>
        </View>
      );
    case 'Cycling':
      return focus ? <Cycling /> : <Cycling />;
    case 'Safety':
      return focus ? (
        <View>
          <SafetyActiveIcon />
          <Text style={styles.textIconActive}>{label}</Text>
        </View>
      ) : (
        <View>
          <SafetyIcon />
          <Text style={styles.textIcon}>{label}</Text>
        </View>
      );
    case 'Profile':
      return focus ? (
        <View>
          <ProfileIcon />
          <Text style={styles.textIconActive}>{label}</Text>
        </View>
      ) : (
        <View>
          <ProfileIcon />
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
    paddingHorizontal: 35,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: '#ffffff',
    elevation: 2,
  },
  wrapper: {
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
  cycling: {
    width: 50,
    height: 50,
    borderRadius: 4,
    backgroundColor: '#0c8eff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
