import OAuthButtons from "./OAuthButtons";

const LoginPage = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center font-sans gap-8">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 bg-[url(/backgrounds/auth.jpeg)]"
      >
        <div className="blur-sm absolute top-0 left-0 w-full h-full bg-black/5 z-0"></div>
      </div>


      <div className="relative w-full max-w-md p-8 space-y-6 bg-white/30 backdrop-blur-md rounded-xl shadow-lg z-30">

        <div className="flex flex-col gap-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight">{`Curate & Critique`}</h1>
          </div>



          <OAuthButtons />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
