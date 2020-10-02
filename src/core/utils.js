export function capitalize(string) {
    if (typeof string !== 'string') {
        return 'n'
    }
    return string.charAt(0).toUpperCase() + string.slice(1)
}