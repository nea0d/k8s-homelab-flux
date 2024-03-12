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
                displayWhenEmpty: "user",
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
		}
    ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}