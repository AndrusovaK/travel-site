module.exports = {
    // Path settings
    pathTo: {
            Src: {
                Styles: 'src/less/**/*.less',
                MainStyleFile: 'src/less/main.less',
                Jade: 'src/jade/**/*.jade',
                Images: ['src/img/**/*.*', '!src/img/sprite/*.*'],
                PngSprite: 'src/img/sprite/**/*.png',
                GHPages: 'build/**/*',
                JS: 'src/js/**/*.*',
                JSVendor: 'vendor/**/*.*',
                BowerJSVendor: 'src/js/vendor/',
                JSCustom: ['custom/**/*.js', 'main.js', '!custom/toHead/**/*.js'],
                CSSVendor: 'src/less/vendor/',
                Txt: ['src/humans.txt', 'src/robots.txt', 'src/.htaccess','src/CHANGELOG.md','src/README.md'],
                Fonts: 'src/less/fonts/**/*',
                Svg: ['src/svg/**/*.*', '!src/svg/sprite/*.*'],
                SvgSprite: 'src/svg/sprite/**/*.svg',
                SvgSpriteTpl: 'src/less/components/_svg-sprite-less.tpl'
            },
            Build: {
                Styles: 'dist/css',
                Html: 'dist/',
                Images: 'dist/img',
                PngSprite: 'dist/img/sprite',
                PngSpriteCSS: 'src/less/includes',
                JSVendor: 'dist/js',
                JSCustom: 'dist/js/custom',
                Txt: 'dist/',
                Clean: ['dist/**/*', '!dist/.gitignore'],
                Fonts: 'dist/css/fonts',
                Svg: 'dist/svg',
                SvgSprite: 'dist/svg/sprite/svg-sprite.svg',
                SvgSpriteNoSvg: 'dist/svg/sprite/svg-sprite.png',
                SvgSpriteCSS: 'src/less/includes/_svg-sprite.less'
            }
        },

    // GitHub Pages options
    ghpOptions: {
        remoteUrl: ""
    },

    // jsDoc3 options for JS documentation generating
    // jsDocOptions:"./node_modules/jsdoc/jsdoc.js -c ./jsdoc-conf.json -r",

    // Styledocco options for SCSS documentation generating
    // StyledoccoOptions:"./node_modules/styledocco/bin/styledocco -o build/docs/scss -s src/scss src/scss",

    // Browser versions for automatically prefix
    autoprefixerBrowsers: ['last 3 versions', '> 1%', 'Firefox ESR'],

    // BrowserSync local web server settings
    browserSync: {
        server: './dist',
        baseDir: './dist',
        tunnel: true,
        host: 'localhost',
        port: 9000,
        injectChanges: true,
        logPrefix: "New Project Template"
    }

};
