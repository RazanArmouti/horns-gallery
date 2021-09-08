import React, { Component } from 'react'
import HornedBeasts from '../Components/HornedBeasts'


class Main extends Component {
  render() {
    return (
      
      <div className="row">
        {
          
          this.props.flag === false ? this.props.dataList.map(element => {
              return <HornedBeasts handleOpen={this.props.handleOpen}
              title={element.title}
              imageUrl={element.image_url}
              description={element.description}
              keyword={element.keyword}
              horns={element.horns} />}) : this.props.filterDataList.map(element => {
                return <HornedBeasts handleOpen={this.props.handleOpen}
                title={element.title}
                imageUrl={element.image_url}
                description={element.description}
                keyword={element.keyword}
                horns={element.horns} />})


        }

      </div>

    )
  }
}

export default Main

