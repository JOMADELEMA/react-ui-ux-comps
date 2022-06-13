import { Routes, Route } from 'react-router-dom';
import { HomePage, AboutPage, NotFoundPage, Dashboard, Tarjetas } from '../pages'

export default function AppRouter() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/tarjetas" element={<Tarjetas />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    )
};