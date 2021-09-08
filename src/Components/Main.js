import React, { Component } from 'react'
import HornedBeasts from '../Components/HornedBeasts'


class Main extends Component {
   render() {
      return (
      <div className="row">
        {
          this.props.dataList.map(element => {
            console.log(element.title);
            return <HornedBeasts handleOpen={this.props.handleOpen}
                                 title={element.title} 
                                 imageUrl={element.image_url}
                                 description={element.description} 
                                 keyword={element.keyword} 
                                 horns={element.horns}/>

          })

        }

      </div>




    )
  }
}

export default Main

