function click(){
  document.preventDefault();
  const form = document.getElementByClassName('test')
  string json = JsonConvert.SerializeObject(form, Formatting.Indented);
  document.write(json);
}
