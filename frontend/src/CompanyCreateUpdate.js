import React, { Component } from 'react';
import CompaniesService from './CompaniesService';
import InstantSearch from './components/InstantSearch';
import SearchForm from './components/SearchForm';



const companiesService = new CompaniesService();

class CompanyCreateUpdate extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentDidMount(){
        const { match: { params } } = this.props;
        if(params && params.pk)
        {
          companiesService.getCompany(params.pk).then((c)=>{
            this.refs.companyName.value = c.company_name;
            this.refs.innCompany.value = c.inn_company;
            this.refs.chief.value = c.chief;
            this.refs.phoneCompany.value = c.phone_company;
                        
          })
        }
      }

      handleCreate(){
        companiesService.createCompany(
          {
            "company_name": this.refs.companyName.value,
            "inn_company": this.refs.innCompany.value,
            "chief": this.refs.chief.value,
            "phone_company": this.refs.phoneCompany.value,
                        
        }          
        ).then((result)=>{
          alert("Company created!");
        }).catch(()=>{
          alert('There was an error! Please re-check your form.');
        });
      }
      handleUpdate(pk){
        companiesService.updateCompany(
          {
            "pk": pk,
            "company_name": this.refs.companyName.value,
            "inn_company": this.refs.innCompany.value,
            "chief": this.refs.chief.value,
            "phone_company": this.refs.phoneCompany.value,
                        
        }          
        ).then((result)=>{
          console.log(result);
          alert("Company updated!");
        }).catch(()=>{
          alert('There was an error! Please re-check your form.');
        });
      }
      handleSubmit(event) {
        const { match: { params } } = this.props;

        if(params && params.pk){
          this.handleUpdate(params.pk);
        }
        else
        {
          this.handleCreate();
        }

        event.preventDefault();
      }
      
      render() {
        return (
          <div>
          <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              Company Name:</label>
              <input className="form-control" type="text" ref='companyName' />

            <label>
              INN Company:</label>
              <input className="form-control" type="text" ref='innCompany'/>

            <label>
              Chief:</label>
              <input className="form-control" type="text" ref='chief' />

            <label>
              Phone Company:</label>
              <input className="form-control" type="text" ref='phoneCompany' />

                                    
            <input className="btn btn-primary" type="submit" value="Submit" />                       
          </div>             
          </form>
            <div>
              <InstantSearch/>
            </div>
          </div>
        );
      }  
}





export default CompanyCreateUpdate;
