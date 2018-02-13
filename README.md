# React Native 0.52 Android Source Code

为了调试React native Android源码，需要将RN项目下ReactAndroid目录作为library引入调试项目中

### 1.初始化调试项目

```
react-native init RNandroidSoureCode --version 0.52.2
```

### 2.下载ReactAndroid
下载RN0.52分支[react-native-0.52-stable](https://github.com/facebook/react-native/tree/0.52-stable)，需要两个目录：ReactAndroid、ReactCommon。
将ReactAndroid拷贝到项目根目录，然后将ReactCommon拷贝到ReactAndroid目录中。


### 3.gradle设置
Android项目 settings.gradle

```
project(':ReactAndroid').projectDir = new File(
        rootProject.projectDir, './ReactAndroid')
```
Android项目 build.gradle

```
buildscript {
    repositories {
        jcenter()
        mavenLocal()
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:2.2.3'
        classpath 'de.undercouch:gradle-download-task:3.1.2' // 导入下载插件
        // NOTE: Do not place your application dependencies here; they belong
        // in the individual module build.gradle files
    }
}
```


app build.gradle

```
    compile project(':ReactAndroid')
//    compile "com.facebook.react:react-native:+"  // From node_modules
```

ReactAndroid build.gradle

```
task buildReactNdkLib(dependsOn: [prepareJSC, prepareBoost, prepareDoubleConversion, prepareFolly, prepareGlog], type: Exec) {
    inputs.file('src/main/jni/react')
    outputs.dir("$buildDir/react-ndk/all")
    commandLine getNdkBuildFullPath(),
            'NDK_PROJECT_PATH=null',
            "NDK_APPLICATION_MK=$projectDir/src/main/jni/Application.mk",
            'NDK_OUT=' + temporaryDir,
            "NDK_LIBS_OUT=$buildDir/react-ndk/all",
            "THIRD_PARTY_NDK_DIR=$buildDir/third-party-ndk",
            "REACT_COMMON_DIR=$projectDir/ReactCommon", //修改ReactCommon位置
            '-C', file('src/main/jni/react/jni').absolutePath,
            '--jobs', project.hasProperty("jobs") ? project.property("jobs") : Runtime.runtime.availableProcessors()
}

task cleanReactNdkLib(type: Exec) {
    commandLine getNdkBuildFullPath(),
            "NDK_APPLICATION_MK=$projectDir/src/main/jni/Application.mk",
            "THIRD_PARTY_NDK_DIR=$buildDir/third-party-ndk",
            "REACT_COMMON_DIR=$projectDir/ReactCommon", //修改ReactCommon位置
            '-C', file('src/main/jni/react/jni').absolutePath,
            'clean'
}
```

### 4.NDK

请确定是否装的是 NDK-r10e版本，如果填入了别的版本，也是编译不了。
该NDK版本可以从 [官方下载](http://facebook.github.io/react-native/docs/android-building-from-source.html)

### 5.build 很慢

ReactAndroid的build.gradle文件里有多个下载的任务，所以build时间很长是由于需要进行下载。
clean后拷贝项目根牡蛎下downloads到ReactAndroid/build/download文件下，就不用去下载这些文件了



