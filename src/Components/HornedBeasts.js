import React, { Component } from 'react'
import '../Components/Style.css';
import { Col,Button } from 'react-bootstrap'

class HornedBeasts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0
        }
    }
    favClicks = () => {
        this.setState({
            clicks: this.state.clicks + 1
        })
    }
    getHandleOpen = () => {
        let imageUrl = this.props.imageUrl;
        let title = this.props.title;
        let description = this.props.description;
        let keyword = this.props.keyword;
        let horns = this.props.horns;
        this.props.handleOpen(imageUrl, title, description, keyword, horns);
        this.favClicks();
    }

    render() {
        return (

            <Col>
                <section>
                    <h2> Title:{this.props.title} </h2>
                    {/* this.favClicks */}
                    <img onClick={this.getHandleOpen} src={`${this.props.imageUrl}`} alt={this.props.horns} title={this.props.keyword} className='photo'></img>
                    <div id="ClicksDiv">
                        <img src="https://stemflorida.net/wp-content/uploads/2019/08/Buy-TikTok-Hearts.jpg" alt="Fav" className='favIcon'></img>
                        <h4>{this.state.clicks}</h4>
                        {/* <Button onClick={this.getHandleOpen} variant="primary"> Pick Me </Button> */}
                    </div>
                    <p> Description:{this.props.description} </p>
                   
                </section>
            </Col>

        )
    }
}

export default HornedBeasts
