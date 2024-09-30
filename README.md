# Online Food Ordering System

This project is a full-stack web application for an online food ordering system. Users can browse restaurants, add their favorite restaurants, order food, and manage their accounts. The backend is developed using Spring Boot, while the frontend is built with React.

## Features

- **User Roles:**
  - Customer: Can browse restaurants, view menus, and place orders.
  - Restaurant Owner: Can manage their restaurant profile, add menus, and track orders.
  - Admin: Manages users and restaurants in the system.

- **Core Features:**
  - Browse and search restaurants.
  - Add restaurants to favorites.
  - Place orders with multiple restaurants.
  - Manage restaurant profiles and menus.
  - Authentication and authorization for different user roles.
  - Upload restaurant images to Cloudinary (using React frontend).
  
## Technologies Used

### Backend (Spring Boot)
- **Spring Boot**: Framework for building the backend services.
- **Spring Security**: For managing authentication and authorization.
- **Hibernate/JPA**: For database interactions.
- **MySQL**: Database to store user, restaurant, and order details.
- **Stripe API**: For handling payments (optional if integrated).
- **Lombok**: To reduce boilerplate code.
- **Cloudinary API**: For image management in the restaurant profile.

### Frontend (React)
- **React**: JavaScript library for building the user interface.
- **Axios**: For making HTTP requests to the backend API.
- **React Router**: For routing and navigation between pages.
- **Formik & Yup**: For form handling and validation.
- **Cloudinary Widget**: For image uploads directly from the frontend.
- **Styled Components**: For custom styling.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
