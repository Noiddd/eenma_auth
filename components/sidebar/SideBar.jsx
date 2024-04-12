import { auth } from "@/auth";
import Navigation from "./Navigation";
import Profile from "./Profile";

export default async function Sidebar() {
  const session = await auth();
  console.log(session);

  return (
    <div className="flex flex-col fixed justify-between items-center sm:w-[110px] h-[55%] bg-backgrounda transition-all ease-in-out duration-100">
      {session?.user && (
        <>
          <Profile userSession={session.user} />
          <Navigation />
        </>
      )}
    </div>
  );
}
