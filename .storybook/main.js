// .storybook/main.js
const masterWebpackCfg = require('../webpack.config');

module.exports = {
    stories: [
        //'../stories/**/*.stories.(t|j)sx',
        '../src/**/*.stories.(t|j)sx',
    ],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-knobs',
        '@storybook/addon-links'
    ],

    webpack: async config => {
        config.resolve.extensions = config.resolve.extensions.concat(masterWebpackCfg.resolve.extensions);

        /* Plugins
        -------------------------------------------------------------*/
        const excludePlugins = [
            'CopyPlugin'
        ];
        const masterPluginsToInclude = masterWebpackCfg.plugins.filter(plugin => {
            return excludePlugins.indexOf(plugin.constructor.name) === -1;
        });

        config.plugins = config.plugins.concat(masterPluginsToInclude);

        /* Loaders
        -------------------------------------------------------------*/
        config.module.rules = config.module.rules.concat(masterWebpackCfg.module.rules);

        return config;
    },
};

