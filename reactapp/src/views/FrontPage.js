import React from "react";
import axios from "axios";

 
class FrontPage extends React.Component {
 

    constructor(props) {
        super(props);
        this.state = {
            datalist: []
        };
    }


    componentDidMount() {

        this.postlist();
    }



    async postlist() {

        this.setState({
            tabledt: null,

        })

        const urlsx = "http://localhost/wordpress/wp-json/wp/v2/posts";

        var that = this
        await axios.get(urlsx)
            .then(function(response) {
              
                if (response.data) {
                    
                    that.setState({

                        datalist: response.data
                        

                    })
                }



            })
            .catch(function(error) {
                console.log(error);
            })
    }



    render() {

        return ( 
            <div id = "createevent" >
            {this.state.datalist && this.state.datalist.length >= 1 ? (

                this.state.datalist.map((item) => {
                    return(
                        <div key={item.id}>
                        <p> {item.id} {item.title.rendered} </p>
                        <a target="_blank"  rel="noreferrer"  href={item.link}>{item.link}</a>
                        </div>
                    )

                })


                ):("--")
            }

                

            </div>

        )
    }

}
export default FrontPage