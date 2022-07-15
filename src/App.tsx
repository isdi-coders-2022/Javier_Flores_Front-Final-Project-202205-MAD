import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ChecklistPage } from './pages/checklistPage';
import { LoginPage } from './pages/loginPage';
import { RegisterPage } from './pages/registerPage';
import { SuitcaseCreator } from './pages/suitcaseCreatorPage';

function App() {
    const options = [
        { path: '', label: 'Home', page: <LoginPage></LoginPage> },
        {
            path: '/register',
            label: 'Register',
            page: <RegisterPage></RegisterPage>,
        },
        {
            path: '/newSuitcase',
            label: 'New Suitcase',
            page: <SuitcaseCreator></SuitcaseCreator>,
        },
        {
            path: '/checklist',
            label: 'Checklist',
            page: <ChecklistPage></ChecklistPage>,
        },
    ];
    return (
        <React.Suspense>
            <Routes>
                {options.map((item) => (
                    <Route
                        key={item.label}
                        path={item.path}
                        element={item.page}
                    ></Route>
                ))}
            </Routes>
        </React.Suspense>
    );
}
export default App;
