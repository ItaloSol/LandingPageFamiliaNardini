"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Scale, 
  Heart,
  MessageCircle,
  Users,
  Home,
  ScrollText,
  BadgeAlert,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ReactNode } from "react";

interface PracticeAreaItem {
  title: string;
  description: string;
  icon: ReactNode;
  details: string[];
}

interface PracticeAreaProps {
  title: string;
  description: string;
  items: PracticeAreaItem[];
  animationDelay?: number;
}

const familyLawItems = [
  {
    title: "Divórcio e Dissolução de União Estável",
    description: "Assessoria completa em processos de separação e divórcio.",
    icon: <Heart className="h-5 w-5 text-secondary" />,
    details: [
      "Divórcio consensual e litigioso",
      "Dissolução de união estável",
      "Partilha de bens",
      "Reconhecimento e dissolução de união homoafetiva",
      "Acordos extrajudiciais"
    ]
  },
  {
    title: "Guarda e Pensão Alimentícia",
    description: "Proteção aos direitos e interesses dos filhos em questões familiares",
    icon: <Users className="h-5 w-5 text-secondary" />,
    details: [
      "Definição de guarda compartilhada ou unilateral",
      "Regulamentação de visitas",
      "Fixação de pensão alimentícia",
      "Revisão de valores",
      "Execução de alimentos"
    ]
  },
  {
    title: "Inventário e Sucessões",
    description: "Gestão completa de processos sucessórios e heranças.",
    icon: <ScrollText className="h-5 w-5 text-secondary" />,
    details: [
      "Inventário judicial e extrajudicial",
      "Testamentos e planejamento sucessório",
      "Partilha de bens",
      "Regularização de herança",
      "Disputas entre herdeiros"
    ]
  }
];

function PracticeArea({ title, description, items, animationDelay = 0 }: PracticeAreaProps) {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const { ref: areaRef, isVisible: areaIsVisible } = useScrollReveal();

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div 
      ref={areaRef as React.RefObject<HTMLDivElement>}
      className={`scroll-reveal ${areaIsVisible ? 'visible' : ''}`}
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <Card className="h-full p-4 md:p-8 bg-gradient-to-br from-white to-primary-light/10 animate-fade-in max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="text-primary mb-6">
            <BadgeAlert size={32} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">{title}</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {items.map((item: PracticeAreaItem, index: number) => (
            <Card 
              key={item.title}
              className="p-6 hover-scale animate-fade-in overflow-hidden"
              style={{ animationDelay: `${(index + 2) * 0.1}s` }}
            >
              <button 
                onClick={() => toggleCard(index)}
                className="w-full text-left"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-primary">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 mt-1">
                    {expandedCard === index ? (
                      <ChevronUp className="h-5 w-5 text-primary" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-primary" />
                    )}
                  </div>
                </div>
              </button>
              
              <div 
                className={`mt-4 transition-all duration-300 ease-in-out overflow-hidden ${
                  expandedCard === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <ul className="space-y-2 pt-4 border-t border-gray-200">
                  {item.details.map((detail: string, idx: number) => (
                    <li 
                      key={idx}
                      className="flex items-center text-gray-600"
                    >
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 flex-shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
}

export function PracticeAreasSection() {
  const { ref: sectionRef, isVisible: sectionIsVisible } = useScrollReveal();
  
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá, vim pelo site e gostaria de falar com um advogado especialista em Direito de Família. Pode me ajudar?"
    );
    window.open(`https://wa.me/5517997720489?text=${message}`, "_blank");
  };

  return (
    <section className="py-16 bg-white">
      <div 
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        className={`container mx-auto px-4 scroll-reveal ${sectionIsVisible ? 'visible' : ''}`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4 animate-fade-in">
            Áreas de Atuação
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Especializado em defender seus direitos nas questões familiares e sucessórias, oferecendo suporte jurídico completo com sensibilidade e experiência.
          </p>

          <PracticeArea
            title="Direito de Família e Sucessões"
            description="Atendimento especializado em todas as questões relacionadas ao Direito de Família e Sucessões, desde acordos amigáveis até processos mais complexos."
            items={familyLawItems}
            animationDelay={0.2}
          />

          <div className="text-center mt-12 animate-fade-in px-4" style={{ animationDelay: "0.4s" }}>
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="w-full md:w-auto bg-primary hover:bg-primary-dark text-white hover-scale text-sm md:text-base py-6 md:py-4"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              <span className="block md:hidden">Consulte um Especialista</span>
              <span className="hidden md:block">Consulte um Especialista em Direito de Família</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}