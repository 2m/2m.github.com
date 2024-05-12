dev:
    yarn run start

process:
    scala-cli ProcessImages.scala

install:
    yarn install

build:
    yarn build

serve:
    cd build; python3 -m http.server 3000
