@echo off
echo This script will send a webhook payload to the endpoint: https://sandboxwebhook.apt-account.workers.dev/
echo.
echo Payload:
echo {
echo   "notificationId": "7a5b95ba-d053-40f3-a7f5-c5e7b0c27fca",
echo   "eventType": "net.authorize.payment.authcapture.created",
echo   "eventDate": "2024-11-16T21:24:24.3996778Z",
echo   "webhookId": "c7ba3f75-5ba7-450d-9fca-5d15700a0286",
echo   "payload": {
echo     "responseCode": 21,
echo     "authCode": "572",
echo     "avsResponse": "M",
echo     "authAmount": 12.5,
echo     "entityName": "transaction",
echo     "id": "245"
echo   }
echo }

choice /m "Do you want to send this payload?" /c YN
if errorlevel 2 (
    echo Payload not sent. Exiting...
    exit /b
)

curl -X POST https://prodwebhook.apt-account.workers.dev/ ^
     -H "Content-Type: application/json" ^
     -d "{ \"notificationId\": \"7a5b95ba-d053-40f3-a7f5-c5e7b0c27fca\", \"eventType\": \"net.authorize.payment.authcapture.created\", \"eventDate\": \"2024-11-16T21:24:24.3996778Z\", \"webhookId\": \"c7ba3f75-5ba7-450d-9fca-5d15700a0286\", \"payload\": { \"responseCode\": 21, \"authCode\": \"572\", \"avsResponse\": \"M\", \"authAmount\": 12.5, \"entityName\": \"transaction\", \"id\": \"245\" } }"

pause
