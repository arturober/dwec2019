package com.arturober.capacitor;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import java.util.ArrayList;

import com.servicesight.capacitor.startnavigation.StartNavigationPlugin;
import com.codetrixstudio.capacitor.GoogleAuth.GoogleAuth;
import jp.rdlabo.capacitor.plugin.facebook.FacebookLogin;
import com.jeep.plugins.capacitor.CapacitorSQLite;
import com.arturober.contactsplugin.ContactsPlugin;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
      add(StartNavigationPlugin.class);
      add(GoogleAuth.class);
      add(FacebookLogin.class);
      add(CapacitorSQLite.class);
      add(ContactsPlugin.class);
    }});
  }
}
