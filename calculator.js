
const buttons = document.getElementsByClassName('buttons');
const output = document.getElementById('output');
let screenString = ''

// Iterate through all the buttons
for(b of buttons)
{
    b.addEventListener('click', (e)=> {

        if(e.target.textContent === 'X')
        {
            screenString += '*';
            output.value = screenString;
        }

        else if(e.target.textContent === 'C')
        {
            screenString = '';
            output.value = screenString;
        }

        else if(e.target.textContent === '=')
        {
            screenString = eval(screenString);
            output.value = screenString;
        }

        // Backspace by one character
        else if(e.target.textContent === 'Back')
        {   
            // Convert string to array
            let screenValueArr = screenString.split('');
            // Remove last element of array
            screenValueArr.pop();
            // Convert updated array to string
            let screenValueStr = '';
            screenValueArr.forEach(e=>{
                screenValueStr += e;
            });

            screenString = screenValueStr;
            output.value = screenString;
        }
        
        else
        {
            screenString += e.target.textContent;
            output.value = screenString;
            //console.log(e.target.textContent);

        }
    });
}