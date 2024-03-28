

export const exerciseOptions = {
    method: 'GET',
    headers: {
      // 'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      'X-RapidAPI-Key': "c0bac2aea6msh108d8db2cdd60ecp1afc8cjsnf227e55c4123",
    },
  };

// export const youtubeOptions = {
// method: 'GET',
// headers: {
//   'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
//   'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
// },
// };

export const fetchData = async (url, options) => {
const res = await fetch(url, options);
const data = await res.json();

return data;
};


