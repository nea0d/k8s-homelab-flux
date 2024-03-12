/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/getting-started/configuration.html#general
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "0.0.0.0",
	port: 8080,
	basePath: "/",
	ipWhitelist: [],
	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true
    language: "fr",
    locale: "fr-FR",
    logLevel: ["DEBUG", "INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
    timeFormat: 24,
    units: "metric",
    modules: [
        {
            module: "alert",
        },
        {
            module: "updatenotification",
            position: "top_bar"
        },
        {
            module: "clock",
            position: "top_left"
        },
        {
            module: "calendar",
            header: "Family Calendar",
            position: "top_left",
            config: {
            calendars: [
                {
                    symbol: "calendar-check",
                    url: "${SECRET_MAGICMIRROR_GCALENDAR_FAMILY}"
                },
                {
                    symbol: "suitcase",
                    url: "https://fr.ftp.opendatasoft.com/openscol/fr-en-calendrier-scolaire/Zone-A.ics"
                },
                {
                    symbol: "power-off",
                    url: "https://calendar.google.com/calendar/ical/fr.french%23holiday%40group.v.calendar.google.com/public/basic.ics"
                },
                {
                    symbol: "cake-candles",
                    url: "https://calendar.google.com/calendar/ical/d95c64ab2ab0d76b581ac5b2d507ecef58b798b094eea4549cd4d61743457abe%40group.calendar.google.com/private-ac9398e45e7666fbd88b72f704261fb1/basic.ics"
                },
            ]
            }
        },
        {
            module: "compliments",
            position: "lower_third"
        },
        {
            module: "weather",
            position: "top_right",
            config: {
            weatherProvider: "openweathermap",
            type: "current",
            location: "Meyzieu",
            locationID: "6441828", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
            apiKey: "${SECRET_MAGICMIRROR_OPENWEATHERMAP_APIKEY}",
            showPrecipitationProbability: true,
            showPrecipitationAmount: true
            }
        },
        {
            module: "weather",
            position: "top_right",
            header: "Weather Forecast",
            config: {
            weatherProvider: "openweathermap",
            type: "forecast",
            location: "Meyzieu",
            locationID: "6441828", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
            apiKey: "${SECRET_MAGICMIRROR_OPENWEATHERMAP_APIKEY}",
            showPrecipitationProbability: true,
            showPrecipitationAmount: true
            }
        },
        {
            module: "newsfeed",
            position: "bottom_bar",
            config: {
            feeds: [
                {
                title: "NY Times World",
                url: "https://rss.nytimes.com/services/xml/rss/nyt/World.xml"
                },
                {
                    title: "NY Times Europe",
                    url: "https://rss.nytimes.com/services/xml/rss/nyt/Europe.xml"
                },
                {
                    title: "NY Times Tech",
                    url: "https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml"
                },
                {
                    title: "NY Times Science",
                    url: "https://rss.nytimes.com/services/xml/rss/nyt/Science.xml"
                },
                {
                    title: "NY Times Climate",
                    url: "https://rss.nytimes.com/services/xml/rss/nyt/Climate.xml"
                },
                {
                    title: "NY Times Space",
                    url: "https://rss.nytimes.com/services/xml/rss/nyt/Space.xml"
                } 
            ],
            showSourceTitle: true,
            showPublishDate: true,
            broadcastNewsFeeds: true,
            broadcastNewsUpdates: true
            }
        },
        {
            module: 'MMM-GoogleTrafficTimes',
            position: 'bottom_left',
            config: {
                key: "${SECRET_MAGICMIRROR_GOOGLEMAPS_APIKEY}",
                origin: "${SECRET_MAGICMIRROR_HOME_ADDRESS}",
                destinations: [
                    {
                        name: "Work Matt",
                        address: "${SECRET_MAGICMIRROR_WORK_MATT_ADDRESS}"
                    },
                    {
                        name: "Work Agnès",
                        address: "${SECRET_MAGICMIRROR_WORK_AGNES_ADDRESS}"
                    }
                ],
                updateInterval: 900000,
                avoidHighways: false,
                avoidTolls: false,
                mode: 'driving',
                language: "fr-FR",
                offsetTime: 25,
                lastUpdate: true,
                timeLastUpdateWarning: 1,
                debug: false
            }
        },
        {
			module: "MMM-OnSpotify",
			position: "top_center", /* bottom_left, bottom_center */ 
			config: {
				clientID: "${SECRET_MAGICMIRROR_SPOTIFY_CLIENTID}",
				clientSecret: "${SECRET_MAGICMIRROR_SPOTIFY_CLIENTSECRET}",
				accessToken: "${SECRET_MAGICMIRROR_SPOTIFY_ACCESSTOKEN}",
				refreshToken: "${SECRET_MAGICMIRROR_SPOTIFY_REFRESHTOKEN}",
				/* Add here your theming and behaviour configurations */
                // General module options [SEE BELOW]
                advertisePlayerTheme: true,
                displayWhenEmpty: "none",
                userAffinityUseTracks: false,
                prefersLargeImageSize: false,
                hideTrackLenghtAndAnimateProgress: false,
                showDebugPalette: false,
                userDataMaxAge: 14400,
                userAffinityMaxAge: 36000,
                deviceFilter: [],
                deviceFilterExclude: false,
                filterNoticeSubtitle: true,
                // Update intervals [SEE BELOW]
                isPlaying: 1,
                isEmpty: 2,
                isPlayingHidden: 2,
                isEmptyHidden: 3,
                onReconnecting: 4,
                onError: 8,
                // Animations [SEE BELOW]
                mediaAnimations: false,
                fadeAnimations: false,
                textAnimations: false,
                transitionAnimations: false,
                // Spotify Code (EXPERMIENTAL)
                spotifyCodeExperimentalShow: true,
                spotifyCodeExperimentalUseColor: true,
                spotifyCodeExperimentalSeparateItem: true,
                // Theming General
                roundMediaCorners: true,
                roundProgressBar: true,
                showVerticalPipe: true, 
                useColorInProgressBar: true,
                useColorInTitle: true,
                useColorInUserData: true,
                showBlurBackground: false,
                blurCorrectionInFrameSide: false,
                blurCorrectionInAllSides: false,
                alwaysUseDefaultDeviceIcon: false,
                experimentalCSSOverridesForMM2: [
                    ["--color-text-dimmed", "palette_vibrantlight"],
                    ["--ONSP-OVERRIDES-ICONS-COLOR", "palette_vibrantlight"], /* View custom.css */
                ],
			}
		},
        {
            module: 'MMM-Teslamate',
            position: 'bottom_right',
            config: {
                mqttServer: {
                    address: "${LB_MOSQUITTO_IP}",  // Server address or IP address of the MQTT broker
                    port: 1883,              // Port number if other than default (1883)
                    user: "${SECRET_MOSQUITTO_MQTT_USERNAME}",          // Leave out for no user
                    password: "${SECRET_MOSQUITTO_MQTT_PASSWORD}",  // Leave out for no password
                },
                rangeDisplay: "%", // "%" or "range"
                imperial: false, //use imperial units (true = Miles & F) or metric (false = Km & C)
        
                carID: '1', // defaults to '1'; only override if you have multiple Teslas and want to display 
                            // a specific car per instance of the module
        
                // set to true to enable both the graphic, and the additional stats 
                // (charge remaining, scheduled charge start, etc)
                hybridView: false,
                // size of the visible area
                sizeOptions: {
                    // size of the icons + battery (above text)
                    width: 450, // px, default: 450
                    height: 203, // px, default: 203
                    // the battery images itself
                    batWitdh: 250, // px, default: 250
                    batHeight: 75, // px, default: 75
                    // visual distance reduction to the module above
                    topOffset: -40, // px, default: -40
                },
                displayOptions: {
                    odometer: {
                        visible: false, // bool, default: true (option to hide the odometer)
                        fontSize: null, // null (to use default/css) or numeric rem-value (default value is 1.8)
                    },
                    batteryBar: {
                        visible: true, // bool, default: true (option to hide the battery-bar)
                        topMargin: 0, // px, default: 0 (px-value to add space between the battery-bar and the informations above)
                    },
                    temperatureIcons: {
                        topMargin: 0, // px, default: 0 (px-value to add space between the temperature-icons and the informations above)
                    }
                },
                carImageOptions: {
                    model: "m3", // mx, ms (S pre-refresh), ? (S post-refresh)
        
                    view: "STUD_3QTR", // STUD_SIDE works better for S/X
        
                    // full list of option codes: https://tesla-api.timdorr.com/vehicle/optioncodes.
                    // you need at least the color and the wheels. not all combos work.
                    // also consult: https://teslaownersonline.com/threads/teslas-image-compositor.7089/
                    options: "PPSW,W39B,DV2W",
        
                    // play with this until it looks about right.
                    // tested values: 0 for m3/STUD_3QTR, 25 for ms/STUD_SIDE
                    verticalOffset: 0,
        
                    opacity: 0.5
                },
        
                // show inside and outside temperatures below the car image: when AC or preconditioning is running (default), always, or never
                showTemps: "hvac_on", // "always", "never"
        
                // time in seconds to wait before re-rendering the module on incoming data. prevents high CPU load due to re-rendering on every new data point during driving
                updatePeriod: 5,
            }
        },
    ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}