const path = require('path');
const webpack = require('webpack');

const entryPoints = {
    contact: [
        './services/lib/sourceMapSupport.ts',
        './services/contact.ts'
    ]
}

module.exports = {
    entry: entryPoints,
    output: {
        libraryTarget: 'commonjs',
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
    },
    mode: 'development',
    target: 'node',
    externals: { 'aws-sdk': { commonjs: 'aws-sdk' } },
    stats: {
        all: false,
        assets: true,
        timings: true,
    },
    devtool: 'inline-source-map',

    resolve: {
        extensions: ['.ts', '.js', '.d.ts'],
    },

    plugins: [
        new webpack.SourceMapDevToolPlugin({
            exclude: /node_modules/,
        }),
    ],

    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    'ts-loader',
                ],
            },
        ],
    },
};
