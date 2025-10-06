@echo off
echo ==================================================
echo      Running Postman API Test Collection
echo ==================================================

REM Execute the Newman command with the specified collection
newman run "C:\Users\YaelIsayRodríguezCor\Desktop\PROYECTO IA\postman_collection.json"

echo.
echo ==================================================
echo              Test Execution Finished
echo ==================================================
pause
