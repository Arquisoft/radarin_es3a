package com.example.radarin2;

import android.os.Build;
import android.util.Log;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.RequiresApi;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingService;

public class MyFirebaseMessagingService extends FirebaseMessagingService {

    public static final String TAG = "Firebase Messaging";

    private WebView webView;
    private AndroidJS androidJS = new AndroidJS();

    public MyFirebaseMessagingService() {
    }

    public void setWebView(WebView webView) {
        this.webView = webView;
        this.webView.addJavascriptInterface(androidJS, "Android");
    }

    @RequiresApi(api = Build.VERSION_CODES.KITKAT)
    @Override
    public void onNewToken(String token) {
        Log.d(TAG, "Refreshed token: " + token);

        // If you want to send messages to this application instance or
        // manage this apps subscriptions on the server side, send the
        // FCM registration token to your app server.
        sendRegistrationToServer(token);
    }

    public void sendRegistrationToServer(String token) {
        if(webView == null)
            return;

        Log.d(TAG, "Updating token");

        androidJS.setToken(token);

        // Evento para guardar token de webapp        webView.evaluateJavascript("(function() { window.dispatchEvent(event); })();", null);
        String event = "(function() { window.dispatchEvent(window.saveToken); })();";
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.KITKAT) {
            webView.evaluateJavascript(event, null);
        } else {
            webView.loadUrl("javascript:" + event);
        }
    }

    public class AndroidJS {

        public String token;

        public void setToken(String token) {
            this.token = token;
        }

        @JavascriptInterface
        public void getFirebaseToken() {
            FirebaseMessaging.getInstance().getToken()
                    .addOnCompleteListener(new OnCompleteListener<String>() {
                        @Override
                        public void onComplete(@NonNull Task<String> task) {
                            if (!task.isSuccessful()) {
                                Log.w(TAG, "Fetching FCM registration token failed", task.getException());
                                return;
                            }

                            // Get new FCM registration token
                            String token = task.getResult();

                            // Log and toast
                            String msg = "Obtenido token: " + token;
                            Log.d(TAG, msg);

                            sendRegistrationToServer(token);
                        }
                    });
        }

        @JavascriptInterface
        public String getToken() {
            return token;
        }
    }
}