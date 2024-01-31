/* anonymizes the username(local part) of an email ID, that is, 
replace the username part with * characters.
*/
const emails = ['mary@northeastern.edu', 'ari@khoury.northeastern.edu', 'jk_neu.edu', 'jk@neu.edu', 'jsned@', 'ai_me@mugar.northeastern.edu'];
window.onload = function hideEmail() {
    for (const email of emails) {
        if(email.match(/^[a-z0-9_]+@(.+\.)*northeastern.edu$/)) {
            console.log(email);
            const listItenm = document.createElement('li');
            listItenm.textContent = email.slice(0,email.indexOf('@')).replace(/./g,'*') + email.slice(email.indexOf('@'));
            list.appendChild(listItenm);
        }
    }
}

    const list = document.getElementById('emails')
    list.innerHTML = '';
    for (const email of emails) {
        // complete the loop
        if(isValid(email)) {
            //splite based on @
            //split[0].replace().
        }
    }


function isValid(email) {
    return /^[a-zA-Z0-9_]/
}