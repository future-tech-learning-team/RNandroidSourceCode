package com.rnandroidsourcecode;

import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.KeyEvent;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.bridge.CatalystInstanceImpl;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.shell.MainReactPackage;

public class TestBundleJSActivity extends AppCompatActivity implements DefaultHardwareBackBtnHandler {

    private ReactRootView mReactRootView;
    private ReactInstanceManager mReactInstanceManager;
    private LinearLayout linearLayout;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_test_bundle_js);
        linearLayout = (LinearLayout) findViewById(R.id.activity_test_bundle_js);


        mReactRootView = new ReactRootView(this);
        mReactRootView.setLayoutParams(new FrameLayout.LayoutParams(FrameLayout.LayoutParams.MATCH_PARENT,FrameLayout.LayoutParams.MATCH_PARENT));
        mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(getApplication())
                .setBundleAssetName("index.android.bundle")
                .setJSMainModulePath("index")
                .addPackage(new MainReactPackage())
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();

        // 注意这里的MyReactNativeApp必须对应“index.android.js”中的
        // “AppRegistry.registerComponent()”的第一个参数
        mReactRootView.startReactApplication(mReactInstanceManager, "RNandroidSourceCode", null);


        linearLayout.addView(mReactRootView);
                Button buttonTest = (Button) findViewById(R.id.BT_test_bundle_js);

        buttonTest.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // 加载test.js
                CatalystInstanceImpl catalystInstance = (CatalystInstanceImpl) mReactInstanceManager.getCurrentReactContext().getCatalystInstance();
                catalystInstance.loadScriptFromAssets(getAssets(),"file:////test.android.bundle",false);
            }
        });




    }

    @Override
    public void invokeDefaultOnBackPressed() {
        super.onBackPressed();
    }

    @Override
    protected void onPause() {
        super.onPause();

        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostPause(this);
        }
    }

    @Override
    protected void onResume() {
        super.onResume();

        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostResume(this, this);
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();

        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostDestroy();
        }
    }

    @Override
    public boolean onKeyUp(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_MENU && mReactInstanceManager != null) {
            mReactInstanceManager.showDevOptionsDialog();
            return true;
        }
        return super.onKeyUp(keyCode, event);
    }

    @Override
    public void onBackPressed() {
        if (mReactInstanceManager != null) {
            mReactInstanceManager.onBackPressed();
        } else {
            super.onBackPressed();
        }
    }
}
