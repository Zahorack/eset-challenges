#!/bin/bash

unzip manual.docx

cat docProps/core.xml | tr -s " " "\n" | fmt