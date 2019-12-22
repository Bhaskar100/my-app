import React from 'react';
import axios from 'axios';

export default class Studentlist extends React.Component{

    state ={

        students:[],
    };

    componentDidMount(){

        axios.get('https://springboot-rest-hibernate.herokuapp.com/students//allStudents').then(res =>{

        console.log(res);
        this.setState({students:res.data});
        });
    }

    renderTableData() {
        return this.state.students.map((student) => {
           const { id, name, institution } = student //destructuring
           return (
               
              <tr >
                 <td >{id}</td>
                 <td >{name}</td>
                 <td >{institution}</td>
              </tr>
           )
        })
     }

     render() {
        return (
           <div>
              <table border="1">
              <tr>
                   <th>id</th>
                   <th>name</th>
                   <th>institution</th>
               </tr>
                 <tbody>
                    {this.renderTableData()}
                 </tbody>
              </table>
           </div>
        )
     }

}
