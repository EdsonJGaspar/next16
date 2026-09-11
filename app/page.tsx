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
            <div>imagem</div>
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
