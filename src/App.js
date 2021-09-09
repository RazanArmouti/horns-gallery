import React, { Component } from 'react'
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import SelectedBeast from './Components/SelectedBeast';
import HornsFilter from './Components/HornsFilter';
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
      horns: 0,
      flag:false,
      filterDataList:[]
    

    }

  }
  handleClose = () => {
    this.setState({
      showModal: false,
    
    })
  }

  handleOpen = (imageUrl, title, description, keyword, horns) => {
    this.setState({
      showModal: true,
      imageUrl: imageUrl,
      title: title,
      description: description,
      keyword: keyword,
      horns: horns,
     


    })
  }

  handleChange = (e, value) => {
    e.preventDefault();
    this.setState({
      horns: value,
      flag:true,
      
      filterDataList:dataList.filter(item => {
       
        for(let i=0; i<5;i++){
       
        if(parseInt(item.horns)===parseInt(value)){
         
          return item;
        }
        
      }
    //  console.log(filterArr);
     console.log(this.state.filterDataList);
    })
   
    })
    parseInt(value)==0?this.setState({flag:false}):this.setState({flag:true})
  }

  render() {
    return (
      <>
        <Header />
        <HornsFilter handleChange={this.handleChange} />
        {/* <p>{this.state.horns}</p> */}
                      
        <Main dataList={dataList} handleOpen={this.handleOpen} filterDataList={this.state.filterDataList} flag={this.state.flag}/> 

       <SelectedBeast handleClose={this.handleClose} 
                      showModal={this.state.showModal} 
                      imageUrl={this.state.imageUrl} 
                      title={this.state.title} 
                      description={this.state.description} 
                      keyword={this.state.keyword} 
                      horns={this.state.horns} />
        <Footer />
      </>
    )
  }

}
export default App


