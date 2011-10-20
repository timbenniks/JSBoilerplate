#!/bin/bash

echo "Please enter your namespace:"
read namespace

mkdir ../library

cp -r ./files/*.js ../library

for file in ../library/*.js; 
do
	mv $file $file.old
	sed "s/NAMESPACE/$namespace/g" $file.old > $file
	rm -f $file.old
done