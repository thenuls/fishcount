const manifestJSON = require('./dist/manifest.json')

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        '/fishcount/' : '/',
    pwa: {
        themeColor: manifestJSON.theme_color,
        workboxOptions: {
            runtimeCaching: [{
                urlPattern: new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
                handler: 'cacheFirst',
                options: {
                    cacheName: 'google-fonts',
                    expiration: {
                        maxEntries: 30
                    },
                    cacheableResponse: {
                        statuses: [0, 200]
                    }
                }
            }]
        }
    }
}