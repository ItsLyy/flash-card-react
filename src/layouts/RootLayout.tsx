import { Outlet } from "react-router";

function RootLayout() {
  return (
    <main className="mx-auto w-full max-w-[1000px] p-4">
      <Outlet />
    </main>
  );
}

export default RootLayout;
