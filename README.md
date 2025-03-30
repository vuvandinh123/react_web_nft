# NFT Project Documentation

## Project Overview
This project is an NFT marketplace that fetches data from a third-party API to display NFTs. The application consists of three main pages:

- **Home Page**: Showcases featured NFTs and collections..
- **Trending Page**: Displays the most popular NFTs based on market trends.
- **NFT Detail Page**: Provides detailed information about a selected NFT, including pricing history and ownership details.

The project is built with **React**, using **Vite** as the build tool, **Redux** for state management, and **Tailwind CSS** for styling.

---

## Project Structure

```
|-- README.md
|-- index.html
|-- package-lock.json
|-- package.json
|-- postcss.config.js
|-- public/
|   |-- [Static assets such as SVGs and images]
|-- src/
|   |-- App.jsx       # Main application component
|   |-- api/          # API request handlers
|   |   |-- AppURL.js
|   |   |-- CategoryApi.js
|   |   |-- CollectionsApi.js
|   |   |-- NftsApi.js
|   |   |-- ProductApi.js
|   |   |-- UserApi.js
|   |   `-- axiosInstanceConfig.js
|   |-- assets/       # Image and static assets
|   |-- components/   # Reusable UI components
|   |   |-- Footer/
|   |   |-- Header/
|   |   |-- Home/
|   |   |-- Product/
|   |-- hooks/        # Custom React hooks
|   |-- language/     # Localization files (English & Vietnamese)
|   |-- layout/       # Layout components
|   |-- pages/        # Main pages
|   |   |-- HomePage/
|   |   |-- TrendingPage/
|   |   |-- ProductDetailPage/
|   |-- redux/        # Redux store and slices
|   |-- styles/       # SCSS styles
|   |-- utils/        # Utility functions
|   `-- main.jsx      # Entry point of the React app
|-- tailwind.config.js # Tailwind CSS configuration
|-- vite.config.js     # Vite configuration file
`-- vvd-nft.jpeg      # Project image/logo
```

---

## Installation and Setup

### Prerequisites
Make sure you have the following installed:
- **Node.js (v16+)**
- **npm** or **yarn**

### Steps to Run the Project

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd nft-project
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
   or
   ```sh
   yarn dev
   ```
4. Open the application in your browser at:
   ```
   http://localhost:5173
   ```

---

## Additional Notes
- The API requests are handled in the `src/api/` folder, and `axiosInstanceConfig.js` is used to manage the API base URL.
- The application supports multiple languages via JSON files in the `src/language/` folder.
- Redux is used for managing global state, primarily stored in `src/redux/store.js`.
- The project follows a modular component structure to ensure reusability.

### Contribution
If you'd like to contribute, feel free to submit a pull request!

---

**Author:** Vũ Văn Định

