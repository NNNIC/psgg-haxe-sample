@echo off
echo : 
echo : Java
echo :
cd %~dp0
rd /s /q java 2>nul
echo :
echo : Compile
echo : 
pause
md java
Haxe -p src -m Test --java java
echo : done
echo :
echo : Run
echo : 
java -jar java\Test.jar
pause