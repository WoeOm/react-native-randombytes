# react-native-secure-randombytes

## Usage

```js
import { randomBytes } from 'react-native-randombytes'

// asynchronous API
// uses iOS-side SecRandomCopyBytes
randomBytes(4, (err, bytes) => {
  console.log(bytes.toString('hex'))
})

asyncRandomBytes.then((bytes) => {},(err) => {})
```

## Installation

### Automatic - Android / iOS (recommended)

```bash
rnpm link
```

### Manual

#### `iOS`

* Drag RNRandomBytes.xcodeproj from node_modules/react-native-secure-randombytes into your XCode project.

* Click on the project in XCode, go to Build Phases, then Link Binary With Libraries and add `libRNRandomBytes.a`

Confused? See an example with screenshots [here](http://facebook.github.io/react-native/docs/linking-libraries-ios.html#content)


#### `Android`

* Update Gradle Settings

```gradle
// file: android/settings.gradle
...

include ':randombytes', ':app'
project(':randombytes').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-secure-randombytes/android')
```

* Update Gradle Build

```gradle
// file: android/app/build.gradle
...

dependencies {
    ...
    compile project(':randombytes')
}
```

* Register React Package

```java
...
import com.bitgo.randombytes.RandomBytesPackage // import

public class MainActivity extends Activity implements DefaultHardwareBackBtnHandler {

    private ReactInstanceManager mReactInstanceManager;
    private ReactRootView mReactRootView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        mReactRootView = new ReactRootView(this);
        mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(getApplication())
                .setBundleAssetName("index.android.bundle")
                .setJSMainModuleName("index.android")
                .addPackage(new MainReactPackage())
                .addPackage(new RandomBytesPackage()) // register package here
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();
        mReactRootView.startReactApplication(mReactInstanceManager, "AwesomeProject", null);
        setContentView(mReactRootView);
    }
...

```
