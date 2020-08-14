@echo off
cd %~dp0
del py\Test.py 2>nul
echo : 
echo : pythone
echo :
echo :
echo : Compile
echo :
pause
Haxe -p src -m Test --python py/Test.py
echo :  .. done!
echo :
echo : Run
echo :
pause

python py\Test.py

pause