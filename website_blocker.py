import time
from datetime import datetime as dt

host_temp = "hosts"
host_path = r"C:\Windows\System32\drivers\etc" 
redirect = "127.0.0.1" 
website_list = ["www.facebook.com", "facebook.com", "www.instagram.com","instagram.com", "www.x.com", "x.com"]

"""
I use a while to keep the script running and adding the blocked websites
the while loops executes the actions very fast
specifically this loop runs every 5 seconds
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
"""
rewriting each line of the file until we find the line containing the website
then we delete everything below the newly written file
"""
    else:
        with open(host_path, 'r+') as file:
            content = file.readlines()
            file.seek(0)
            for line in content:
                if not any(website in line for website in website_list):
                    file.write(line)
                file.truncate()  
        print("Break Hours...")
    time.sleep(5)
