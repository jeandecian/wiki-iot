import requests

open("universities_domains.txt", "w").write("\n".join(["\n".join(university["domains"]) for university in requests.get(
    "https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json").json()]))
