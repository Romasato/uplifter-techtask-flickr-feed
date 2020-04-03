const path = require('path');
const webpack = require('webpack');
const WebpackCopyPlugin = require('copy-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');

const webpackConfig = {
    entry: {
        app: './src/index.tsx'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, './dist/'),
        publicPath: './dist'
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: false,
            cacheGroups: {
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                },
                vendors: {
                    name: 'commons',
                    chunks: 'all',
                    test: /[\\/]node_modules[\\/]/,
                    filename: 'commons.js',
                    priority: -10,
                    enforce: true
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(tsx?|jsx?)$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: path.join(__dirname, './tsconfig.spa.json')
                        }
                    }
                ],
                include: [
                    path.join(__dirname, './src'),
                    path.join(__dirname, './stories'),
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.s?css$/,
                use: [
                    ExtractCssChunks.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader', options: {
                            ident: 'postcss',
                            plugins: () => [
                                postcssPresetEnv({stage: 2})
                            ]
                        }
                    },
                    'resolve-url-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            sassOptions: {
                                //outputStyle: 'compressed',
                                sourceMap: true,
                                sourceMapContents: false
                            }
                        }
                    },
                    /*
                        We need to prepend global SASS definitions whenever we import
                        SASS files that use SASS globals, i.e. vars and mixins
                     */
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [path.join(__dirname, 'src/styles/sass-globals.scss')]
                        },
                    },
                ]
            },
            {
                test: /\.(png|svg)$/,
                use: [
                    {
                        loader: 'url-loader'
                    }
                ]
            },
            {
                test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                            publicPath: './fonts'
                        }
                    }
                ]
            },
            {
                test: /.(mp3|ogg|mp4)(\?[a-z0-9]+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'audio/',
                            publicPath: './audio'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new ExtractCssChunks({
            filename: '[name].css',
            chunkFilename: '[name].css'
        }),
        new WebpackCopyPlugin([
            { from: 'www', to: './' }
        ]),
    ],
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.tsx',
            '.ts',
            '.json',
            '.css',
            '.scss'
        ]
    }
};

module.exports = webpackConfig;
