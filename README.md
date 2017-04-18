#React Native Android Starter

This starter kit should help you to get faster in Android development by using React Native. This package contains a Navigation Drawer, Toolbar and Google Maps.

##Installation

First off, you should follow the React Native's guide to install its dependcies. You can find this guide here:
* https://facebook.github.io/react-native/docs/getting-started.html#content

If you followed the steps above you should do:

* `git clone git@github.com:martinkogut/react-native-android-starter.git`
* `cd react-native-android-starter`
* Start your AVD or plugin your real device
* `react-native run-android`

##Best Practices
###Starting the AVD by Terminal
1. Start your Android Studio and select the AVD Manager button
2. Create your desired devices
3. Save and exit Android Studio
4. Type `$ANDROID_HOME/tools/emulator -list-avds` in your console and save the name
5. Type `$ANDROID_HOME/tools/emulator -avd {YOUR_DEVICE_NAME}`

You can create a bash script to start your AVD from command line, instead of opening Android Studio every time
