#!/bin/bash
echo "1. build locally"
netlify build 
echo "2.deploy test"
netlify deploy
echo "3.deploy"
netlify deploy --prod