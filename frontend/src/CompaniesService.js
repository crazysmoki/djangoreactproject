import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class CompaniesService{
	
	constructor(){}
	
	
	getCompanies() {
		const url = `${API_URL}/api/companies/`;
		return axios.get(url).then(response => response.data);
	}  
	getCompaniesByURL(link){
		const url = `${API_URL}${link}`;
		return axios.get(url).then(response => response.data);
	}
	getCompany(pk) {
		const url = `${API_URL}/api/companies/${pk}`;
		return axios.get(url).then(response => response.data);
	}
	deleteCompany(company){
		const url = `${API_URL}/api/companies/${company.pk}`;
		return axios.delete(url);
	}
	createCompany(company){
		const url = `${API_URL}/api/companies/`;
		return axios.post(url,company);
	}
	updateCompany(company){
		const url = `${API_URL}/api/companies/${company.pk}`;
		return axios.put(url,company);
	}
}
