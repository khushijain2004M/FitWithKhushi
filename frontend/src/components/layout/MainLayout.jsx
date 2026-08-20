import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function MainLayout({ children }) {
  return (
    
    
    <div className="
  min-h-screen
  bg-gradient-to-br
  from-slate-50
  via-blue-50/30
  to-slate-100
  p-6
"
    >
  <div className="fixed inset-0 pointer-events-none opacity-[0.4]">
  <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-blue-200 rounded-full blur-[120px]" />
  <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-indigo-200 rounded-full blur-[140px]" />
</div>
      <div
        className="
        max-w-[1750px]
        mx-auto
        flex
        items-start
        gap-6
        "
      >
        <Sidebar />

        <main className="flex-1 min-w-0">
          <Navbar />

          <div className="mt-4">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
