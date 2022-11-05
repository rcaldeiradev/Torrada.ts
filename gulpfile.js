const gulp = require('gulp');
const webpack = require('webpack-stream');
const path = require('path');

const compile = function () {
  return gulp
    .src('src/main.ts')
    .pipe(
      webpack({
        entry: './src/main.ts',
        module: {
          rules: [
            {
              test: /\.tsx?$/,
              use: 'ts-loader',
              exclude: /node_modules/,
            },
            {
              test: /\.s[ac]ss$/i,
              use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
              ],
            },
          ],
        },
        output: {
          filename: 'torrada.js',
          path: path.resolve(__dirname, 'dist/js'),
        },
        resolve: {
          extensions: ['.tsx', '.ts', '.js'],
        },
      })
    )
    .pipe(gulp.dest('dist/js'));
}

gulp.task('default', compile);
gulp.task('watch', function() {
  gulp.watch('./src/**/*.ts', compile);
  gulp.watch('./src/sass/**/*.scss', compile)
});