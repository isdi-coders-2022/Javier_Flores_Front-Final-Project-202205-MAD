import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import './App.css';
import { aMenuItems } from './interfaces/interfaces';
import { ChecklistPage } from './pages/checklistPage';
import { LoginPage } from './pages/loginPage';

function App() {
    return (
        <>
            <ChecklistPage></ChecklistPage>
            <LoginPage></LoginPage>
        </>
    );
}

export default App;

// const LoginPage = React.lazy(() => import('./pages/loginPage'));
// const RegisterPage = React.lazy(() => import('./pages/registerPage'));
// const SuitcaseCreatorPage = React.lazy(
//     () => import('./pages/suitcaseCreatorPage')
// );
// const UserPage = React.lazy(() => import('./pages/userPage'));
// const ChecklistPage = React.lazy(() => import('./pages/checklistPage'));

// const options: aMenuItems = [
//     { path: '/Login', label: 'Login', page: <LoginPage></LoginPage> },
//     {
//         path: '/Register',
//         label: 'Register',
//         page: <RegisterPage></RegisterPage>,
//     },
//     { path: '/User', label: 'User', page: <UserPage></UserPage> },
//     {
//         path: '/Creator',
//         label: 'Creator',
//         page: <SuitcaseCreatorPage></SuitcaseCreatorPage>,
//     },
//     {
//         path: '/Checklist',
//         label: 'Checklist',
//         page: <ChecklistPage></ChecklistPage>,
//     },
// ];
// return (
//     <Router>
//         <React.Suspense>
//             <Routes>
//                 {options.map((item) => (
//                     <Route
//                         key={item.label}
//                         path={item.path}
//                         element={item.page}
//                     ></Route>
//                 ))}
//             </Routes>
//         </React.Suspense>
//     </Router>
// );
