import * as React from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { KeyboardContext } from '../contexts/KeyboardContext'
import { Icon } from './Icon'

type SearchBarProps = {
  scrollEmojiCategoryListToIndex: (index: number) => void
}

export const SearchBar = ({ scrollEmojiCategoryListToIndex }: SearchBarProps) => {
  const {
    searchPhrase,
    setSearchPhrase,
    hideSearchBarClearIcon,
    translation,
    setActiveCategoryIndex,
    renderList,
    theme,
    styles: themeStyles,
    clearEmojiTonesData,
    enableSearchAnimation,
    setShouldAnimateScroll,
    enableCategoryChangeAnimation,
  } = React.useContext(KeyboardContext)
  const inputRef = React.useRef<TextInput>(null)

  const handleSearch = (text: string) => {
    setSearchPhrase(text)

    if (text === '') {
      setActiveCategoryIndex(0)
      scrollEmojiCategoryListToIndex(0)
      setShouldAnimateScroll(enableCategoryChangeAnimation)

      return
    }

    const searchIndex = renderList.findIndex((cat) => cat.title === 'search')
    if (searchIndex !== -1) {
      setActiveCategoryIndex(searchIndex)
      scrollEmojiCategoryListToIndex(searchIndex)
      setShouldAnimateScroll(enableSearchAnimation)
    }
  }

  const clearPhrase = () => {
    setSearchPhrase('')
    clearEmojiTonesData()
    setActiveCategoryIndex(0)
    setTimeout(() => {
      inputRef.current?.blur()
    }, 0)
    scrollEmojiCategoryListToIndex(0)
  }

  return (
    <View
      style={[
        styles.container,
        themeStyles.searchBar.container,
        { backgroundColor: theme.search.background },
      ]}
    >
      <TextInput
        style={[styles.input, themeStyles.searchBar.text, { color: theme.search.text }]}
        value={searchPhrase}
        onChangeText={handleSearch}
        placeholder={translation.search}
        ref={inputRef}
        onTouchEndCapture={clearEmojiTonesData}
        placeholderTextColor={theme.search.placeholder}
      />
      {!hideSearchBarClearIcon && !!searchPhrase && (
        <TouchableOpacity onPress={clearPhrase} style={styles.button}>
          <Icon
            iconName={'Close'}
            isActive={true}
            normalColor={theme.search.icon}
            activeColor={theme.search.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginRight: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#00000011',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    flex: 1,
  },
  button: {
    marginRight: 8,
  },
})
