import "../CSS/styles.css";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <header>
        <h1>My projects</h1>
      </header>
      <main className="project-container">{children}</main>
      <footer>
        <small>Copyright Ⓒ 2023 Jorgen. All Rights Reserved</small>
      </footer>
    </div>
  );
}
