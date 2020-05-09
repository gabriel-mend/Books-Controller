import React from 'react';
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
          <tr>
            <td>auhsdgfyasbdf</td>
            <td>hasdgfyuasdf</td>
            <td>hasdgfyuasdf</td>
            <td>Germany</td>
            <td>Germany</td>
            <td>
              <ButtonUpdate>
                <Edit size={20}/>
              </ButtonUpdate>
              <ButtonDelete>
                <Trash2 size={20}/>
              </ButtonDelete>
            </td>
          </tr>
        </Table>
        <BookForm>
            Adicionar novo livro
            <div>
              <input 
                type="text" 
                placeholder="Título do livro"
                required 
              />
              <input 
                type="text" 
                placeholder="Autor do livro"
                required  
              />
              <input 
                type="text" 
                placeholder="Preço do livro"
                required  
              />
              <input 
                type="date" 
              />
              <button>Adicionar</button>
            </div>
        </BookForm>
      </Container>
  );
}

export default App;
