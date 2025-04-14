# GastoSmart App

GastoSmart is a full-stack expense tracking application that helps users manage and categorize their expenses efficiently.

## Project Structure

```
gasto-smart-app/
├── gasto-smart-api/     # Backend - Node.js with Express and MongoDB
└── gasto-smart/         # Frontend - React Native with Expo
```

## Backend (gasto-smart-api)

### Tech Stack
- Node.js
- Express
- TypeScript
- MongoDB with Mongoose
- Zod for validation

### Features
- RESTful API architecture
- Category management (CRUD operations)
- Expense tracking with categories
- Input validation and error handling
- Environment configuration

### Setup
1. Install dependencies:
```bash
cd gasto-smart-api
npm install
```

2. Create a `.env` file:
```env
PORT=3333
MONGO_URL=your_mongodb_connection_string
```

3. Start the development server:
```bash
npm run dev
```

### API Endpoints

#### Categories
- `GET /category` - Get all categories
- `GET /category/:id` - Get specific category
- `POST /category` - Create new category
- `PUT /category/update/:id` - Update category
- `DELETE /category/delete/:id` - Delete category

#### Expenses
- `GET /expense` - Get all expenses
- `GET /expense/:id` - Get specific expense
- `POST /expense` - Create new expense
- `PUT /expense/update/:id` - Update expense
- `DELETE /expense/delete/:id` - Delete expense

## Frontend (gasto-smart)

### Tech Stack
- React Native
- Expo
- TypeScript
- React Hook Form
- Zod
- Axios
- React Native Reanimated
- React Native Bottom Sheet

### Features
- Clean and modern UI
- Expense management with categories
- Real-time search functionality
- Form validation
- Animated interactions
- Toast notifications
- Custom components
- Bottom sheet for adding expenses

### Setup
1. Install dependencies:
```bash
cd gasto-smart
npm install
```

2. Create a `.env` file:
```env
EXPO_PUBLIC_API_URL=http://your_api_url:3333
```

3. Start the Expo development server:
```bash
npm start
```

### Key Components
- Custom Input components (Text, Currency, Dropdown)
- Bottom Sheet for forms
- Expense list with swipe-to-delete
- Search functionality
- Toast notifications for feedback
- Category management

## Development

### Prerequisites
- Node.js v14 or higher
- MongoDB instance
- Expo CLI
- Android Studio or Xcode for mobile development

### Style Guide
- Use TypeScript for type safety
- Follow ESLint and Prettier configurations
- Use meaningful commit messages
- Document new features and API changes

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.