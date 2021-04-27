package com.example.radarin2;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import android.Manifest;
import android.app.Activity;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.view.KeyEvent;
import android.webkit.GeolocationPermissions;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends AppCompatActivity {

    private final int MY_PERMISSIONS_REQUEST_LOCATION = 1;

    public static WebView myWebView;
    public static AndroidJSInterface androidJSInterface = new AndroidJSInterface();
    String url = "192.168.1.133:3000";

    private String mGeoLocationRequestOrigin;
    private GeolocationPermissions.Callback mGeoLocationCallback;

    private MyFirebaseMessagingService messagingService = new MyFirebaseMessagingService();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        myWebView = (WebView) findViewById(R.id.webRadarin);
        myWebView.loadUrl(url);

        myWebView.addJavascriptInterface(androidJSInterface, "Android");

        WebSettings webSettings = myWebView.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webSettings.setDomStorageEnabled(true);
        webSettings.setDatabaseEnabled(true);

        askLocationPermission();

        myWebView.setWebViewClient(new WebViewClient());

        //buttonProcess();
    }

    private void askLocationPermission() {
        Activity that = this;
        myWebView.setWebChromeClient(new WebChromeClient() {
            @Override
            public void onGeolocationPermissionsShowPrompt(String origin, GeolocationPermissions.Callback callback) {
                mGeoLocationRequestOrigin = null;
                mGeoLocationCallback = null;
                // Do We need to ask for permission?
                if (ContextCompat.checkSelfPermission(
                        getApplicationContext(),
                        Manifest.permission.ACCESS_FINE_LOCATION
                ) != PackageManager.PERMISSION_GRANTED) {
                    mGeoLocationRequestOrigin = origin;
                    mGeoLocationCallback = callback;
                    ActivityCompat.requestPermissions(
                            that,
                            new String[] {Manifest.permission.ACCESS_FINE_LOCATION},
                            MY_PERMISSIONS_REQUEST_LOCATION);
                } else {
                    // Tell the WebView that permission has been granted
                    callback.invoke(origin, true, false);
                }
            }
        });
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        switch (requestCode) {
            case MY_PERMISSIONS_REQUEST_LOCATION: {
                // If request is cancelled, the result arrays are empty.
                if (grantResults.length != 0
                        && grantResults[0] == PackageManager.PERMISSION_GRANTED) {

                    // permission was granted
                    mGeoLocationCallback.invoke(mGeoLocationRequestOrigin, true, false);
                } else {

                    // permission denied
                    // Disable the functionality that depends on this permission.
                    mGeoLocationCallback.invoke(mGeoLocationRequestOrigin, false, false);
                }
                break;
            }
        }
        // other 'case' lines to check for other
        // permissions this app might request
    }

    public boolean onKeyDown(int keyCode, KeyEvent event) {
        WebView webView = (WebView) findViewById(R.id.webRadarin);

        if (event.getAction() == KeyEvent.ACTION_DOWN) {
            switch(keyCode) {
                case KeyEvent.KEYCODE_BACK:
                    if (webView.canGoBack()) {
                        webView.goBack();
                    } else {
                        finish();
                    }
                    return true;
            }
        }

        return super.onKeyDown(keyCode, event);
    }

    /*public void buttonProcess() {
        Button botonWeb = (Button) findViewById(R.id.buttonWeb);

        botonWeb.setOnClickListener(view -> {
            EditText urlCambio = (EditText) findViewById(R.id.web);
            url = urlCambio.getText().toString();

            //myWebView = (WebView) findViewById(R.id.webRadarin);
            myWebView.loadUrl(url);
        });
    }*/
}