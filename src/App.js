import './App.css';
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom'
import { Aboutpage } from './pages/Aboutpage';
import { Blogpage } from './pages/Blogpage';
import { Homepage } from './pages/Homepage';
import { Notfoundpage } from './pages/Notfoundpage';
import { Layout } from './components/Layout'
import { Singlepage } from './pages/Singlepage';
import { Createpage } from './pages/Createpage';
import { Editpost } from './pages/Editpost';
import { Loginpage } from './pages/Loginpage'
import { RequireAuth } from './hoc/RequireAuth'
import { AuthProvider } from './hoc/AuthProvider'



function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Homepage />} />
              <Route path="about/*" element={<Aboutpage />} >
                <Route path="contacts" element={<p>Our contact</p>} />
                <Route path="team" element={<p>Our team</p>} />
              </Route>
              <Route path="about-us" element={<Navigate to="/about" replace />} />
              <Route path="posts" element={<Blogpage />} />
              <Route path="posts/:id" element={<Singlepage />} />
              <Route path="posts/:id/edit" element={<Editpost />} />
              <Route path="posts/new" element={
                <RequireAuth>
                  <Createpage />
                </RequireAuth>

              } />
              <Route path="login" element={<Loginpage />} />
              <Route path="*" element={<Notfoundpage />} />
            </Route>

          </Routes>

        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
