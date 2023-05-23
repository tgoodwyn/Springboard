import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse

def download_page(url):
    # Send a GET request to the URL
    response = requests.get(url)
    
    # Parse the HTML content using Beautiful Soup
    soup = BeautifulSoup(response.content, 'html.parser')
    
    # Find all the 'link' and 'script' tags
    tags = soup.find_all(['link', 'script'])
    
    # Download the associated files
    for tag in tags:
        if tag.get('href'):
            file_url = urljoin(url, tag['href'])
            download_file(file_url)
        elif tag.get('src'):
            file_url = urljoin(url, tag['src'])
            download_file(file_url)

    # Save the HTML content
    save_html(response.content)

def download_file(url):
    # Send a GET request to the file URL
    response = requests.get(url, stream=True)
    
    # Get the file name from the URL
    file_name = os.path.basename(urlparse(url).path)
    
    # Save the file
    with open(file_name, 'wb') as file:
        for chunk in response.iter_content(chunk_size=128):
            file.write(chunk)

def save_html(content):
    # Save the HTML content to a file
    with open('page.html', 'wb') as file:
        file.write(content)

# Example usage
download_page('https://jeopardy-example.surge.sh/')
