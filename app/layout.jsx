import "@styles/globals.css";

export const metaData = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = () => {
  return (
    <html lang="eng">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
