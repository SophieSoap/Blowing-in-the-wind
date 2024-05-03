


window.addEventListener('DOMContentLoaded', (event) => {
    const element1 = document.getElementById('introduction');
    const element2 = document.getElementById('sources');
  
    // Create a leader line between element1 and element2
    const line = new LeaderLine(element1, element2);
  
    // Customize the appearance of the leader line (optional)
    line.setOptions({
      color: 'red',
      size: 4,
      startPlug: 'disc',
      endPlug: 'disc',
    });
  });
  