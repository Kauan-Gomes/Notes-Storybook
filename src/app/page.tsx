'use client';

import ListaNotas from '@/InterfaceListaNotas';
import Header from '@/components/organisms/Header/Header'
import ListaDeNotas from '@/components/organisms/ListaNotas/ListaNotas';
import ModalAdd from '@/components/organisms/ModalAdd/ModalAdd';
import { Variant } from '@/getVariantutils';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'

export default function Home() {

  const NotesFromApi = async () => {
    try {
      const response = await fetch('http://localhost:3300/note/list');
      if (!response.ok) {
        throw new Error('Erro ao buscar notas da API');
      }
      const data = await response.json();
      const reversedData = data.reverse();
      1
      setlistaNotas(reversedData);
      setFilteredNotes(reversedData);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    NotesFromApi();
  }, []);



  const [listaNotas, setlistaNotas] = useState<ListaNotas[]>([])

  const [variant, setVariant] = useState<Variant>()
  //valores do input com base no option
  const [selectedOption, setSelectedOption] = useState("");
  //valores das notas filtradas 
  const [filteredNotes, setFilteredNotes] = useState(listaNotas)


  const addNoteToApi = async (newNote: Partial<Omit<ListaNotas, 'id'>>) => {
    try {
      const response = await fetch('http://localhost:3300/note', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newNote),
      });

      if (!response.ok) {
        throw new Error('Erro ao adicionar nota na API');
      }

      // Atualiza a lista de notas após a adição
      NotesFromApi();
    } catch (error) {
      console.error(error);
    }
  };


  //função para adicionar notas
  const handleAddNotes = async (event: FormEvent<HTMLFormElement>, variant: Variant) => {
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
    await addNoteToApi(newNote);

    const currentList = [...listaNotas];

    // Adiciona a nova nota no início da lista
    currentList.unshift(newNote);

    // Atualiza o estado com a nova ordem das notas
    setlistaNotas(currentList);
    setFilteredNotes(currentList);

  }

  console.log(listaNotas)
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
          <ListaDeNotas setListaNotas={setlistaNotas} filteredNotes={filteredNotes} setFilteredNotes={setFilteredNotes} />
        </section>
      </body>
    </>
  )

}
