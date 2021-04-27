package com.example.radarin2;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.KeyEvent;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Button;
import android.widget.EditText;

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

        myWebView.setWebViewClient(new WebViewClient());

        //buttonProcess();
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