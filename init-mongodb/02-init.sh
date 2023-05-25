#!/usr/bin/env bash
echo "########### Loading data to Mongo DB ###########"
mongoimport --jsonArray --db=Movies --collection=moviesList --file=/tmp/data/data.json
