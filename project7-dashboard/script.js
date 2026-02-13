let currentEnv = "DEV";
let deployment = "Blue";

function setEnvironment(env) {
    currentEnv = env;
    document.getElementById("currentEnv").innerText =
        "Current Environment: " + env;

    if (env === "DEV") {
        document.body.style.backgroundColor = "#e0f2fe";
    } else if (env === "QA") {
        document.body.style.backgroundColor = "#fef9c3";
    } else {
        document.body.style.backgroundColor = "#fee2e2";
    }
}

function toggleDeployment() {
    if (deployment === "Blue") {
        deployment = "Green";
        document.getElementById("deploymentStatus").innerText =
            "Current Deployment: 🟢 Green";
    } else {
        deployment = "Blue";
        document.getElementById("deploymentStatus").innerText =
            "Current Deployment: 🔵 Blue";
    }
}

function generateMetrics() {
    let cpu = Math.floor(Math.random() * 100);
    let memory = Math.floor(Math.random() * 100);

    let cpuElement = document.getElementById("cpu");
    let memoryElement = document.getElementById("memory");

    cpuElement.innerText = "CPU Usage: " + cpu + "%";
    memoryElement.innerText = "Memory Usage: " + memory + "%";

    cpuElement.className = cpu > 70 ? "red" : "green";
    memoryElement.className = memory > 70 ? "red" : "green";
}

setInterval(generateMetrics, 3000);

function deploy() {
    let message = document.getElementById("deployMessage");
    message.innerText = "Deploying new version...";
    
    setTimeout(() => {
        let version = "v" + (Math.random() * 3 + 1).toFixed(1);
        message.innerText = "Deployment Successful ✅ Version: " + version;
    }, 3000);
}

document.getElementById("themeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});
