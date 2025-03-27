import Sidebar from "./components/sidebar/Sidebar";
import "@styles/globals.css";
import Header from "./components/header/Header";
import { GlobalProvider } from "./templates/GlobalContext";

export const metadata = {
  title: "Curly",
  description: "Curly next app",
  icons: "favicon.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GlobalProvider>
          <Header />
          <main className="relative bg-black/8 mt-17">
            <Sidebar />
            <div className="m-auto max-w-9/10 flex-1 p-10 overflow-auto max-sm:max-w-full">
              {children}
            </div>
          </main>
        </GlobalProvider>
      </body>
    </html>
  );
}
