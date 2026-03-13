"use client";

import { useEffect, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

const faqItems = [
  {
    id: 'item-1',
    question: '¿Que es RALQ y como funciona?',
    answer: 'RALQ es una plataforma educativa que utiliza realidad aumentada y modelos 3D interactivos para transformar el aprendizaje de quimica.',
  },
  {
    id: 'item-2',
    question: '¿Necesito algun dispositivo especial para usar RALQ?',
    answer: 'No, solo necesitas un smartphone o tablet con camara.',
  },
  {
    id: 'item-3',
    question: '¿Es gratuito usar la plataforma?',
    answer: 'RALQ ofrece acceso gratuito a funciones basicas.',
  },
  {
    id: 'item-4',
    question: '¿Puedo usar RALQ sin conexion a internet?',
    answer: 'Si, una vez descargados los modelos 3D puedes explorarlos sin conexion.',
  },
  {
    id: 'item-5',
    question: '¿RALQ es adecuado para todos los niveles educativos?',
    answer: 'Si, esta disenado para secundaria hasta universidad.',
  },
]

export default function FAQs() {

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="bg-background @container py-30">
      <div className="mx-auto max-w-8xl px-12">
        <div className="@xl:flex-row @xl:items-start @xl:gap-15 flex flex-col gap-8">

          {/* LADO IZQUIERDO */}
          <div className="py-7 @xl:sticky @xl:top-24 @xl:w-75 shrink-0">

            <h2 className="font-semibold text-5xl font-medium">
              Preguntas Frecuentes
            </h2>

            <p className="text-muted-foreground @xl:block mt-2 hidden text-base">
              ¿Necesitas mas ayuda?{" "}
              <Link href="#" className="text-primary font-medium hover:underline">
                Contactanos
              </Link>
            </p>

          </div>

          {/* LADO DERECHO */}
          <div className="flex-1">

            <Accordion type="single" collapsible>

              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-dashed"
                >

                  <AccordionTrigger className="cursor-pointer py-8 text-base font-medium hover:no-underline">
                    {item.question}
                  </AccordionTrigger>

                  <AccordionContent>
                    <p className="text-muted-foreground pb-2 text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </AccordionContent>

                </AccordionItem>
              ))}

            </Accordion>

            <p className="text-muted-foreground @xl:hidden mt-6 text-base">
              ¿Necesitas mas ayuda?{" "}
              <Link href="#" className="text-primary font-medium hover:underline">
                Contactanos
              </Link>
            </p>

          </div>

        </div>
      </div>
    </section>
  )
}