from bs4 import BeautifulSoup
import pprint as pp
import urllib2

pageUrl = "https://www.tumblr.com/explore/quotes"
page =  page = urllib2.urlopen(pageUrl)
soup = BeautifulSoup(page, "html.parser")

headings = soup.find_all('div', class_='post_content_inner')

all_info = []

for head in headings:
    quote = head.find('span').text.strip()
    all_info.append(str(quote))
    print(quote)
