package com.urbanairship.phonegap;

import android.app.Application;
import android.content.res.XmlResourceParser;

import com.urbanairship.AirshipConfigOptions;
import com.urbanairship.Autopilot;
import com.urbanairship.Logger;
import com.urbanairship.UAirship;
import com.urbanairship.push.PushManager;

import java.util.HashMap;
import java.util.Map;

public class PushAutopilot extends Autopilot {
    static final String UA_PREFIX = "com.urbanairship";
    static final String PRODUCTION_KEY = "com.urbanairship.production_app_key";
    static final String PRODUCTION_SECRET = "com.urbanairship.production_app_secret";
    static final String DEVELOPMENT_KEY = "com.urbanairship.development_app_key";
    static final String DEVELOPMENT_SECRET = "com.urbanairship.development_app_secret";
    static final String IN_PRODUCTION = "com.urbanairship.in_production";
    static final String GCM_SENDER = "com.urbanairship.gcm_sender";

    @Override
    public void execute(Application application) {
        UAirship.takeOff(application, getAirshipConfig(application));

        PushManager.shared().setIntentReceiver(PushReceiver.class);
        if (UAirship.shared().getAirshipConfigOptions().pushServiceEnabled) {
            PushManager.enablePush();
        }
    }

    private AirshipConfigOptions getAirshipConfig(Application application) {
        // Create the default options, will pull any config from the usual place - assets/airshipconfig.properties
        AirshipConfigOptions options = AirshipConfigOptions.loadDefaultOptions(application);

        //Find any overrides in the cordova config
        AirshipOptions configOptions = new AirshipOptions(application);

        // Apply any overrides from the manifest
        options.productionAppKey = configOptions.getString(PRODUCTION_KEY, options.productionAppKey);
        options.productionAppSecret = configOptions.getString(PRODUCTION_SECRET, options.productionAppSecret);
        options.developmentAppKey = configOptions.getString(DEVELOPMENT_KEY, options.developmentAppKey);
        options.developmentAppSecret = configOptions.getString(DEVELOPMENT_SECRET, options.developmentAppSecret);
        options.gcmSender = configOptions.getString(GCM_SENDER, options.gcmSender);
        options.inProduction = configOptions.getBoolean(IN_PRODUCTION, options.inProduction);

        // Always enable the use of the location service.  This does not mean
        // that location is enabled.  Still need to call enableLocation for that.
        options.locationOptions.locationServiceEnabled = true;

        // Set the minSDK to 14.  It just controls logging error messages for different platform features.
        options.minSdkVersion = 14;

        return options;
    }

    class AirshipOptions {
        private Map<String, String> airshipValues = new HashMap<String, String>();

        AirshipOptions(Application application) {
            parseConfig(application);
        }

        String getString(String key, String defaultValue) {
            return airshipValues.containsKey(key) ? airshipValues.get(key) : defaultValue;
        }

        boolean getBoolean(String key, boolean defaultValue) {
            return airshipValues.containsKey(key) ?
                    Boolean.parseBoolean(airshipValues.get(key)) : defaultValue;
        }

        private void parseConfig(Application application) {
            int id = application.getResources().getIdentifier("config", "xml", application.getPackageName());
            if (id == 0) {
                return;
            }

            XmlResourceParser xml = application.getResources().getXml(id);

            int eventType = -1;
            while (eventType != XmlResourceParser.END_DOCUMENT) {

                if (eventType == XmlResourceParser.START_TAG) {
                    if (xml.getName().equals("preference")) {
                        String name = xml.getAttributeValue(null, "name").toLowerCase();
                        String value = xml.getAttributeValue(null, "value");

                        if (name.startsWith(UA_PREFIX) && value != null) {
                            airshipValues.put(name, value);
                            Logger.verbose("Found " + name + " in config.xml with value: " + value);
                        }
                    }
                }

                try {
                    eventType = xml.next();
                } catch (Exception e) {
                    Logger.error("Error parsing config file", e);
                }
            }
        }

    }
}
