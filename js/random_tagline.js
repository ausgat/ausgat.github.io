window.onload = function() {
    const hour = new Date().getHours()
    const quotes = [
        "this is where i keep all my stuff",
        "i hope you enjoy your stay",
        "this blog ain't much, but it's mine",
        hour >= 4 && hour <= 20 ? "have a great day" : "have a good night",
        "you're a good person"
    ];
    
    var subtitle = document.getElementsByClassName("subtitle")[0];
    if (subtitle) {
        var random_n = (Math.floor(Math.random() * quotes.length));
        subtitle.textContent = quotes[random_n];
    }
};
