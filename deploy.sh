#!/bin/bash
echo "————————1. Build locally————————"
netlify build 
echo "————————2.Deploy————————————————"
netlify deploy --prod