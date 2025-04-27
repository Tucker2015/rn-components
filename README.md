# rn-components

A collection of React Native and Expo UI Components including :
- **Card**: A simple card component with a title and description.
- **Button**: A simple button component with a title and onPress handler.
- **Text**: A simple text component with a title.
- **Layout**: A simple layout component with a Image Background prop and a children prop.

## Installation

```sh
npm install rn-components react-native-safe-area-context

# or

yarn add rn-components react-native-safe-area-context
```

> **Note:** You must also install `react-native-safe-area-context` in your project, as it is a peer dependency.

## Usage


```js
import { Card } from 'rn-components';

// ...

  <Card
    width={`95%`}
    description="This is a description"
    title="Card Title"
  />
```


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
