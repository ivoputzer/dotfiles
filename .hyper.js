module.exports = {
  config: {
    fontSize: 14,
    fontFamily: 'Source Code Pro',
    cursorColor: 'rgb(178, 184, 195)',
    cursorShape: 'BLOCK',
    foregroundColor: 'rgb(178, 184, 195)',
    backgroundColor: 'rgb(42, 48, 60)',
    borderColor: 'rgb(42, 48, 60)',
    // borderColor: 'rgb(21, 23, 29)',
    termCSS: 'x-row {font-weight: 600}',
    showHamburgerMenu: true,
    padding: '10px 5px',
    colors: {
      black: '#1b1b1b',
      red: '#bc5653',
      green: '#909d63',
      yellow: '#ebc17a',
      blue: '#7eaac7',
      magenta: '#b06698',
      cyan: '#8ddcd8',
      white: '#d9d9d9',
      lightBlack: '#636363',
      lightRed: '#bc5653',
      lightGreen: '#909d63',
      lightYellow: '#ebc17a',
      lightBlue: '#7eaac7',
      lightMagenta: '#b06698',
      lightCyan: '#8ddcd8',
      lightWhite: '#f7f7f7'
    },
    shell: '/usr/local/bin/fish',
    env: {
      EDITOR: 'subl -w',
      LANG: 'en_US.UTF-8',
      LC_ALL: 'en_US.UTF-8',
      CLICOLOR: 'YES',
      LSCOLORS: 'ExGxFxdxCxDxDxhbadExEx'
    },
    bell: 'SOUND',
    copyOnSelect: true
  },
  plugins: [
    'hyper-blink',
    'hyperline',
    'hyperlinks',
    // 'hyperterm-tabs',
    // 'hyperterm-focus-reporting',
    // 'hyper-terminal-tabs',
    // 'hyper-solarized-dark',
  ],
  localPlugins: []
}
