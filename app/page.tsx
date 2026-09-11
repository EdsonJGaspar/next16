import { InvoiceStatus } from "@/components/web/invoice-status";
import styles from "../components/web/ui/home.module.css";
import { lusiana } from "@/components/web/ui/fonts";
import Image from "next/image";
import { Background } from "@/components/web/background";

export default function Home() {
  return (
    <Background>
      <main className="mx-auto max-w-5xl">
        <div className="absolute z-10 border">
          <div className="flex gap-5">
            <div>
              <h1 className="z-10 text-gray-950">Curso de Nextjs</h1>
              <p>Curso definitivo acompanhado de projecto</p>
              <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black" />
              <div className={styles.shape}></div>
              <InvoiceStatus status="pendente" />
              <p
                className={`${lusiana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
              >
                Font Lusitana
              </p>
            </div>
            <div>
              <Image
                src={
                  "https://images.unsplash.com/photo-1789007793855-7ba74161eb4b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="Imagem Unplass"
                width={300}
                height={500}
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <Image
              src="/images/pexels-descktop.jpg"
              alt="Desktop"
              width={1000}
              height={760}
              className="hidden md:block max-w-full h-auto"
            />
            <Image
              src="/images/pexels-mobile.jpg"
              alt="Desktop"
              width={560}
              height={620}
              className="md:hidden"
            />
          </div>
        </div>
      </main>
    </Background>
  );
}
