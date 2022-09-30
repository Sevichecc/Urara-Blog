#!/bin/bash
echo "————————1. Build locally————————"
netlify build 
echo "————————2.Deploy test---————————"
netlify deploy
echo "————————3.Deploy--------————————"
netlify deploy --prod