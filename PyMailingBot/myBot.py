# JSON Schema :
<<<<<<< HEAD
#     [
#         {
#             "title" : "Name of Event",
#             "description" : "Some details about the event",
#             "startTime" : "2019-02-27 09:43:29.826000", #In IST, format of Py datetime.datetime.now()
#             "host" : "CDK Global"
#         }
        
#         {
#             "title" : "Name of Event",
#             "description" : "Some details about the event",
#             "startTime" : "2019-02-27 09:43:29.826000", #In IST, format of Py datetime.datetime.now()
#             "host" : "CDK Global"
#         }
#     ]
=======
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
>>>>>>> f32186d367031862c50f24160b007f7310887d05

import json
import requests
import datetime

response=requests.get("http://localhost:4000/api/pythonBot")
#events=json.loads(response)
events=response.json()
#print(events[0]['title'])

for event in events:
	eventTitle=event['title']
	eventStartTime=str(event['startTime'])
	eventHost=event['host']
	eventDescription=event['decsription']#need to correct the spelling

<<<<<<< HEAD

	mailSubject=eventTitle+" is happening tomorrow !"
	mailBody="This is a reminder that "+eventTitle+" hosted by "+eventHost+" is going to start in the next 24 hours ! Do check out the event !\n"
	mailBody=mailBody+"\n\n"+eventDescription+"\n\n Starts at "+str(eventStartTime)+"."#The body of the mail

	print(mailSubject,mailBody)
=======
mailSubject=eventTitle+" is happening tomorrow !"~
mailBody="This is a reminder that "+eventTitle+" hosted by "+eventHost+" is going to start in the next 24 hours ! Do check out the event !\n"
mailBody=mailBody+"\n\n"+eventDescription+"\n\n Starts at "+str(eventStartTime)+"."#The body of the mail
>>>>>>> f32186d367031862c50f24160b007f7310887d05
