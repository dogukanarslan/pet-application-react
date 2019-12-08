import React from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

class Pet extends React.Component {
  constructor(props){
    super(props)
  }

  addToFavorite(pet){
    return (
      axios.post("http://5dd7af92505c590014d3b4ac.mockapi.io/favorites"),{pet}).then((data)=>{
        if(data){

        }
      }) ;
  }
  render(){
    const {name, image, age, description, breed,id} = this.props;
    return (
        <div className="col-lg-6 col-md-4 mb-4">

            <div className="card h-100">
                <img className="card-img-top" src={image} alt="" style={{height: "292px"}}/>
                <div className="card-body">
                    <h4 className="card-title">
                        <Link className="goDetails" to={`/details/${id}`}>
                        <p>{name}</p>
                        </Link>
                        <div>
                            <span className="badge badge-primary" style={{fontSize: "12px"}}>{breed}</span>
                        </div>
                        
                        <div>
                            <span className="badge badge-warning" style={{fontSize: "12px"}}>{age}</span>
                        </div>
                    </h4>
                    <p className="card-text">
                        {description}
                    </p>
                </div>
                <div className="card-footer">
                    <div onClick={()=>this.addToFavorite(this.props.pet)} className="btn btn-success">Favorilere Ekle</div>
                </div>
            </div>

        </div>
    )};
}

export default Pet;
