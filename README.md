# React Native Android Starter

This starter kit should help you to get faster in Android development by using React Native. This package contains a Navigation Drawer, Toolbar and Google Maps.

## Features

| Feature | Summary |
| --- | --- |
| [Redux](https://github.com/reactjs/react-redux) | A predictable state container - Helping you write applications that behave consistently and run in different environments. |
| [React Native Maps](https://github.com/airbnb/react-native-maps) | React Native Mapview component for iOS + Android |
| [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) | Easily use icons from a wide range of icon libraries, it's as simple as importing the icon font and then `<Icon name={'md-menu'} size={50} color={"#CCC"} />`. |

---

## Getting Started

1. Ensure you've followed the [React Native - Get Started Guide](https://facebook.github.io/react-native/docs/getting-started.html) for the Android platform
1. Clone this project `git clone https://github.com/martinkogut/react-native-android-starter.git`
1. Run `npm install` from root directory
1. Start the app in an emulator or install it by plugging in your real device

## Best Practices

### Starting the AVD by Terminal

1. Start your Android Studio and select the AVD Manager button
1. Create your desired devices
1. Save and exit Android Studio
1. Type `$ANDROID_HOME/tools/emulator -list-avds` in your console and save the name
1. Type `$ANDROID_HOME/tools/emulator -avd {YOUR_DEVICE_NAME}`

You can create a bash script to start your AVD from command line, instead of opening Android Studio every time
