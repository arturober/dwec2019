let notifications = ["You are late!", "Meeting at 5:00PM", "Buy groceries"];

function checkNotifications() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(!!Math.floor(Math.random()*2));
        }, 1000);
    });
}

function getNotification() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let pos = Math.floor(Math.random()*notifications.length);
            resolve(notifications[pos]);
        }, 2000);
    });
}

setInterval(() => {
    console.log("Checking notifications...");
    checkNotifications().then(hasNotifications => {
        if(hasNotifications) {
            console.log("New notification available. Getting notification...");
            return getNotification();
        } else {
            console.log("No new notifications available");
            return null;
        }
    }).then(notif => {
        if(notif)
            console.log(`MESSAGE: ${notif}`);
    });
}, 8000);