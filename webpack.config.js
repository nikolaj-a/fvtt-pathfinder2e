const path = require('path');

module.exports = (env, args) => {
    return {
        entry: './src/main/typescript/index.ts',
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.ts'],
        },
        output: {
            filename: 'pathfinder2.js',
            path: path.resolve(__dirname, 'target', 'web-assets'),
        },
    };
};
