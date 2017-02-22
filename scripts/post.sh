#!/bin/bash

curl -X POST localhost:3000/api/posts -H 'content-type: application/json' -d '{"title": "oh hai", "body": "just saying hi :)"}'
