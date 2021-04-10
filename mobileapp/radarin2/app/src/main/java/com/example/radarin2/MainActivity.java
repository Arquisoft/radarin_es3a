package com.example.radarin2;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.KeyEvent;
import android.webkit.WebSettings;
import android.webkit.WebView;

public class MainActivity extends AppCompatActivity {

    WebView myWebView;
    String url = "https://radarines3awebapp.herokuapp.com/";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        myWebView = (WebView) findViewById(R.id.webRadarin);
        myWebView.loadUrl(url);

        WebSettings webSettings = myWebView.getSettings();
        webSettings.setJavaScriptEnabled(true);
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
}