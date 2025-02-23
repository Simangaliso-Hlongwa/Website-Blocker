import time
from datetime import datetime as dt #assigning the module to dt to keep the script short

host_temp = "hosts"
host_path = r"C:\Windows\System32\drivers\etc" #r tells python that the backslashes are not new lines
redirect = "127.0.0.1" #this is the redirect of the sites you find distracting
website_list = ["www.wikipedia.org", "wikipedia.org", "www.facebook.com", "facebook.com", "www.instagram.com","instagram.com", "www.x.com", "x.com"]

"""
I use a while to keep the script running and adding the blocked websites
the while loops executes the actions very fast
specifically this loop runs every 5 seconds
dt.(dt.now(year)) returns the current year
"""
while True:
    if dt(dt.now().year,dt.now().month,dt.now().day,8) < dt.now() < dt(dt.now().year,dt.now().month,dt.now().day,14): #here we compare the datetime objects with the current time
        print("working hours...")
        with open(host_path, 'r+') as file:
            content = file.read()
            for website in website_list:
                if website in content:
                    pass
                else:
                    file.write(redirect + " " + website + "\n")

    else:
        with open(host_path, 'r+') as file:
            content = file.readlines()
            file.seek(0)
            for line in content:
                if not any(website in line for website in website_list):
                    file.write(line)
                file.truncate()  #this line deletes everything downwards or from the last line downwards
        print("Break Hours...")
    time.sleep(5)  #scrpit is now run every 5 seconds, but the delay will be 5 seconds after the cuttoff
