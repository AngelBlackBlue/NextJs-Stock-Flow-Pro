import { KeyRound } from "lucide-react";


const page = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
        {/* <div className="w-96 h-96 rounded-md border p-5 flex justify-center bg-slate-900"> */}
        <div className="w-96 h-96 rounded-md border p-5 flex justify-center">
          <KeyRound />
          <h1 className="text-2xl font-bold"> 
            Sign in to your account 😎
          </h1>
        </div>
        <div className="glowBox -z-10"></div>
    </div>
  );
}

export default page