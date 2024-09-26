document.getElementById('love-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const yourName = document.getElementById('yourName').value;
    const partnerName = document.getElementById('partnerName').value;
  
    // API call to fetch love compatibility
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '331a995671msheb7e7f0e47253bap17f64djsna9a258c37004',  
        'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
      }
    };
  
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${yourName}&fname=${partnerName}`, options)
      .then(response => response.json())
      .then(data => {
        const resultOutput = `${yourName} and ${partnerName} have a ${data.percentage}% love compatibility! ${data.result}`;
        document.getElementById('compatibility-output').textContent = resultOutput;
        document.getElementById('result').style.display = 'block';
      })
      .catch(error => {
        console.error('Error:', error);
        document.getElementById('compatibility-output').textContent = 'Something went wrong. Please try again!';
        document.getElementById('result').style.display = 'block';
      });
  });
  