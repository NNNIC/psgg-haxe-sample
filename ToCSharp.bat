@echo off
cd %~dp0
rd /s /q cs 2>nul
echo :
echo : compile
echo : 
md cs
Haxe -p src -m Test --cs cs
echo : done
echo : 
echo : run
echo :
pause
cs\bin\Test.exe
pause