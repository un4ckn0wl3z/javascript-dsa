const isValidIPv4 = (ips) => {
    const ipv4s = ips.split('.')
    if (!ipv4s.length || ipv4s.length > 4 || ipv4s.length < 4) return false
    const validStart = ipv4s.every((ip) => !ip.startsWith('0'))
    if(!validStart) return false

    const validRange = ipv4s.every((ip) => (parseInt(ip) >= 0 && parseInt(ip) <= 255) )
    if(!validRange) return false

    return true

};

const isValidIPv4v2 = (ips) => {
    const ipv4s = ips.split('.')
    if (!ipv4s.length || ipv4s.length > 4 || ipv4s.length < 4) return false

    const valid = ipv4s.every((ip) => (parseInt(ip) >= 0 && parseInt(ip) <= 255 && parseInt(ip)+'' === ip) )
    if(!valid) return false

    return true
};

module.exports = isValidIPv4v2;
