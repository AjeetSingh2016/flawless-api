const getData = async () =>{
    const URL = `https://ajeetsingh2016.github.io/flawless-api/Dictionary/api.json`
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
}
getData();
  