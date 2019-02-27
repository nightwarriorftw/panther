# JSON Schema :
#     [
#         {
#             "title" : "Name of Event",
#             "decsription" : "Some details about the event",
#             "startTime" : "2019-02-27 09:43:29.826000", #In IST, format of Py datetime.datetime.now()
#         }
        
#         {
#             "title" : "Name of Event",
#             "decsription" : "Some details about the event",
#             "startTime" : "2019-02-27 09:43:29.826000", #In IST, format of Py datetime.datetime.now()
#         }
#     ]

import json
import requests

response=requests.get("https://localhost/events/api")
events=json.loads(response.txt)
