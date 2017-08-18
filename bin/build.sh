#!/bin/bash

cd client
ng build --aot --prod --deploy-url="dist"
cp -r dist/* ../web/dist
cp -r src/assets/* ../web/assets
cp ../web/dist/index.html ../app/Resources/views/default/index.html.twig

