const url = 'https://jobs-api14.p.rapidapi.com/salary/getJobTitles?query=web%20developer&countryCode=US';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'c0bac2aea6msh108d8db2cdd60ecp1afc8cjsnf227e55c4123',
		'x-rapidapi-host': 'jobs-api14.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result, 'here');
} catch (error) {
	console.error(error);
}

export const jobOptions = {

}

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};


const url = 'https://jobs-api14.p.rapidapi.com/v2/list?query=Web%20Developer&location=United%20States&autoTranslateLocation=false&remoteOnly=false&employmentTypes=fulltime%3Bparttime%3Bintern%3Bcontractor';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'c0bac2aea6msh108d8db2cdd60ecp1afc8cjsnf227e55c4123',
		'x-rapidapi-host': 'jobs-api14.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}