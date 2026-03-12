import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {AppLayout} from '@/app/layouts';
import Login from '@/pages/login'
import Dashboard from '@/pages/dashboard';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Публичные страницы без layout */}
                <Route path="/login" element={<Login />} />

                {/* Все защищённые страницы — с общим layout */}
                <Route element={<AppLayout />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/monitor" element={<Dashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;