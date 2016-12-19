# micro-redux

```
git clone git@github.com-kobabasu:kobabasu/micro-redux.git src
```

## npm
1. 必要があればdevelopブランチを使う  
   `git checkout develop`
1. `npm start`
1. `npm install`
1. `npm run build`

## vagrant
1. `hub clone cores/cores-vagrant coreos`
1. `cd coreos`
1. 必要なファイルをリネーム  
   * `mv user-data.sample user-data`
   * `mv config.rb.sample config.rb`
1. Vagrantfile編集  
   `vim Vagrantfile`
   * `$instance_name_prefix = "任意の名前"`
   * NFSの設定
   * portの設定 80->8080
1. `vagrant up`

## docker
1. `vagnrat ssh`
1. apacheコンテナ起動
```
docker run --net=host --name apache -p 80:80 -p 443:443 -v /home/core/share/app:/var/www/html -d kobabasu/apache:0.31
```
1. `exit`

## check
1. ブラウザで確認
1. http://localhost:8080/src/sample/ -> Frontと表示
1. http://localhost:8080/src/sample/sample -> sampleと表示
1. http://localhost:8080/src/sample/admin -> Adminと表示
1. http://localhost:8080/src/sample/count -> ボタン表示

## gulp
1. gulp/dir.es6を変更
1. documentRootでgulp sass:buildを実行し動作するか確認
1. documentRootのgulpfile.babel.js内で読み込み

## path
* index.htmlのcss,distを変更 
  (サブディレクトリを含む絶対パスで `ex: /sample/dist/build.js`)
* Routes.jsxのROOTを変更
  (サブディレクトリを含む絶対パスで `ex: /sample/admin/`)
