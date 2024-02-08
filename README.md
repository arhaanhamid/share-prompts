# Share Prompts

## Preview URL

https://shareprompts-next.vercel.app/

## Description

Welcome to Share Prompts! This project allows users to log in using Google authentication, share their creative writing prompts, and explore prompts submitted by others. The application is built with Next.js, React.js, Tailwind CSS, and MongoDB, providing an engaging platform for users to discover and contribute to a collection of writing prompts.

## Why?

Share Prompts is designed to encourage creativity and collaboration among users interested in writing. Whether you're looking for inspiration or want to share your unique prompts, this platform serves as a hub for the writing community to connect and exchange ideas.

## Quick Start

Get the project up and running on your local machine with these steps:

1. **Clone the repository:**  
    git clone https://github.com/your-username/blog-website.git  

2. **Navigate to the project folder:**  
   cd blog-website  

3. **Install dependencies:**  
   npm install

4. **Set up MongoDB:**  
   Create a MongoDB database and obtain the connection URL.  
   Create a .env.local file in the root of the project and add your MongoDB connection URL:  
   MONGODB_URI=your-mongodb-connection-url  
  
5. **Set up Google OAuth:**  
   Create a project on the Google Cloud Console.  
   Set up the OAuth consent screen and obtain the client ID and Secret.  
   In the .env.local file in the root of the project, add your Google OAuth client ID and Secret:
   GOOGLE_ID=here
   GOOGLE_SECRET=here
     
6. **Run the development server:**
   npm run dev

Visit http://localhost:3000 in your web browser to interact with the Share Prompts application. 

      
## Usage
Google Authentication:
Users can log in using their Google accounts, providing a seamless and secure authentication process.

Create and Save Prompts:
Authenticated users can create and save their writing prompts, contributing to the shared collection.

Explore Shared Prompts:
Users can browse through prompts submitted by others, fostering a sense of community and inspiration.

## Contributing
If you have ideas, find bugs, or want to contribute to the project, feel free to open an issue or create a pull request. Your input is valuable, and contributions are welcomed!
