//your JS code here. If required.
// Function to detect browser name and version
function detectBrowser() {
    const userAgent = navigator.userAgent;
    let browserName;
    let version;

    // Detect browser name
    if (userAgent.includes("Firefox")) {
        browserName = "Mozilla Firefox";
        version = userAgent.match(/Firefox\/(\d+)/)[1];
    } else if (userAgent.includes("Edg")) {
        browserName = "Microsoft Edge";
        version = userAgent.match(/Edg\/(\d+)/)[1];
    } else if (userAgent.includes("Chrome")) {
        browserName = "Google Chrome";
        version = userAgent.match(/Chrome\/(\d+)/)[1];
    } else if (userAgent.includes("Safari")) {
        browserName = "Safari";
        version = userAgent.match(/Version\/(\d+)/)[1];
    } else if (userAgent.includes("Opera") || userAgent.includes("OPR")) {
        browserName = "Opera";
        version = userAgent.match(/(Opera|OPR)\/(\d+)/)[2];
    } else {
        browserName = "Unknown";
        version = "Unknown";
    }

    // Display the browser information
    const browserInfoDiv = document.getElementById("browser-info");
    browserInfoDiv.textContent = `You are using ${browserName} version ${version}`;
}

// Call the function to detect and display browser information
detectBrowser();