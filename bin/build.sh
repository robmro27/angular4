#!/bin/bash

cd client
ng build --aot --prod --deploy-url="dist"
cp dist/* ../web/dist
cp ../web/dist/index.html ../app/Resources/views/default/index.html.twig

