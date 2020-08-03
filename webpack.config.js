const path = require('path');
const {foundry} = require('./foundry.config');

module.exports = (env, args) => {
    // use output path from Foundry configuration in development mode
    let outputPath = path.resolve(__dirname, 'target', 'web-assets');
    if (args.mode === 'development') {
        outputPath = path.resolve(foundry?.folders?.data, 'systems', 'pathfinder2e')
    }

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
            filename: 'pathfinder2e.js',
            path: outputPath,
        },
    };
};
