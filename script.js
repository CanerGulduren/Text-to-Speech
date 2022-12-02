let container = document.getElementById("container")
let txtArea = document.getElementById("txt-area")
let speakBtn = document.getElementById("speak-btn")

speakBtn.onclick = () => {
    let text = txtArea.value
    let speech = new SpeechSynthesisUtterance()
    speech.lang = "tr-TR"
    speech.text = text
    speech.rate = 1
    speech.volume = 1
    speech.pitch = 1
    speechSynthesis.speak(speech)
}