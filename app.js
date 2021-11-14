document.querySelector('.get-jokes').addEventListener('click', getJokes)


function getJokes(e){

    const number = document.querySelector('input[type="number"]').value;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function(){
        if(number === ''){
            alert('Hey, you haven\'t entered a positive number?! I want to make you laugh...')
        }
        if(number>=0){
            if(this.status===200){
                const response = JSON.parse(this.responseText)
                let output = '';
            
                if(response.type==='success'){
                    response.value.forEach(function(respond){
                        output += 
                        `
                        <li>${respond.joke}</li>
                        `;
                        
                });
                
                }else{
                    output += '<li>Something went wrong</li>'
                        
                }

            
                document.querySelector('.jokes').innerHTML = output; 
                if(number>0){
                    document.querySelector('a').style.visibility='visible';
                }else{
                    document.querySelector('a').style.visibility='hidden';

                }

            }
        }else{
            alert('A POSITIVE number please. Sheesh!')

        }
    }

    xhr.send();
    e.preventDefault();

}
