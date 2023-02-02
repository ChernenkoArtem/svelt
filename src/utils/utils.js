
export function randomIndex(max) {
    return Math.floor(Math.random() * max);
}

export function fakeLoad(duration) {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            resolve();
        }, duration)
    })

}