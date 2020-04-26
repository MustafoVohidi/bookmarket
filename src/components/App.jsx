import React, { Component } from 'react';
import { Container, Card } from 'semantic-ui-react';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';
import { Menu } from 'semantic-ui-react';
import BookCard from './BookCard';
import Filter from '../containers/Filter';


class App extends Component {

  componentWillMount() {
    const { setBooks } = this.props;
    axios.get('/books.json').then(({ data }) => {
      setBooks(data);
    });
  }

  render() {
    const { books, isReady } = this.props;
    return (
      <Container>
        <Menu>
          <Menu.Item name='browse' onClick={this.handleItemClick}>
            Магазин Книг
        </Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item name='signup' onClick={this.handleItemClick}>
              Итого: &nbsp; <b>0</b> руб.
    </Menu.Item>


            <Menu.Item name='help' onClick={this.handleItemClick}  >
              Корзина (<b>0</b>)
     </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Filter/>
        <Card.Group itemsPerRow={4}>

          {!isReady
            ? 'Загрузка...'
            : books.map((book,i) =>
              <BookCard key={i} {...book} />
            )
          }
         </Card.Group>

      </Container>
    );
  }
}


export default App;
