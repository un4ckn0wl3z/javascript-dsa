function validateEmail(email) {
    if (email.split('@')[0] === '') return false
    if(email.includes('@') && email.includes('.')){
        return true
    }
    return false
}

function validateEmail2(email) {
    if(email.indexOf('@') == -1) return false

    const [localPath, domain] = email.split('@');
    if(localPath.length == 0 || domain.length < 3) return false

    const domainExtension = domain.split('.');
    if (domainExtension.length < 2 || domain[1] < 2 ) return false

    return true


}



module.exports = validateEmail2;
