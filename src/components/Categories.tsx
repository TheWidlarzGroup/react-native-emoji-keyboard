import * as React from 'react';
import { View, Animated, StyleSheet, FlatList } from 'react-native';
import { useKeyboardStore } from '../store/useKeyboardStore';
import { KeyboardContext } from '../contexts/KeyboardContext';
import {
  CATEGORIES,
  CATEGORIES_NAVIGATION,
  CategoryNavigationItem,
  CategoryTypes,
} from '../types';
import { CategoryItem } from './CategoryItem';

type CategoriesProps = {
  flatListRef: React.RefObject<FlatList>;
  scrollNav: Animated.Value;
};

export const Categories = ({ flatListRef, scrollNav }: CategoriesProps) => {
  const {
    activeCategoryIndex,
    categoryContainerColor,
    onCategoryChangeFailed,
    disabledCategory,
    activeCategoryContainerColor,
    enableRecentlyUsed,
  } = React.useContext(KeyboardContext);
  const { keyboardState } = useKeyboardStore();
  const handleScrollToCategory = React.useCallback(
    (category: CategoryTypes) => {
      flatListRef?.current?.scrollToIndex({
        index: CATEGORIES.filter(
          (name) => !disabledCategory.includes(name)
        ).indexOf(category),
      });
    },
    [disabledCategory, flatListRef]
  );

  const rendarItem = React.useCallback(
    ({ item, index }: { item: CategoryNavigationItem; index: number }) => (
      <CategoryItem
        item={item}
        index={index}
        handleScrollToCategory={handleScrollToCategory}
      />
    ),
    [handleScrollToCategory]
  );

  const activeIndicator = React.useCallback(
    () => (
      <Animated.View
        style={[
          styles.activeIndicator,
          {
            backgroundColor: activeCategoryContainerColor,
          },
          {
            transform: [{ translateX: scrollNav }],
          },
        ]}
      />
    ),
    [activeCategoryContainerColor, scrollNav]
  );
  const isRecentlyUsedHidden = (category: CategoryTypes) =>
    category === 'recently_used' &&
    (keyboardState.recentlyUsed.length === 0 || !enableRecentlyUsed);
  return (
    <View style={styles.bottomBar}>
      <View
        style={[styles.navigation, { backgroundColor: categoryContainerColor }]}
      >
        <FlatList
          data={CATEGORIES_NAVIGATION.filter(({ category }) => {
            if (isRecentlyUsedHidden(category)) return false;
            return !disabledCategory.includes(category);
          })}
          keyExtractor={(item) => item.category}
          renderItem={rendarItem}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          scrollEnabled={false}
          horizontal={true}
          onScrollToIndexFailed={onCategoryChangeFailed}
          ListHeaderComponent={activeIndicator}
          ListHeaderComponentStyle={styles.activeIndicatorContainer}
          extraData={activeCategoryIndex}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  navigation: {
    padding: 3,
    borderRadius: 8,
  },
  separator: {
    width: 1,
    height: 28,
    backgroundColor: '#00000011',
    marginHorizontal: 4,
  },
  activeIndicator: {
    position: 'absolute',
    width: 28,
    height: 28,
    borderRadius: 6,
  },
  activeIndicatorContainer: {
    position: 'absolute',
    width: 28,
    height: 28,
  },
});
