const ghpages = require('gh-pages')
const url = 'https://jonathanmv.github.io/learn-chinese/#/'
console.log('Publishing Github Pages...')

ghpages.publish('dist', () => console.log('Pages published at ' + url))
