#!/usr/bin/python3
'''a Python script that fetches
 https://alu-intranet.hbtn.io/status using urllib
print information gotten from request'''
import urllib.request

if __name__ == "__main__":
    url = 'https://alu-intranet.hbtn.io/status'
    request = urllib.request.Request(url)
    with urllib.request.urlopen(request) as response:
        data = response.read()
        info = f"Body response:\n\t- type: {type(data)}\n\t- \
content: {data}\n\t- utf8 content: {data.decode('utf-8')}"
        print(info)
