import  React, { Component } from  'react';
import  CompaniesService  from  './CompaniesService';

const  companiesService  =  new  CompaniesService();

class  CompaniesList  extends  Component {

constructor(props) {
	super(props);
	this.state  = {
		companies: [],
		nextPageURL:  ''
	};
	this.nextPage  =  this.nextPage.bind(this);
	this.handleDelete  =  this.handleDelete.bind(this);
}

componentDidMount() {
	var  self  =  this;
	companiesService.getCompanies().then(function (result) {
		console.log(result);
		self.setState({ companies:  result.data, nextPageURL:  result.nextlink})
	});
}
handleDelete(e,pk){
	var  self  =  this;
	companiesService.deleteCompany({pk :  pk}).then(()=>{
		var  newArr  =  self.state.companies.filter(function(obj) {
			return  obj.pk  !==  pk;
		});
		
		self.setState({companies:  newArr})
	});
}

nextPage(){
	var  self  =  this;
	console.log(this.state.nextPageURL);		
	companiesService.getCompaniesByURL(this.state.nextPageURL).then((result) => {
		self.setState({ companies:  result.data, nextPageURL:  result.nextlink})
	});
}
render() {

	return (
		<div  className="companies--list">
			<table  className="table">
			<thead  key="thead">
			<tr>
				<th>#</th>
				<th>Company Name</th>
				<th>INN Company</th>
				<th>Chief</th>
				<th>Phone Company</th>
				<th>Actions</th>
			</tr>
			</thead>
			<tbody>
			{this.state.companies.map( c  =>
				<tr  key={c.pk}>
				<td>{c.pk}  </td>
				<td>{c.company_name}</td>
				<td>{c.inn_company}</td>
				<td>{c.chief}</td>
				<td>{c.phone_company}</td>
				<td>
				<button  onClick={(e)=>  this.handleDelete(e,c.pk) }> Delete</button>
				<a  href={"/company/" + c.pk}> Update</a>
				</td>
			</tr>)}
			</tbody>
			</table>
			<button  className="btn btn-primary" onClick=  {  this.nextPage  }>Next</button>
		</div>
		);
  }
}
export  default  CompaniesList;

