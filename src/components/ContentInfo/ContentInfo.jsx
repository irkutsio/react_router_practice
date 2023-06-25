import { Component } from 'react';
import { getNews } from 'services/getNews';
import { Audio } from 'react-loader-spinner';

export class ContentInfo extends Component {
  state = {
    news: null,
    isLoading: false,
    error: '',
  };
  componentDidUpdate(prevProps) {
    if (prevProps.searchText !== this.props.searchText) {
      this.setState({ isLoading: true });
      getNews(this.props.searchText)
        .then(response => response.json())
        .then(data => {
          if (data.status === 'ok') {
            this.setState({ news: data.articles });
          } else return Promise.reject(data.message);
        })
        .catch(error => {
          this.setState({ error });
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }
  render() {
    return (
      <>
        {this.state.isLoading && (
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        )}
        <ul>
          {this.state.news &&
            this.state.news.map(el => {
              return <li key={el.url}>{el.title}</li>;
            })}
        </ul>
      </>
    );
  }
}
