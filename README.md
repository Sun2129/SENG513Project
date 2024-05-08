# Web Application Project

This project creates a Docker Container that hosts the Front-End portion of a Realtor web application. The Front-End of the application is created using Vite and Redux in JS. It is also responsive and utilizes a mobile-friendly strategy to cater to mobile users as well (this is largely possible due to the utilization of Tailwind). 

The Front-End portion communicates with the Back-End API that is hosted on an AWS Lightsail instance (which has now been taken down). The REST API was created using Node and Express in JS. It implements various features such as Login, Registration, Property Listing and Management, Property Reporting, and Admin Moderation. Login and Registration has been implemented to be secure and up to industry standards (in that it utilizes hashes to securely store the passwords in the MySQL database). Lastly, Property Images are able to be uploaded by users and are stored in AWS S3.

To run the Front-End:
Docker: docker-compose up --build
To run: docker-compose up (localhost:8000)
