'use client';

import ListaNotas from '@/InterfaceListaNotas';
import Header from '@/components/organisms/Header/Header'
import ListaDeNotas from '@/components/organisms/ListaNotas/ListaNotas';
import ModalAdd from '@/components/organisms/ModalAdd/ModalAdd';
import { Variant } from '@/getVariantutils';
import React, { ChangeEvent, FormEvent, useState } from 'react'

export default function Home() {

  const [listaNotas, setlistaNotas] = useState<ListaNotas[]>([
    {
      id: 1,
      title: "mercado",
      notes: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker includin",
      variant: "sem-cor"
    },
    {
      id: 2,
      title: "prova",
      notes: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      variant: "azul"
    },
    {
      id: 3,
      title: "trabalho",
      notes: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when ",
      variant: "vermelho"
    },
    {
      id: 4,
      title: "receita",
      notes: "Peço desculpas pelo mal-entendido. Se você deseja que o texto seja truncado na vertical (em relação à altura da div) e não na horizontal, você pode usar a classe line-clamp-{n} do Tailwind CSS, onde {n} é",
      variant: "amarelo"
    },
    {
      id: 5,
      title: "lista de tarefa",
      notes: "ajskjaskjaksjkasjka",
      variant: "roxo"
    }
  ])

  const [variant, setVariant] = useState<Variant>()
  //valores do input com base no option
  const [selectedOption, setSelectedOption] = useState("");
  //valores das notas filtradas 
  const [filteredNotes, setFilteredNotes] = useState(listaNotas)



  //função para adicionar notas
  const handleAddNotes = (event: FormEvent<HTMLFormElement>, variant: Variant) => {
    event.preventDefault();

    //pelo evento pegando os valores do input e textArea
    const title = (event.currentTarget.elements[0] as HTMLInputElement).value;
    const notes = (event.currentTarget.elements[1] as HTMLTextAreaElement).value;

    //criando uma nota nova com suas propriedades
    const newNote = {
      id: listaNotas.length + 1,
      title: title == "" ? "undefined" : title,
      notes: notes,
      variant: variant as Variant
    };

    //adicionando a nota as outras

    setlistaNotas([newNote, ...listaNotas]);
    setFilteredNotes([newNote, ...listaNotas])
  }


  //função para filtrar as notas com base na barra de pesquisa do input 
  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event)
    setSelectedOption(event.target.value);

    const filterNotes = listaNotas.filter((note) => {
      return note.title.toLowerCase().includes(event.target.value.toLowerCase());
    });

    setFilteredNotes(filterNotes)
  };

  return (
    <>
      <body className="h-full bg-[url('/fundoCortiço.avif')]">
        <Header
          listaNotas={filteredNotes}
          handleOptionChange={handleOptionChange}
          selectedOption={selectedOption}
        />
        <section className='flex mt-5 '>
          <ModalAdd variant={variant} setVariant={setVariant} functionAddnotes={handleAddNotes} />
          <ListaDeNotas listaNotas={filteredNotes} setFilteredNotes={setFilteredNotes} />
        </section>
      </body>
    </>
  )

}
