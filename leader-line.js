window.addEventListener('DOMContentLoaded', (event) => {
  connectElements('container-argument1-content1', 'argument1-content2');
  connectElements('argument1-content3', 'argument1-content4');
  connectElements('argument1-content4', 'argument1-content5');
  connectElements('argument1-content5', 'argument1-content6');
  connectElements('argument1-content6', 'argument1-content7');
  //connectElements('argument1-bigpicture', 'argument1-quote');
});

function connectElements(className1, className2) {
  const elements1 = document.getElementsByClassName(className1);
  const elements2 = document.getElementsByClassName(className2);

  // Da getElementsByClassName eine NodeList zurückgibt, iterieren wir durch die Elemente und verbinden sie paarweise
  for (let i = 0; i < elements1.length; i++) {
      const element1 = elements1[i];
      const element2 = elements2[i];
      
      // Create a leader line between element1 and element2
      const line = new LeaderLine(element1, element2);
      
      // Customize the appearance of the leader line (optional)
      line.setOptions({
          color: '#17184b',
          size: 4,
          startPlug: 'disc',
          endPlug: 'arrow1', // Design des Endplugs als Pfeil
      });
  }
}