import React, { useState, useEffect } from 'react';
import api from './services/api'

import {
  GlobalStyle, 
  Container,
  Title,
  Table,
  ButtonUpdate,
  ButtonDelete,
  BookForm
} from './styles'
import { Edit, Trash2, } from 'react-feather'


function App() {
  const [books, setBooks] = useState([])
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [price, setPrice] = useState('')
  const [launch, setLaunch] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    const data = {
      title,
      author,
      price,
      launch
    }
    try {
      const response = await api.post('books', data)
    } catch (err) {
        alert(`Erro no cadastro tente novamente`)
    }
  }

  async function handleDeleteBook(id) {
    try {
      await api.delete(`books/${id}`)
    } catch(e) {
      console.log(e)
    }
  }

  useEffect(() => {
    api.get('books')
      .then(response => {
        setBooks(response.data)
      })
  }, [books])

  return (
      <Container>
        <GlobalStyle blackColor/>
        <Title>Book Controller 📚</Title>
        <Table>
          <tr>
            <th>Sku</th>
            <th>Título</th>
            <th>Autor</th> 
            <th>Lançamento</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
          {books.map(book => (
            <tr>
              <td>{book.sku}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.launch.slice(0, 10)}</td>
              <td>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(parseFloat(book.price))}</td>
              <td>
                <ButtonUpdate>
                  <Edit size={20}/>
                </ButtonUpdate>
                <ButtonDelete onClick={() => handleDeleteBook(book._id)}>
                  <Trash2 size={20}/>
                </ButtonDelete>
              </td>
          </tr>
          ))}
        </Table>
        <BookForm onSubmit={handleSubmit}>
            Adicionar novo livro
            <div>
              <input 
                type="text" 
                placeholder="Título do livro"
                required
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
              <input 
                type="text" 
                placeholder="Autor do livro"
                required 
                value={author}
                onChange={e => setAuthor(e.target.value)} 
              />
              <input 
                type="text" 
                placeholder="Preço do livro"
                required
                value={price}
                onChange={e => setPrice(e.target.value)}  
              />
              <input 
                type="date" 
                value={launch}
                onChange={e => setLaunch(e.target.value)}
              />
              <button>Adicionar</button>
            </div>
        </BookForm>
      </Container>
  );
}

export default App;
