function phoneNumberDirectory(arr) {
    const phoneDir = new Map();
    for (const item of arr) {
        const [name, phone] = item.split(':')
        phoneDir.set(name, phone)
    }
    return phoneDir;
}

module.exports = phoneNumberDirectory;
