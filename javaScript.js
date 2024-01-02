let current = 'blue';
function changeTheme()
{
    const link = document.getElementById('theme');
    link.setAttribute('href',`style_${current}.css`);
       
    switch(current)
    {
        case 'green':
            current = 'blue';
            break;
         case 'blue':
             current = 'green';
             break;
         default:
          break;
    }
}