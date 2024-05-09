window.addEventListener('DOMContentLoaded', (event) => {
  // ARGUMENT 1
  connectElements('argument1-content1', 'argument1-content2');
  connectElements('argument1-content2', 'argument1-content3');
  connectElements('argument1-content3', 'argument1-content4');
  connectElements('argument1-content4', 'argument1-content5');
  connectElements('argument1-content6', 'argument1-content7');
  connectElements('argument1-content7', 'argument1-content8');
  // ARGUMENT 2
  connectElements('argument2-content1', 'argument2-content2');
  connectElements('argument2-content2', 'argument2-content3');
  connectElements('argument2-content3', 'argument2-content4');
  connectElements('argument2-content4', 'argument2-content5');
  connectElements('argument2-content6', 'argument2-content7');
  connectElements('argument2-content8', 'argument2-content9');
  connectElements('argument2-content9', 'argument2-content10');
  connectElements('argument2-content10', 'argument2-content11');
  // ARGUMENT 3
  connectElements('argument3-content1', 'argument3-content2');
  connectElements('argument3-content2', 'argument3-content3');
  connectElements('argument3-content3', 'argument3-content4');
  connectElements('argument3-content5', 'argument3-content6');
  connectElements('argument3-content6', 'argument3-content7');
});

//function connectElements(className1, className2) {
  //const elements1 = document.getElementsByClassName(className1);
  //const elements2 = document.getElementsByClassName(className2);

  function connectElements(id1, id2) {
      const element1 = document.getElementById(id1);
      const element2 = document.getElementById(id2);

      // Da getElementsByClassName eine NodeList zurückgibt, iterieren wir durch die Elemente und verbinden sie paarweise
      // for (let i = 0; i < elements1.length; i++) {
          // const element1 = elements1[i];
          // const element2 = elements2[i];
          
          // Create a leader line between element1 and element2
      const line = new LeaderLine(element1, element2);
        
          // Customize the appearance of the leader line (optional)
      line.setOptions({
          color: '#17184b',
          size: 4,
          startPlug: 'disc',
          endPlug: 'arrow1', // Design des Endplugs als Pfeil
      });
    // }
}