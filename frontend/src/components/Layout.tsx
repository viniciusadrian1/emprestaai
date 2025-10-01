import { NavLink, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, User, LogIn } from "lucide-react";
import logo from "@/assets/logo.png";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <NavLink to="/" className="flex items-center">
              <img src={logo} alt="EmprestaAí" className="h-20" />
            </NavLink>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <NavLink
                to="/emprestar"
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-4 py-2 rounded-lg transition-smooth ${
                    isActive 
                      ? "bg-primary text-primary-foreground" 
                      : "hover:bg-accent text-foreground"
                  }`
                }
              >
                <TrendingUp className="h-4 w-4" />
                <span>Quero Emprestar</span>
              </NavLink>
              
              <NavLink
                to="/receber"
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-4 py-2 rounded-lg transition-smooth ${
                    isActive 
                      ? "bg-secondary text-secondary-foreground" 
                      : "hover:bg-accent text-foreground"
                  }`
                }
              >
                <TrendingDown className="h-4 w-4" />
                <span>Quero Receber</span>
              </NavLink>
            </nav>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" asChild>
                <NavLink to="/login">
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </NavLink>
              </Button>
              <Button size="sm" asChild>
                <NavLink to="/cadastro">
                  <User className="h-4 w-4 mr-2" />
                  Cadastrar
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-muted border-t mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">
            © 2024 EmprestaAí. Empréstimos peer-to-peer seguros e confiáveis.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;