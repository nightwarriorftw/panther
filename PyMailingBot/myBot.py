# JSON Schema :
    # [
    #     {
    #         "title" : "Name of Event",
    #         "decsription" : "Some details about the event",
    #         "startTime" : "2019-02-27 09:43:29.826000", #In IST, format of Py datetime.datetime.now()
    #         "host" : "CDK Global"
    #     }
        
    #     {
    #         "title" : "Name of Event",
    #         "decsription" : "Some details about the event",
    #         "startTime" : "2019-02-27 09:43:29.826000", #In IST, format of Py datetime.datetime.now()
    #         "host" : "CDK Global"
    #     }
    # ]

import json
import requests

response=requests.get("https://localhost/events/api")
events=json.loads(response.txt)


mailSubject=eventTitle+" is happening tomorrow !"~
mailBody="This is a reminder that "+eventTitle+" hosted by "+eventHost+" is going to start in the next 24 hours ! Do check out the event !\n"
mailBody=mailBody+"\n\n"+eventDescription+"\n\n Starts at "+str(eventStartTime)+"."#The body of the mail
