// content.js
let overlayShown = false;

// Set up connection check listener
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // Respond to ping messages immediately
  if (request.action === "ping") {
    sendResponse({ status: "connected" });
    return true;
  }
  
  // Handle the show overlay message
  if (request.action === "showOverlay" && !overlayShown) {
    createOverlay();
    overlayShown = true;
    sendResponse({ status: "overlay_created" });
    return true;
  }
  
  return false;
});

// Notify background script that content script is loaded
chrome.runtime.sendMessage({ action: "contentScriptReady" });

function createOverlay() {
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100vw";
  overlay.style.height = "100vh";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.95)";
  overlay.style.zIndex = "9999";
  overlay.style.display = "flex";
  overlay.style.flexDirection = "column";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";

  // Create and style the message
  const message = document.createElement("div");
  message.style.color = "white";
  message.style.fontSize = "24px";
  message.style.textAlign = "center";
  message.style.marginBottom = "30px";
  message.style.maxWidth = "600px";
  message.style.lineHeight = "1.5";
  message.innerHTML = `
    <h2 style="color: #ff0000; margin-bottom: 20px;">YouTube Shorts Notice</h2>
    <p>⚠️ You're about to enter YouTube Shorts!</p>
    <p style="font-size: 18px; margin-top: 15px;">
      Remember: Shorts are designed to be addictive and can lead to prolonged, unproductive viewing sessions.
    </p>
  `;

  // Create a container for buttons
  const buttonContainer = document.createElement("div");
  buttonContainer.style.display = "flex";
  buttonContainer.style.gap = "20px";
  buttonContainer.style.marginTop = "30px";

  // Create and style the Regular YouTube button
  const buttonRegular = document.createElement("button");
  buttonRegular.innerText = "Go to Regular YouTube";
  buttonRegular.style.padding = "12px 24px";
  buttonRegular.style.fontSize = "18px";
  buttonRegular.style.cursor = "pointer";
  buttonRegular.style.borderRadius = "4px";
  buttonRegular.style.border = "none";
  buttonRegular.style.backgroundColor = "#ff0000";
  buttonRegular.style.color = "#ffffff";
  buttonRegular.style.fontWeight = "bold";

  // Create and style the Continue button
  const buttonContinue = document.createElement("button");
  buttonContinue.innerText = "Continue to Shorts";
  buttonContinue.style.padding = "12px 24px";
  buttonContinue.style.fontSize = "18px";
  buttonContinue.style.cursor = "pointer";
  buttonContinue.style.borderRadius = "4px";
  buttonContinue.style.border = "1px solid #ffffff";
  buttonContinue.style.backgroundColor = "transparent";
  buttonContinue.style.color = "#ffffff";

  // Add event listeners
  buttonRegular.addEventListener("click", () => {
    window.location.href = "https://www.youtube.com";
  });

  buttonContinue.addEventListener("click", () => {
    overlay.remove();
    overlayShown = false;
  });

  // Add buttons to the container
  buttonContainer.appendChild(buttonRegular);
  buttonContainer.appendChild(buttonContinue);

  // Add elements to the overlay
  overlay.appendChild(message);
  overlay.appendChild(buttonContainer);

  // Add overlay to the document
  document.body.appendChild(overlay);
}
