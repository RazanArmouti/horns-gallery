import React, { Component } from 'react'
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import SelectedBeast from './Components/SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';
import dataList from './Components/data.json';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      imageUrl: "",
      title: "",
      description: "",
      keyword: "",
      horns: ""

    }

  }
  handleClose = () => {
    this.setState({
      showModal: false
    })
  }

    handleOpen = (imageUrl, title,description,keyword,horns) => {
      this.setState({
        showModal: true,
        imageUrl:imageUrl,
        title:title,
        description:description,
        keyword:keyword,
        horns:horns

      })
    }
    render() {
      return (
        <>
          <Header />
          <Main dataList={dataList} handleOpen={this.handleOpen} />
          <SelectedBeast handleClose={this.handleClose} 
                         showModal={this.state.showModal} 
                         imageUrl={this.state.imageUrl} 
                         title={this.state.title} 
                         description={this.state.description} 
                         keyword={this.state.keyword} 
                         horns={this.state.horns} />;
          <Footer />
        </>
      )
    }
  
  }
export default App


