'use strict';

import gulp from 'gulp';
import DefaultRegistry from 'undertaker-registry';
import shell from '/usr/local/lib/node_modules/gulp-shell';

import { dir } from '../dir.es6'

class React extends DefaultRegistry {

  init() {
    // task名の接頭辞を設定
    let prefix = (dir.name == '') ? '' : dir.name + ':';

    /*
     * src
     */
    const src = {
      src:    dir.src,
      app:    dir.js   + 'App.js',
      dist:   dir.dist + 'build.js',
      min:    dir.dist + 'build.min.js',
      map:    dir.dist + 'build.min.js.map',
      docs:   dir.docs + 'src',
      watch:  dir.src  + '**/*.*',
      ignore: []
    };

    gulp.task(prefix + 'babel', shell.task([`

      # 無視するディレクトリのアラート用
      tput setaf 33 && echo "---\n" \
      "ignore files: ${src.ignore}" \
      "by gulpfile \n---" &&
      tput setaf 255 &&

      ### 無視するディレクトリがない場合
      babel ${dir.src} --out-dir ${dir.js}

      ### 無視するディレクトリがある場合
      # babel ${dir.src} --out-dir ${dir.js} \
      --ignore ${src.ignore}
    `]));

    gulp.task(prefix + 'browserify', shell.task([`
      browserify ${src.app} -o ${src.dist} -v -t \
      [ babelify --presets [ es2015 react ] ]
    `]));

    gulp.task(prefix + 'uglify', shell.task([`
      uglifyjs -c -o ${src.min} --source-map ${src.map} ${dir.dist}
    `]));


    gulp.task(prefix + 'src',
      gulp.series(
        prefix + 'babel',
        prefix + 'browserify'
    ));

    gulp.task(prefix + 'src:min',
      gulp.series(
        prefix + 'babel',
        prefix + 'browserify',
        prefix + `uglify`
    ));


    /*
     * docs
     */
    const docs = {};

    gulp.task(prefix + 'src:docs', shell.task([`
      jsdoc ${dir.src} -d ${dir.docs}
    `]));


    /*
     * watch
     */
    gulp.task(prefix + 'src:watch', () => {
      gulp
        .watch([src.watch], gulp.series(prefix + 'src'))
        .on('error', err => process.exit(1));
    });


    /*
     * build
     */
    gulp.task(prefix + 'src:build',
      gulp.series(
        prefix + 'src',
        prefix + 'src:min'
        // prefix + 'admin:src:docs'
    ));
  }
};

module.exports = new React();
