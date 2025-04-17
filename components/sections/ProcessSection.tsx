"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export function ProcessSection() {
  const { ref: sectionRef, isVisible: sectionIsVisible } = useScrollReveal();

  return (
    <main className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row md:items-center md:gap-12">
      {/* Left side text and button */}
      <section className="flex flex-col items-center text-center gap-6 md:w-1/3 md:sticky md:top-1/3">
        <h2 className="text-lg font-semibold text-gray-900 leading-tight">
          Processo <span className="text-yellow-700 font-semibold">humanizado</span> de atendimento em questões familiares
        </h2>
        <button
          type="button"
          onClick={() => {
            const message = encodeURIComponent(
              "Olá, vim pelo site e gostaria de falar com o Dr. Sidnei Nardini sobre uma questão familiar. Pode me ajudar?"
            );
            window.open(`https://wa.me/5517997720489?text=${message}`, "_blank");
          }}
          className="flex items-center gap-2 bg-yellow-700 text-white text-sm font-semibold rounded-md px-4 py-2 hover:bg-yellow-800 transition-colors"
        >
          <i className="fas fa-comment-alt"></i>
          Fale conosco
        </button>
      </section>

      {/* Vertical timeline with steps */}
      <section className="flex flex-col md:w-2/3 relative">
        {/* Vertical line */}
        <div className="absolute top-6 left-6 md:left-10 h-full border-l border-gray-300"></div>

        {/* Step 1 */}
        <div className="flex items-start gap-6 mb-8 relative z-10">
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center shadow-sm">
              <i className="fas fa-check text-gray-900 text-lg"></i>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-5 max-w-xl w-full">
            <h3 className="font-semibold text-gray-900 mb-1">Primeiro Contato</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Entre em contato conosco para uma conversa inicial onde entenderemos sua situação familiar e forneceremos as primeiras orientações jurídicas, sempre com empatia e confidencialidade.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-start gap-6 mb-8 relative z-10">
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center shadow-sm">
              <i className="fas fa-check text-gray-900 text-lg"></i>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-5 max-w-xl w-full">
            <h3 className="font-semibold text-gray-900 mb-1">Análise Detalhada</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Realizamos uma análise aprofundada do seu caso, avaliando documentos, histórico familiar e aspectos legais envolvidos. Apresentamos as possíveis estratégias e soluções para sua situação.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-start gap-6 mb-8 relative z-10">
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center shadow-sm">
              <i className="fas fa-check text-gray-900 text-lg"></i>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-5 max-w-xl w-full">
            <h3 className="font-semibold text-gray-900 mb-1">Planejamento e Documentação</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Desenvolvemos um plano de ação personalizado, preparamos toda a documentação necessária e explicamos detalhadamente cada etapa do processo, seja judicial ou extrajudicial.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex items-start gap-6 relative z-10">
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center shadow-sm">
              <i className="fas fa-check text-gray-900 text-lg"></i>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-5 max-w-xl w-full">
            <h3 className="font-semibold text-gray-900 mb-1">Acompanhamento Contínuo</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Mantemos você informado sobre cada desenvolvimento do seu processo, desde a distribuição até a conclusão. Oferecemos suporte constante para esclarecer dúvidas e orientar sobre as próximas etapas, sempre priorizando seus interesses e bem-estar familiar.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}