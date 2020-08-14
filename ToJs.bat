@echo off
cd %~dp0

echo :
echo : Compile
echo :
del js\Test.js 2>nul
Haxe -p src -m Test --js js/Test.js
echo :  .. done!
echo :
echo : Run
echo :
echo : NOTICE : You must check console log using browser debug mode.

pause

start js\index.html