# portfolio-website

- If you would like to view my resume you can either click "Devin Young - Resume (Official).pdf" or click "qr-code.png" and scan that QR code.

- Next, if you would like to view all of my projects you can navigate to the link with my main Github page.

- Lastly, if you would like to view my resume, academic projects, work experiences, and educational background, you can navigate to the link with my live portfolio website.



This is the link to my live portfolio website. 

https://devinlyoung.github.io/portfolio-website/


This is the link to my Github repository specifically for the live portfolio website, containing the source code.

https://github.com/devinlyoung/portfolio-website


This is my main Github page, which incudes my Gitbhub repository for the live portfolio website, as well as the repositories for the projects that are linked on my website.

https://github.com/devinlyoung


Chatbot Implementation:

  The live portfolio website features a chatbot I created in Pycharm that is designed to helps users get information about my personal portfolio website. It uses artificial intelligence (AI) to understand and respond to questions based on the content from the website. Here's how it works and the tools used to build it:

  1. Fetch Data - The chatbot retrieves the latest content from Devin's website in real-time. It uses the Requests tool to grab the website's HTML (the code behind the website).

  2. Answer Questions: When a user asks a question, the chatbot uses the website's content to generate a relevant response. For example, if you ask about the projects on Devin’s site, the chatbot can pull up details directly from the website, specifically details that were hardcoded into the backend flask server in Pyton.

  3. AI Technology - The chatbot uses an API key from a powerful AI model called Google Generative AI (gemini-2.0-flash). This AI understands the content of the website and generates smart, accurate answers to your questions.

  4. Real-Time Interaction - The chatbot remembers previous questions and answers, allowing for a natural back-and-forth conversation. It uses a Flask web framework to manage the conversation and send responses in real-time.

  5. Cross Domain Requests - The CORS tool ensures that the chatbot can interact with websites or apps from different domains, so users from any website or platform can use it. This allows the backend flask server (which is also in Pycharm) to reach my live portfolio website, which enables the chatbot to pull harcoded data about my website from the backend flask server and answer questions users may have.

  Key Tools Summary:

  Flask: A tool to create the web server that powers the chatbot and handles user requests.

  Requests: A tool to fetch real-time data from Devin's website.

  Google Generative AI (gemini-2.0-flash): The AI engine that generates intelligent, helpful answers based on the website content.

  CORS: A tool that allows the chatbot to be accessed from different websites or platforms, ensuring easy use.
