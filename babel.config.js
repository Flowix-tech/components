


module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: '> 0.5%, last 2 versions, Firefox ESR, not dead'
            }
        ],
        '@babel/preset-react',
        "@babel/preset-typescript"
    ],
    plugins: []
}
