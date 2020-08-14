@echo off
cd %~dp0

echo :
echo : Clear Working folder
echo :
rd /s /q cpp 2>nul
path=G:\HaxeToolkit\haxe;%path%
echo :
echo : Compile 
echo :
pause
md cpp
haxe -p src --main Test --cpp cpp
echo : 
echo : Run
echo :  
pause
cpp\Test.exe
pause