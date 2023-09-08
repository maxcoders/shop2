import "../../s.css";
import Nav from "./Nav";
export const metadata = {
  title: "Only maxcoder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="fr pr wh-screen oh">
          <Nav />
          <main
            className="p10 g10 fc"
            style={{ height: "100%", overflow: "auto" }}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
