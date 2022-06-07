import { Routes, Route } from 'react-router-dom';
import { HomePage, AboutPage, NotFoundPage } from '../pages'

export default function AppRouter() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    )
};