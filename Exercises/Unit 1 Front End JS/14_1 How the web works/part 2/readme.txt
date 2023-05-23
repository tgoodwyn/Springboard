## ****Part Two: Practice Tools****

1. Using ***curl***, make a ***GET*** request to the *icanhazdadjoke.com* API to find all jokes involving the word “pirate”
curl -H "Accept: application/json" "https://icanhazdadjoke.com/search?term=pirate"
{"current_page":1,"limit":20,"next_page":1,"previous_page":1,"results":[{"id":"2gii3LeN7Ed","joke":"Why couldn't the kid see the pirate movie? Because it was rated arrr!"},{"id":"SvzIBAQS0Dd","joke":"What did the pirate say on his 80th birthday? Aye Matey!"},{"id":"QuscibaMClb","joke":"What does a pirate pay for his corn? A buccaneer!"},{"id":"exXSCtkOKe","joke":"Why do pirates not know the alphabet? They always get stuck at \"C\"."},{"id":"SnOf2gqjiqc","joke":"Why are pirates called pirates? Because they arrr!"}],"search_term":"pirate","status":200,"total_jokes":5,"total_pages":1}

2. Use ***dig*** to find what the IP address is for *icanhazdadjoke.com*
104.21.66.15
3. Make a simple web page and serve it using ***python3 -m http.server***. Visit the page in a browser.
go to http://localhost:8000/example.html