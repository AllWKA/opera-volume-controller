chrome.runtime.onMessage.addListener((request, sender) => {
    if (request.request === 'volume') {
        const videos = document.getElementsByTagName('VIDEO')
        if (videos) {
            for (let i = 0; i < videos.length; i++) {
                videos[i].volume = request.volume / 2;
            }
        }

        const audios = document.getElementsByTagName('AUDIO')
        if (audios) {
            for (let i = 0; i < audios.length; i++) {
                audios[i].volume = request.volume / 2;
            }
        }
        //TODO try to send to popup html info... must be bidirectional...some how....
    }
    // document.addEventListener('click', () => {
    //     setTimeout(() => {
    //         if (request.request === 'volume') {
    //             //take the storaged volume
    //             const videos = document.getElementsByTagName('VIDEO')
    //             for (let i = 0; i < videos.length; i++) {
    //                 videos[i].volume = request.volume / 2;
    //             }

    //             const audio = document.getElementsByTagName('AUDIO')
    //             for (let i = 0; i < videos.length; i++) {
    //                 audio[i].volume = request.volume / 2;
    //             }
    //         }
    //     }, 100)
    // })
})