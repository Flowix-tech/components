#!/bin/bash
set -e
NODE_ENV=production rollup -c ../../configs/build/rollup.config.js
