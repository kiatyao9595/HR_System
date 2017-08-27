@echo off
echo Enter your cs filename without '.cs'
set /p fname=Filename: 
C:\WINDOWS\Microsoft.NET\Framework\v4.0.30319\csc.exe %fname%.cs

@pause