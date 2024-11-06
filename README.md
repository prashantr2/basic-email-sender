### Simple mail sending app
- A simple mail sending email 
    - Set up these env. variable in ```.env``` file to make it work
    - ```EMAIL_ID=your_email_connected_to_gmail_for_devs```
    - ```EMAIL_PASSWORD=your_gmail_for_devs_password```
    - ```CUSTOM_API_TOKEN=<the secret you want to send in your API requests>```
- Send **POST** request from your frontend with this request body:
```json
    {
      "from": "<email>",
      "to": "<email>",
      "subject": "<subject>",
      "text": "<email_body>"
    }
```
- Set a **header** like below ```customapitoken=CUSTOM_API_TOKEN```
- On local setup, port is by default 3000