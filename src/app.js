const registerServiceWorker = () => {
    if('serviceWorker' in navigator){
        window.addEventListener('load',function(){
            navigator.serviceWorker.register('sw.js')
                .then(registration => console.log(registration.scope,'Service worker registered'))
                .catch(error => console.error(error, 'An error occured while registering service worker.'));
        });
    }else{
        console.warn('This browser does not support service worker');
    }
};

registerServiceWorker();
