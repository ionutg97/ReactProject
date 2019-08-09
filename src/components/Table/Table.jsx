import React from "react";
import './table.css';
import TableLine from '../TableLine';
import { getPosts, loadPostsAsync, deleteArticle } from '../actions';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

const randomDate = (start, end)=>
    {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

class Table extends React.Component {
    
    // componentDidMount() {
    //     this.props.getPosts();
    //     console.log("didMount "+this.props);
    //   }

    componentDidMount() {
        this.props.loadPostsAsync  ();
        console.log("didMount "+this.props);
      }

    // componentDidMount() {
    //     (() => {
    //         fetch('https://jsonplaceholder.typicode.com/posts')
    //             .then(response => response.json())
    //             .then(json => this.setState({ articles: json }))
    //     })();
    // }

    // randomDate(start, end) {
    //     return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    // }

    


    render() {
        console.log(this.props);
        console.log(randomDate(new Date(2012, 0, 1), new Date()));
        const {articles} = this.props;
        let fewArticles =articles.slice(0, 20);
        let articleLines = fewArticles.map(
            article => <TableLine
                key={article.id}
                id={article.id}
                name={article.title}
                deleteArticle={this.props.deleteArticle}
                //date={this.props.randomDate(new Date(2012, 0, 1), new Date())}
                date="09.08.2019"
            />);
        return (
            <table className="articles-table">
                <thead>
                    <tr>
                        <th>Article Name</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{articleLines}</tbody>
            </table>
        );
    }   
}

const mapStateToProps = state => ({
    articles: state.posts,
  })

  const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ getPosts, loadPostsAsync, deleteArticle }, dispatch),
  });

export default connect(mapStateToProps ,mapDispatchToProps)(Table);
