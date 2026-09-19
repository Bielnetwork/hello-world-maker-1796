import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({ component: Page });

const photos = [
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
  "https://images.unsplash.com/photo-1596464716127-f2a82984de30",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7",
  "https://images.unsplash.com/photo-1497633762265-9d179a990aa6",
  "https://images.unsplash.com/photo-1516627145497-ae6968895b74",
];
const names = ["Letras e sons", "Coordenação motora", "Palavras", "Leitura", "Formas e cores"];

function Page() {
  const [seconds, setSeconds] = useState(900);
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setSeconds((value) => (value ? value - 1 : 900)), 1000);
    return () => window.clearInterval(id);
  }, []);
  const time = `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
  return (
    <main className="bg-[#fffaf2] text-[#1e4051]">
      <div className="bg-[#1e4051] p-3 text-center text-xs font-bold tracking-widest text-white">OFERTA ESPECIAL · ACESSO DIGITAL IMEDIATO</div>
      <section className="px-5 py-16 md:py-24"><div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <div><b className="text-xs tracking-widest text-[#d8703e]">MATERIAL PEDAGÓGICO DIGITAL</b><h1 className="mt-4 font-serif text-5xl font-bold leading-tight md:text-6xl">O caminho mais leve para a criança se aproximar das letras.</h1><p className="my-6 text-lg leading-relaxed text-slate-600">Caminho das Letras reúne atividades visuais, prontas para imprimir e aplicar no ritmo da criança.</p><p className="mb-6 text-sm">✓ organizado por habilidades　✓ pronto para imprimir　✓ acesso vitalício</p><a className="rounded bg-[#e37a41] px-6 py-4 text-sm font-bold text-white" href="#ofertas">QUERO VER AS OFERTAS →</a></div>
        <img className="h-[440px] w-full rounded-[100px_8px_100px_8px] object-cover shadow-[15px_15px_0_#d6e0d4]" src={photos[0]} alt="Criança aprendendo com atividades educativas" />
      </div></section>
      <section className="bg-[#edf4ee] px-5 py-16"><div className="mx-auto max-w-6xl text-center"><b className="text-xs tracking-widest text-[#d8703e]">O QUE VOCÊ VAI RECEBER</b><h2 className="mt-4 font-serif text-4xl font-bold">Atividades para acompanhar os primeiros passos com as letras.</h2><div className="mt-8 grid gap-4 text-left md:grid-cols-3">{[["Letras e sons", "Propostas visuais para reconhecer e associar."], ["Traçados e palavras", "Exercícios para praticar com leveza."], ["Uso simples", "Acesse, imprima e aplique quando quiser."]].map((item) => <article className="border-t-4 border-[#f1bd56] bg-white p-6" key={item[0]}><h3 className="font-serif text-2xl font-bold">{item[0]}</h3><p className="mt-3 text-sm text-slate-600">{item[1]}</p></article>)}</div></div></section>
      <section className="px-5 py-16"><div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2"><div><b className="text-xs tracking-widest text-[#d8703e]">POR QUE ESCOLHER?</b><h2 className="mt-4 font-serif text-4xl font-bold">Mais clareza para orientar. Mais autonomia para praticar.</h2><p className="mt-5 leading-relaxed text-slate-600">Em vez de procurar materiais soltos, você terá um ponto de partida visual para criar uma rotina de aprendizado.</p></div><div className="grid gap-3">{["Economiza tempo", "Ajuda a criar consistência", "Torna o aprendizado mais visual"].map((item) => <p className="border bg-white p-5 font-bold" key={item}>✦　{item}<small className="block pl-6 pt-1 font-normal text-slate-500">Atividades reunidas em um único lugar.</small></p>)}</div></div></section>
      <section className="bg-[#e4a54d] px-5 py-16" id="ofertas"><div className="mx-auto max-w-6xl text-center"><b className="text-xs tracking-widest">CONDIÇÃO ESPECIAL DE HOJE</b><h2 className="mt-4 font-serif text-4xl font-bold">Escolha o acesso ideal para a sua rotina.</h2><div className="my-7 text-4xl font-bold">{time}</div><div className="grid gap-5 text-left md:grid-cols-2"><Offer title="CAMINHO ESSENCIAL" price="9,90" items={["Atividades essenciais", "Acesso digital", "Garantia de 7 dias"]}/><Offer title="CAMINHO COMPLETO" price="27,90" featured items={["Kit completo de atividades", "Materiais bônus", "Acesso vitalício", "Garantia de 7 dias"]}/></div><em className="mt-5 block text-xs">Os links de checkout serão incluídos antes da publicação.</em></div></section>
      <section className="px-5 py-16"><div className="mx-auto max-w-5xl text-center"><b className="text-xs tracking-widest text-[#d8703e]">EXEMPLOS DO MATERIAL</b><h2 className="my-4 font-serif text-4xl font-bold">Veja alguns formatos que a criança vai encontrar.</h2><div className="flex items-center gap-3"><button className="rounded-full bg-[#1e4051] p-3 text-white" onClick={() => setSlide((slide + 4) % 5)}>←</button><figure className="relative h-80 flex-1 overflow-hidden"><img className="h-full w-full object-cover" src={photos[slide]} alt={names[slide]} /><figcaption className="absolute inset-x-0 bottom-0 bg-slate-900/80 p-4 text-left text-xl text-white">{names[slide]}</figcaption></figure><button className="rounded-full bg-[#1e4051] p-3 text-white" onClick={() => setSlide((slide + 1) % 5)}>→</button></div></div></section>
      <section className="bg-[#edf4ee] px-5 py-16"><div className="mx-auto max-w-6xl text-center"><b className="text-xs tracking-widest text-[#d8703e]">EXPERIÊNCIAS REAIS</b><h2 className="my-4 font-serif text-4xl font-bold">Depoimentos reais serão incluídos aqui.</h2><div className="grid gap-4 text-left md:grid-cols-3">{[1, 2, 3].map((item) => <article className="bg-white p-6" key={item}><b className="text-5xl text-[#e2a744]">“</b><p className="my-4 text-sm text-slate-600">Área reservada para um depoimento real e autorizado de cliente.</p><footer className="border-t pt-3 text-xs">Depoimento verificado #{item}</footer></article>)}</div></div></section>
      <section className="bg-[#1e4051] px-5 py-16 text-white"><div className="mx-auto flex max-w-4xl items-center gap-6"><b className="grid h-24 w-24 shrink-0 place-items-center rounded-full border-2 border-[#f2c85d] text-center font-serif text-5xl text-[#f2c85d]">7<small className="font-sans text-xs">DIAS</small></b><div><b className="text-xs tracking-widest text-[#f2c85d]">GARANTIA INCONDICIONAL</b><h2 className="mt-3 font-serif text-4xl font-bold">Você tem 7 dias para avaliar sua compra.</h2><p className="mt-3 text-slate-200">Se não fizer sentido, solicite o reembolso dentro do prazo.</p></div></div></section>
      <footer className="bg-[#173540] p-7 text-center text-sm text-slate-300">Caminho das Letras · Material pedagógico digital · © {new Date().getFullYear()}</footer>
    </main>
  );
}

function Offer({ title, price, items, featured = false }: { title: string; price: string; items: string[]; featured?: boolean }) {
  return <article className={`bg-[#fffaf2] p-7 shadow-[9px_9px_0_#bd8132] ${featured ? "border-4 border-[#1e4051]" : ""}`}><b className="text-xs tracking-widest text-[#d66f3e]">{title}</b><p className="my-3 text-5xl font-bold text-[#df713d]">R$ {price}</p><ul className="space-y-2 text-sm">{items.map((item) => <li key={item}>✓ {item}</li>)}</ul><a className="mt-6 block bg-[#1e4051] p-4 text-center text-sm font-bold text-white" href="#ofertas">QUERO ESTE ACESSO →</a></article>;
}
