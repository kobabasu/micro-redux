'use strict';

import gulp from 'gulp';
import DefaultRegistry from 'undertaker-registry';
import shell from '/usr/local/lib/node_modules/gulp-shell';

import { dir } from '../dir.es6'

class React extends DefaultRegistry {

  init() {
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

    gulp.task('babel', shell.task([`

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

    gulp.task('browserify', shell.task([`
      browserify ${src.app} -o ${dir.dist} -v -t \
      [ babelify --presets [ es2015 react ] ]
    `]));

    gulp.task('uglify', shell.task([`
      uglifyjs -c -o ${min} --source-map ${map} ${dir.dist}
    `]));


    gulp.task('src',
      gulp.series(
        'babel',
        'browserify'
    ));

    gulp.task('src:min',
      gulp.series(
        'babel',
        'browserify',
        `uglify`
    ));


    /*
     * docs
     */
    const docs = {};

    gulp.task('src:docs', shell.task([`
      jsdoc ${dir.src} -d ${dir.docs}
    `]));


    /*
     * watch
     */
    gulp.task('src:watch', () => {
      gulp
        .watch([watch], gulp.series('src'))
        .on('error', err => process.exit(1));
    });


    /*
     * build
     */
    gulp.task('src:build',
      gulp.series(
        'src',
        'src:min'
        // 'admin:src:docs'
    ));
  }
};

module.exports = new React();
