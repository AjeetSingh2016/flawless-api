const getData = async () =>{
    const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/black`
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data[0].meanings[0].definitions[0].definition);
}
getData();
  