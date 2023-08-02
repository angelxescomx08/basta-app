import { getSession, signIn } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { Balancer } from "react-wrap-balancer";
import { type GetServerSideProps } from "next";

export default function Home() {
  return (
    <>
      <Head>
        <title>Basta App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen bg-fondo">
        <div className="flex h-screen items-center justify-center">
          <form className="container flex items-center justify-center">
            <div className="flex aspect-square w-[500px] max-w-full flex-col items-center justify-center gap-10 rounded-2xl bg-gradient-to-br from-primario to-resaltar to-90% shadow-2xl shadow-primario">
              <div className="flex flex-col items-center justify-center">
                <h1 className="font-roboto text-[40px] font-bold leading-[60px] tracking-[-0.4px] text-negro">
                  Basta Online
                </h1>
                <p className="w-full text-xl leading-7 text-negro">
                  <Balancer>
                    Encuentra palabras únicas y <br /> desafía a otras personas.
                  </Balancer>
                </p>
              </div>
              <button
                onClick={() => signIn()}
                className="shadow-oscuro flex cursor-pointer items-center gap-3 rounded-xl bg-blanco px-6 py-3 shadow-md"
              >
                <Image
                  src={"/assets/imgs/icons/google.svg"}
                  width={20}
                  height={20}
                  alt=""
                />
                <p className="font-roboto font-medium">Iniciar sesión</p>
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  if (session) {
    return {
      redirect: {
        destination: "/home",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
