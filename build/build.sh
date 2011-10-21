#!/bin/bash

cat ../library/*.js >> ../library/combined.js

echo "combined.js has beed added to your library folder."
echo "YUIcompressor is doing it's work"

java -jar yuicompressor-2.4.6.jar ../library/combined.js -o ../library/combined-min.js --charset utf-8 --type js --verbose

echo "Check out combined-min.js"