# @kevtucker/rn-components

A collection of React Native and Expo UI Components including :
- **Card**: A simple card component with a title and description.
- **Button**: A simple button component with a title and onPress handler.
- **Text**: A simple text component with a title.
- **Layout**: A simple layout component with a Image Background prop and a children prop.

## Installation

```sh
npm install @kevtucker/rn-components react-native-safe-area-context

# or

yarn add @kevtucker/rn-components react-native-safe-area-context
```

> **Note:** You must also install `react-native-safe-area-context` in your project, as it is a peer dependency.

## Usage


```js
import { Card } from '@kevtucker/rn-components';

// ...

  <Card
    width={`95%`}
    description="This is a description"
    title="Card Title"
  />
```

## Button Component

The `Button` component is a styled `Pressable` with a text label. It uses a default blue style and lets you override the background and text colors.

### Basic Example

```tsx
import { Button } from '@kevtucker/rn-components';

// ...

<Button title="Press me" onPress={() => console.log('pressed')} />
```

### Styled Example

```tsx
import { Button } from '@kevtucker/rn-components';

// ...

<Button
  title="Submit"
  onPress={() => handleSubmit()}
  backgroundColor="#28A745"
  textColor="#FFFFFF"
/>
```

### Props

| Prop | Type | Required | Description |
| --- | --- | --- | --- |
| `title` | `string` | Yes | Label text displayed inside the button. Defaults to `'Press Here'` if not provided. |
| `onPress` | `() => void` | No | Callback fired when the button is pressed. |
| `backgroundColor` | `string` | No | Overrides the default background color (`#007BFF`). |
| `textColor` | `string` | No | Overrides the default label color (`#FFFFFF`). |

### Behavior Notes

- Default background color is `#007BFF` (blue) with a border radius of `10`.
- A subtle shadow/elevation is applied by default on both iOS and Android.
- If `title` is `undefined` or empty, the button falls back to the label `'Press Here'`.

---

## Text Component

The `Text` component is a lightweight wrapper around React Native `Text`.
It renders the `text` prop as content and lets you layer optional typography,
spacing, and shadow props while still passing through any native `Text` props.

### Basic Example

```tsx
import { Text } from '@kevtucker/rn-components';

// ...

<Text text="Hello world" />
```

### Styled Example

```tsx
import { Text } from '@kevtucker/rn-components';

// ...

<Text
  text="Readable heading"
  fontSize={24}
  textAlign="center"
  textColor="#1B2A41"
  letterSpacing={0.5}
  marginTop={8}
  marginBottom={12}
  shadowEnabled
  shadowColor="rgba(0,0,0,0.25)"
  numberOfLines={1}
/>
```

### Props

| Prop | Type | Required | Description |
| --- | --- | --- | --- |
| `text` | `string` | Yes | Text content rendered inside the native `Text` element. |
| `textColor` | `string` | No | Text color (hex, rgb/rgba, or named color). |
| `textAlign` | `'left' \| 'right' \| 'center' \| 'justify'` | No | Horizontal text alignment. |
| `shadowEnabled` | `boolean` | No | Applies built-in text shadow style. |
| `shadowColor` | `string` | No | Overrides the shadow color when shadow is enabled. |
| `fontFamily` | `string` | No | Custom font family. |
| `fontSize` | `number` | No | Font size in pixels. |
| `letterSpacing` | `number` | No | Spacing between characters. |
| `marginTop` | `number` | No | Top margin in pixels. |
| `marginBottom` | `number` | No | Bottom margin in pixels. |
| `style` | `object` | No | Additional React Native text styles. |

### Behavior Notes

- `shadowEnabled` applies a default shadow (offset, radius, and base color).
- `shadowColor` customizes only the shadow color.
- Any native React Native `Text` prop (for example `numberOfLines`, `ellipsizeMode`, `onPress`) can be passed directly.


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
