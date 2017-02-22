#!/bin/bash

curl -X PUT localhost:3000/api/posts/$1 -H 'content-type: application/json' -d '{"title": "bye bye", "body": "see you in another life"}'
