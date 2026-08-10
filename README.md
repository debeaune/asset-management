# 🖥️ Parc Informatique — Laravel + Inertia + React

A full-stack asset management application built with Laravel, Inertia.js, and React. Manage IT equipment, tickets, and locations with a modern dashboard interface.

---

## 🚀 Technologies

- **Laravel 13** — PHP framework, API, routing, authentication
- **Inertia.js** — Bridge between Laravel and React (no separate API needed)
- **React 19** — Frontend UI components
- **Tailwind CSS v4** — Styling
- **Vite 5** — Frontend build tool
- **MySQL** — Database
- **Laravel Sanctum** — API authentication

---

## ✅ Features

- 🔐 Authentication with Laravel Sanctum (register, login, logout)
- 🖥️ Equipment management (CRUD)
- 🎫 Ticket management (CRUD)
- 📍 Location management
- 📊 Dashboard with statistics (total, active, maintenance)
- 🎨 Status badges (active, inactive, maintenance)
- 🗑️ Confirmation modal for deletions
- 🧭 Navigation between pages

---

## 🏗️ Project Structure

```
/
├── app/Http/Controllers/
│   ├── AuthController.php       # Register, login, logout
│   ├── CategoryController.php   # Categories API
│   ├── EquipmentController.php  # Equipment CRUD
│   ├── LocationController.php   # Locations
│   └── TicketController.php     # Tickets CRUD
├── resources/js/Pages/
│   ├── Equipments.jsx           # Equipment dashboard
│   ├── EquipmentCreate.jsx      # Create equipment form
│   ├── EquipmentEdit.jsx        # Edit equipment form
│   ├── Tickets.jsx              # Tickets list
│   ├── TicketCreate.jsx         # Create ticket form
│   ├── TicketEdit.jsx           # Edit ticket form
│   ├── Locations.jsx            # Locations list
│   └── Layout.jsx               # Navigation layout
├── database/
│   ├── migrations/              # Database schema
│   └── seeders/                 # Test data
└── routes/
    ├── web.php                  # Inertia routes
    └── api.php                  # API routes (Sanctum protected)
```

---

## 🧠 Technical Highlights

### Inertia.js — The Bridge
Inertia connects Laravel controllers directly to React components without building a separate API. Controllers return `Inertia::render()` instead of JSON:

```php
public function index()
{
    return Inertia::render('Equipments', [
        'equipments' => Equipment::with('category')->get()
    ]);
}
```

### Sanctum Authentication
API routes are protected by Sanctum middleware:

```php
Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('equipments', EquipmentController::class);
    Route::apiResource('tickets', TicketController::class);
});
```

### Form State with React Hooks
Forms use `useState` to manage local state before sending to Laravel:

```jsx
const [form, setForm] = useState({ name: '', status: 'active' })
router.post('/equipments', form)
```

---

## 🗄️ Database Schema

| Table | Description |
|-------|-------------|
| users | Authenticated users |
| categories | Equipment categories |
| locations | Physical locations (building, room) |
| equipments | IT assets (laptop, server...) |
| tickets | Support tickets linked to equipment |
| personal_access_tokens | Sanctum tokens |

---

## ⚙️ Installation

```bash
git clone https://github.com/debeaune/asset-management
cd asset-management/src
composer install
npm install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
npm run build
php artisan serve
```

---

*Built by Marie Laure Debeaune*
