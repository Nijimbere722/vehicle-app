# 🚗 Vehicle Registration & Management System

A production-grade Vehicle Registration and Management dashboard built with React. The application allows users to view, register, update, and delete vehicles through a dynamic, data-driven frontend that connects to a live REST API.

---

## 🌐 Live Demo

> Add your Vercel/Netlify deployment URL here

---

##  Project Features

### Public Access (No Login Required)
- **Home Page** — View a full list of all registered vehicles in a clean, sortable table showing manufacture, model, year, fuel type, vehicle type, and status.

### Protected Access (Login Required)
- **Dashboard** — Admin view showing vehicle stats (total, new, used) and a management table with View, Edit, and Delete actions.
- **Register Vehicle** — A 3-step wizard form to register a new vehicle with full validation.
- **Vehicle Details** — A tabbed detail view showing Info, Owner, Registration, and Insurance data fetched from segmented API endpoints.
- **Delete Vehicle** — Delete a vehicle with a confirmation modal to prevent accidental deletions.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| React Router DOM v7 | Client-side routing and protected routes |
| React Hook Form | Form state management |
| Zod | Schema-based form validation |
| TanStack Query (React Query) | Data fetching, caching, and mutations |
| Axios | HTTP client for API calls |
| Tailwind CSS | Utility-first styling |
| React Hot Toast | Toast notifications |
| Context API | Global authentication state |

---



### Installation

# 1. Clone the repository
git clone https://github.com/Nijimbere722/vehicle-app.git

# 2. Navigate into the project
cd vehicle-app

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev

The app will be running at http://localhost:5173

---

## 🔑 Authentication

This app uses a simulated client-side authentication system. There is no backend login endpoint. Authentication is handled entirely on the frontend using React Context API.

Use these credentials to log in:

| Field | Value |
|---|---|
| Email | test@gmail.com |
| Password | Password!234 |

When you log in successfully:
- Auth state is stored in localStorage so you stay logged in on refresh.
- Protected routes become accessible.
- The navbar updates to show Dashboard, Register Vehicle, and Logout links.



##  State Management Approach

### Authentication State — Context API
Authentication is managed globally using React Context API via AuthContext.jsx. The context exposes:
- isAuthenticated — boolean indicating if the user is logged in
- login(email, password) — validates credentials and sets session in localStorage
- logout() — clears session and resets auth state

The session is persisted in localStorage so users remain logged in after a page refresh.

### Server State — TanStack Query (React Query)
All API data is managed using TanStack Query:
- useQuery is used for fetching vehicle lists and individual vehicle segments (info, owner, registration, insurance). Each segment is cached independently to avoid over-fetching.
- useMutation is used for POST (create), PUT (update), and DELETE operations. On success, relevant queries are automatically invalidated and refetched.

---

## ✅ Form Validation

The registration form uses React Hook Form with Zod schemas for strict client-side validation, split across 3 steps:

- Step 1 — Vehicle Info: Manufacture, model, body type, color, year (1886 to current year + 1), engine capacity, odometer reading, seating capacity, vehicle type, fuel type, purpose, and status.
- Step 2 — Owner Info: Owner name, address, national ID (exactly 16 digits), mobile number (exactly 10 digits), email, owner type, and conditional company registration number.
- Step 3 — Registration and Insurance: Rwandan plate number format, plate type, registration and expiry dates (cannot be in the past), policy number, insurance company, insurance type, and other required documents.

Errors appear in real time as the user types, with red borders and error messages below each field.

---

## API

The app connects to a live REST API:

Base URL: https://student-management-system-backend.up.railway.app

| Method | Endpoint | Access | Description |
|---|---|---|---|
| GET | /api/vehicle-service/vehicle | Public | Get all vehicles |
| POST | /api/vehicle-service/vehicle | Protected | Register new vehicle |
| GET | /api/vehicle-service/vehicle/:id | Protected | Get full vehicle record |
| PUT | /api/vehicle-service/vehicle/:id | Protected | Update vehicle |
| DELETE | /api/vehicle-service/vehicle/:id | Protected | Delete vehicle |
| GET | /api/vehicle-service/vehicle/:id/info | Protected | Get vehicle info tab |
| GET | /api/vehicle-service/vehicle/:id/owner | Protected | Get owner tab |
| GET | /api/vehicle-service/vehicle/:id/registration | Protected | Get registration tab |
| GET | /api/vehicle-service/vehicle/:id/insurance | Protected | Get insurance tab |

---


## 👨‍💻 Author

Nijimbere
GitHub: https://github.com/Nijimbere722
