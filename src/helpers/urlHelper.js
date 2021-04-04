import qs from 'qs'
export function formatQueryString(params) {
    return qs.stringify(params, {
        arrayFormat: 'indices',
        allowDots: true
    })
}