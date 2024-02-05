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
        // {
        //     module: "calendar",
        //     header: "Family Calendar",
        //     position: "top_left",
        //     config: {
        //     calendars: [
        //         {
        //         symbol: "calendar-check",
        //         url: "${SECRET_MAGICMIRROR_GCALENDAR_FAMILY}"
        //         }
        //     ]
        //     }
        // },
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
            apiKey: "${SECRET_MAGICMIRROR_OPENWEATHERMAP_APIKEY}"
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
            apiKey: "${SECRET_MAGICMIRROR_OPENWEATHERMAP_APIKEY}"
            }
        },
        // {
        //     module: "newsfeed",
        //     position: "bottom_bar",
        //     config: {
        //     feeds: [
        //         {
        //         title: "AFP",
        //         url: "https://news.google.com/rss/search?q=source:AFP&um=1&ie=UTF-8&num=100&hl=en-US&gl=US&ceid=US:en"
        //         }
        //     ],
        //     showSourceTitle: true,
        //     showPublishDate: true,
        //     broadcastNewsFeeds: true,
        //     broadcastNewsUpdates: true
        //     }
        // },
    ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}