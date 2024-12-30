---
sidebar_position: 5
title: Styles
---

import { ApiTable } from '../../src/components/ApiTable/ApiTable.js'

This prop allows you to modify styles of every component. However, if you only want to adjust only colors, you should use [theme](/docs/api/theme) prop.

:::caution
Because of how library calculates rows and columns some styles may break the layout. You should avoid passing styles that changes the dimensions of components, especially the emoji.
:::

### `styles`

This is the name of property that has every component styles inside.

<ApiTable typeVal='Record<string, ViewStyle>' defaultVal='{}'/>

## Full list of styles properties

:::tip
You don't have to pass new styles for every component. The omitted ones will use default **theme** values.
These props won't work outside of styles prop.
:::

### `container`

Set styles of the whole modal container.

<ApiTable typeVal='ViewStyle' defaultVal='{}'/>

### `header`

Set styles of header text. Header is the component containing category name.

<ApiTable typeVal='TextStyle' defaultVal='{}'/>

### `knob`

Set styles of the modal knob.

:::caution
Works only in the modal mode with knob enabled.
:::

<ApiTable typeVal='ViewStyle' defaultVal='{}'/>

### `category`

Set styles of the category component. You can pass different styles for the container and the icon.

<ApiTable typeVal='{ container: ViewStyle, icon: TextStyle }' defaultVal='{ container: {}, icon: {} }'/>

### `searchBar`

Set styles of the searchBar component. You can pass different styles for the container and the text.

<ApiTable typeVal='{ container: ViewStyle, text: TextStyle }' defaultVal='{ container: {}, text: {} }'/>

### `emoji`

Set styles of the emoji component. You can pass styles for selected state, and the general text style (e.g. for custom fonts).

<ApiTable typeVal='{ selected: ViewStyle, text: TextStyle }' defaultVal='{ selected: {}, text: {} }'/>
