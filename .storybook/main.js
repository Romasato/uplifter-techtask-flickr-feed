// .storybook/main.js
module.exports = {
    stories: [
        //'../stories/**/*.stories.(t|j)sx',
        '../src/**/*.stories.(t|j)sx',
    ],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-knobs',
        '@storybook/addon-links',
        '@storybook/addon-viewport/register',
        '@storybook/addon-backgrounds/register'
    ],

    webpack: async (config, argv) => {
        /* Load main project webpack config
        -------------------------------------------------------------*/
        let projectWPCfg = require('../webpack.config');
        projectWPCfg = typeof projectWPCfg === 'function' ? projectWPCfg() : projectWPCfg;

        /* Take specific bits from project's webpack config
        -------------------------------------------------------------*/
        config.resolve.extensions = config.resolve.extensions.concat(projectWPCfg.resolve.extensions);

        /* Loaders
        -------------------------------------------------------------*/
        config.module.rules = config.module.rules.concat(projectWPCfg.module.rules);

        /* Plugins
        -------------------------------------------------------------*/
        // Some plugins might break Storybook build - exclude them
        const excludePlugins = [
            'CopyPlugin'
        ];
        const masterPluginsToInclude = projectWPCfg.plugins.filter(plugin => {
            return excludePlugins.indexOf(plugin.constructor.name) === -1;
        });

        config.plugins = config.plugins.concat(masterPluginsToInclude);

        return config;
    },
};

