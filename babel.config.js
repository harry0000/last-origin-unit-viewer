module.exports = {
  plugins: [
    ['@babel/plugin-transform-class-properties', { 'loose': true }],
    ['@babel/plugin-transform-private-methods', { 'loose': true }],
    ['@babel/plugin-transform-private-property-in-object', { 'loose': true }],
  ],
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript'
  ],
};
