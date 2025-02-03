# RoofTopEnergyCalculator

This project is a web application built using Vite, React, and TypeScript. Vite is used as the build tool for its fast development experience, and TypeScript provides type safety for the project. The application uses Supabase as its backend database for real-time data and authentication.

Table of Contents

Features

Requirements

Getting Started

Project Structure

Available Scripts

Dependencies

Deployment

Contributing

License

Features

Blazing Fast Development: Powered by Vite for instant hot module replacement (HMR).

Type Safety: TypeScript for static typing.

Modern React: React 18+ with functional components and hooks.

CSS Modules: Scoped styling to prevent conflicts.

ESLint & Prettier: Enforced code style and linting.

Optional Testing: Jest and React Testing Library setup (if needed).

Supabase Integration: Real-time database and authentication support.

Requirements

Ensure you have the following installed on your system:

Node.js: v16.0.0 or higher

npm: v7.0.0 or higher (or use yarn/pnpm as an alternative package manager)

Getting Started

Clone the repository:

git clone https://github.com/your-username/your-repo.git
cd your-repo

Install dependencies:

npm install
# or
yarn install
# or
pnpm install

Set up Supabase:

Create a project in Supabase.

Copy the API URL and the public key.

Create a .env file in the project root and add the following:

VITE_SUPABASE_URL=<your-supabase-url>
VITE_SUPABASE_ANON_KEY=<your-supabase-anon-key>

Run the development server:

npm run dev
# or
yarn dev
# or
pnpm dev

Open your browser and navigate to http://localhost:5173 (or the port specified by Vite).

Project Structure

src/
|-- assets/        # Static assets like images, fonts, etc.
|-- components/    # Reusable React components
|-- pages/         # Page components for routes
|-- styles/        # Global and modular CSS files
|-- hooks/         # Custom React hooks
|-- utils/         # Utility functions
|-- services/      # Supabase client setup and related functions
|-- App.tsx        # Main React component
|-- main.tsx       # Entry point of the application
|-- vite-env.d.ts  # TypeScript definitions for Vite
public/            # Public static files

Available Scripts

npm run dev

Runs the development server.

npm run build

Builds the app for production.

npm run preview

Previews the production build locally.

npm run lint

Runs ESLint to lint the code.

npm run format

Formats the code using Prettier.

Dependencies

Core:

React: ^18.x

TypeScript: ^5.x

Vite: ^4.x

Database:

Supabase: ^2.x

Development:

ESLint: ^8.x

Prettier: ^3.x

Jest (optional): ^29.x

React Testing Library (optional): ^14.x

Deployment

To deploy the application:

Build the app:

npm run build

Serve the dist folder:
Use a static server like serve, Netlify, Vercel, or GitHub Pages.

npx serve dist

Ensure Supabase Environment Variables:

When deploying, make sure to set the VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables in your hosting provider's settings.

Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a pull request

License

This project is licensed under the MIT License. See the LICENSE file for details.

Author

Developed by Muhammad Firdaus bin Mohd Rosalan.
