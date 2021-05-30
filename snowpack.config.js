module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    ['@snowpack/plugin-sass', { native: true }],
    ['@snowpack/plugin-babel'],
    '@snowpack/plugin-react-refresh',
  ],
}
