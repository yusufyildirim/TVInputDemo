# TVInputDemo

A demo project for [React Native for TV](https://github.com/react-native-tvos/react-native-tvos).

### Demonstrations included

- Simple buttons
- Buttons that detect when they are focused (activated) by the TV focus engine
- Use of `Pressable`
- Use of `TextInput`
- React Native for TV focus management APIs (`TVFocusGuideView`, `nextFocus`, `hasTVPreferredFocus`)
- Apple TV menu key enablement with `TVEventControl`
- Dark/light theming with `useColorScheme()` and React context
- (NEW) Video demo using [React Native Video](https://github.com/react-native-video/react-native-video)

### Third party frameworks used

- Navigation with [React Navigation](https://reactnavigation.org/)
- Animation with [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- Material design components from [React Native Paper](https://callstack.github.io/react-native-paper/)

### Getting started

- Clone this repo
- In the `TVInputDemo` directory, execute

```bash
yarn
npx pod-install
yarn tvos # for Apple TV
yarn android # for Android TV, a TV emulator should already be running
```

### Apple TV screenshots (light theme)

![Simulator Screen Shot - Apple TV - 2022-08-30 at 10 25 32](https://user-images.githubusercontent.com/6577821/187504206-5c1f6249-bb34-4b76-896f-0f133a3f0593.png) ![Simulator Screen Shot - Apple TV - 2022-08-30 at 10 25 52](https://user-images.githubusercontent.com/6577821/187504250-b487d85a-0553-4c56-a54d-ee1f9439cdef.png)

### Android TV screenshots (dark theme)

![Screenshot_1661880380](https://user-images.githubusercontent.com/6577821/187504274-a8ad1f99-5079-4a0d-a931-2e57282f236c.png) ![Screenshot_1661880443](https://user-images.githubusercontent.com/6577821/187504305-9c3e12d8-262f-4d75-bc1b-b6ecf9c364ee.png)


